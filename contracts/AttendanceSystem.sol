// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract AttendanceSystem {
    address public owner;

    struct Attendance {
        bool isPresent;
        uint256 timestamp;
    }

    struct Class {
        string name;
        address teacher;
        bool isApproved;
        address[] studentList;
        mapping(address => bool) students;
        mapping(address => mapping(uint256 => Attendance)) attendanceRecords;
        mapping(address => uint256) attendanceCount;
    }

    struct PendingClass {
        string name;
        address teacher;
        bool isApproved;
        bool isProcessed;  // Added field
        bool isRejected;   // Added field
    }

    mapping(uint256 => Class) public classes;
    mapping(uint256 => PendingClass) public pendingClasses;

    uint256 public classCount;
    uint256 public pendingClassCount;

    event ClassPending(uint256 classId, string name, address teacher);
    event ClassApproved(uint256 classId);
    event ClassRejected(uint256 classId);
    event StudentAdded(uint256 classId, address student);
    event AttendanceMarked(uint256 classId, address indexed user, bool isPresent, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == owner, "chi addmin duyet loplop");
        _;
    }

    modifier onlyTeacher(uint256 classId) {
        require(msg.sender == classes[classId].teacher, "chi giang vien co quyen chinh sua lop naynay");
        _;
    }

    function createClass(string memory _name) public {
        require(bytes(_name).length > 0, "Class name cannot be empty");

        pendingClassCount++;
        pendingClasses[pendingClassCount] = PendingClass({
            name: _name,
            teacher: msg.sender,
            isApproved: false,
            isProcessed: false,  // Initialize the new field
            isRejected: false    // Initialize the new field
        });

        emit ClassPending(pendingClassCount, _name, msg.sender);
    }

    function getPendingClasses() public view returns (uint256[] memory, string[] memory, address[] memory) {
        uint256 validCount = 0;

        // Đếm số lớp hợp lệ
        for (uint256 i = 1; i <= pendingClassCount; i++) {
            if (pendingClasses[i].teacher != address(0) && !pendingClasses[i].isProcessed) {
                validCount++;
            }
        }

        // Khai báo mảng trong phạm vi function
        uint256[] memory ids = new uint256[](validCount);
        string[] memory names = new string[](validCount);
        address[] memory teachers = new address[](validCount);

        uint256 index = 0;
        for (uint256 i = 1; i <= pendingClassCount; i++) {
            if (pendingClasses[i].teacher != address(0) && !pendingClasses[i].isProcessed) {
                ids[index] = i;
                names[index] = pendingClasses[i].name;
                teachers[index] = pendingClasses[i].teacher;
                index++;
            }
        }

        return (ids, names, teachers);
    }

    function getApprovedClasses() public view returns (uint256[] memory, string[] memory, address[] memory) {
        uint256 validCount = 0;

        // Đếm số lớp hợp lệ
        for (uint256 i = 1; i <= classCount; i++) {
            if (classes[i].isApproved) {
                validCount++;
            }
        }

        // Khai báo mảng trong phạm vi function
        uint256[] memory ids = new uint256[](validCount);
        string[] memory names = new string[](validCount);
        address[] memory teachers = new address[](validCount);

        uint256 index = 0;
        for (uint256 i = 1; i <= classCount; i++) {
            if (classes[i].isApproved) {
                ids[index] = i;
                names[index] = classes[i].name;
                teachers[index] = classes[i].teacher;
                index++;
            }
        }

        return (ids, names, teachers);
    }

    function approveClass(uint256 _pendingClassId) public onlyAdmin {
        require(pendingClasses[_pendingClassId].teacher != address(0), "Class not found");
        require(!pendingClasses[_pendingClassId].isProcessed, "Class already processed");
        
        classCount++;
        classes[classCount].name = pendingClasses[_pendingClassId].name;
        classes[classCount].teacher = pendingClasses[_pendingClassId].teacher;
        classes[classCount].isApproved = true;
        
        // Mark as processed instead of deleting
        pendingClasses[_pendingClassId].isProcessed = true;
        
        emit ClassApproved(classCount);
    }
    
    function getAdmin() public view returns (address) {
        return owner;
    }

    function rejectClass(uint256 _pendingClassId) public onlyAdmin {
        require(pendingClasses[_pendingClassId].teacher != address(0), "Lop khong ton tai");
        require(!pendingClasses[_pendingClassId].isProcessed, "Class already processed");
        
        pendingClasses[_pendingClassId].isProcessed = true;
        pendingClasses[_pendingClassId].isRejected = true;
        
        emit ClassRejected(_pendingClassId);
    }

    function addStudent(uint256 _classId, address _student) public onlyTeacher(_classId) {
        require(classes[_classId].isApproved, "lop chua duoc phe duyetduyet");
        require(_student != address(0), "dia chi sinh vien khong hop lele");
        require(!classes[_classId].students[_student], "sinh vien da co trong loplop");

        classes[_classId].students[_student] = true;
        classes[_classId].studentList.push(_student);

        emit StudentAdded(_classId, _student);
    }

    function markAttendance(uint256 _classId, bool _isPresent) public {
        require(classes[_classId].isApproved, "lop chua duoc duyetduyet");
        require(classes[_classId].students[msg.sender], "ban chua dang ki lop nanay");

        uint256 count = classes[_classId].attendanceCount[msg.sender];
        classes[_classId].attendanceRecords[msg.sender][count] = Attendance(_isPresent, block.timestamp);
        classes[_classId].attendanceCount[msg.sender]++;

        emit AttendanceMarked(_classId, msg.sender, _isPresent, block.timestamp);
    }

    function getAttendanceCount(uint256 _classId, address _student) public view returns (uint256) {
        return classes[_classId].attendanceCount[_student];
    }

    function getAttendanceRecord(uint256 _classId, address _student, uint256 index) public view returns (bool, uint256) {
        require(index < classes[_classId].attendanceCount[_student], "Index vuot qua gioi han");

        Attendance storage record = classes[_classId].attendanceRecords[_student][index];
        return (record.isPresent, record.timestamp);
    }

    function getStudents(uint256 _classId) public view returns (address[] memory) {
        return classes[_classId].studentList;
    }

    function getTotalClasses() public view returns (uint256) {
        return classCount;
    }
}