const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPresent",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AttendanceMarked",
    type: "event",
  },
  {
    inputs: [],
    name: "getApprovedClasses",
    outputs: [
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "string[]", name: "", type: "string[]" },
      { internalType: "address[]", name: "", type: "address[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
    ],
    name: "ClassApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "teacher",
        type: "address",
      },
    ],
    name: "ClassPending",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
    ],
    name: "ClassRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "student",
        type: "address",
      },
    ],
    name: "StudentAdded",
    type: "event",
  },
  {
    inputs: [],
    name: "classCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "classes",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "teacher",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "pendingClassCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pendingClasses",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "teacher",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createClass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingClasses",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pendingClassId",
        type: "uint256",
      },
    ],
    name: "approveClass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pendingClassId",
        type: "uint256",
      },
    ],
    name: "rejectClass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_classId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_student",
        type: "address",
      },
    ],
    name: "addStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_classId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isPresent",
        type: "bool",
      },
    ],
    name: "markAttendance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_classId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_student",
        type: "address",
      },
    ],
    name: "getAttendanceCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_classId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_student",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getAttendanceRecord",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_classId",
        type: "uint256",
      },
    ],
    name: "getStudents",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getTotalClasses",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];

const contractAddress = "0x8fd75Fd24Ec2976AcA0FeDE6b617A1f8248b03b0";

let web3;
let contract;
let accounts;

// Khi tài liệu HTML đã tải xong
document.addEventListener("DOMContentLoaded", async function () {
  const params = new URLSearchParams(window.location.search);
  const role = params.get("role"); // Lấy vai trò từ URL
  const teacherPanel = document.getElementById("teacherPanel");
  const studentPanel = document.getElementById("studentPanel");
  const walletAddressP = document.getElementById("walletAddress");
  const adminPanel = document.getElementById("adminPanel");

  if (window.ethereum) {
    try {
      web3 = new Web3(window.ethereum);
      accounts = await web3.eth.getAccounts();
      contract = new web3.eth.Contract(contractABI, contractAddress);
      console.log("📜 Hợp đồng đã tải:", contract);
    } catch (error) {
      console.error("❌ Lỗi khi khởi tạo web3 hoặc hợp đồng:", error);
      alert("❌ Lỗi khi khởi tạo web3 hoặc hợp đồng. Vui lòng thử lại.");
      return;
    }
  } else {
    alert("⚠️ Bạn cần cài MetaMask để sử dụng!");
    return;
  }

  if (!contract) {
    console.error("❌ Hợp đồng chưa được tải.");
    return;
  }

  if (!role) {
    // Nếu không có role, quay về trang chọn vai trò
    window.location.href = "role.html";
  }

  // Hiển thị giao diện theo vai trò
  if (role === "teacher") {
    teacherPanel.style.display = "block";
    await loadApprovedClasses("classListForAddingStudent"); // Load danh sách lớp đã
  } else if (role === "student") {
    studentPanel.style.display = "block";
    await loadApprovedClasses("classList"); // Load danh sách lớp cho sinh viên
  } else if (role === "admin") {
    adminPanel.style.display = "block";
    await loadPendingClasses(); // Load danh sách lớp chờ duyệt khi vào admin
  }

  const connectWalletButton = document.getElementById("connectWallet");
  if (connectWalletButton) {
    connectWalletButton.addEventListener("click", connectWallet);
  }

  const createClassButton = document.getElementById("createClass");
  if (createClassButton) {
    createClassButton.addEventListener("click", createClass);
  }

  const addStudentButton = document.getElementById("addStudent");
  if (addStudentButton) {
    addStudentButton.addEventListener("click", addStudent);
  }

  const markAttendanceButton = document.getElementById("markAttendance");
  if (markAttendanceButton) {
    markAttendanceButton.addEventListener("click", markAttendance);
  }

  const viewAttendanceButton = document.getElementById("viewAttendance");
  if (viewAttendanceButton) {
    viewAttendanceButton.addEventListener("click", viewAttendance);
  }

  // Lấy các phần tử DOM
  const studentListModal = document.getElementById("studentListModal");
  const closeModal = document.querySelector(".close");

  // Mở modal khi nhấn nút "Danh sách các học sinh"
  const listStudentButton = document.getElementById("listStudent");
  if (listStudentButton) {
    listStudentButton.addEventListener("click", async () => {
      try {
        const classId = document.getElementById(
          "classListForAddingStudent"
        ).value;
        const optionData = document.querySelector(`option[value="${classId}"]`);
        if (!classId) return showSnackbar("⚠️ Vui lòng chọn lớp!");

        console.log(classId);
        // Lấy danh sách sinh viên từ hợp đồng
        const students = await contract.methods.getStudents(classId).call();

        // Xóa dữ liệu cũ trong bảng
        const studentTableBody = document.querySelector("#studentTable tbody");
        studentTableBody.innerHTML = "";

        // Thêm từng sinh viên vào bảng
        students.forEach((student) => {
          const row = document.createElement("tr");
          const addressCell = document.createElement("td");
          const classCell = document.createElement("td");

          addressCell.textContent = student;
          classCell.textContent = `${optionData.dataset.className}`;

          row.appendChild(addressCell);
          row.appendChild(classCell);
          studentTableBody.appendChild(row);
        });

        studentListModal.style.display = "block";
      } catch (error) {
        console.error("❌ Lỗi khi lấy danh sách sinh viên:", error);
        showSnackbar("❌ Lỗi khi lấy danh sách sinh viên!");
      }
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      studentListModal.style.display = "none";
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target === studentListModal) {
      studentListModal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const role = params.get("role");

  if (role === "teacher") {
    document.getElementById("teacherPanel").style.display = "block";
    loadApprovedClasses("classListForAddingStudent");
  } else if (role === "student") {
    document.getElementById("studentPanel").style.display = "block";
    loadApprovedClasses("classList");
  } else if (role === "admin") {
    document.getElementById("adminPanel").style.display = "block";
    loadPendingClasses(); // Gọi hàm lấy danh sách lớp chờ duyệt
  }
});

async function loadApprovedClasses(selectId) {
  try {
    const approvedClasses = await contract.methods.getApprovedClasses().call();

    const classIds = approvedClasses[0]; // Danh sách ID lớp
    const classNames = approvedClasses[1]; // Danh sách tên lớp

    const select = document.getElementById(selectId);
    if (!select) {
      console.error(`❌ Không tìm thấy select với ID: ${selectId}`);
      return;
    }

    select.innerHTML = `<option value="" disabled selected>Chọn lớp</option>`; // Reset danh sách

    for (let i = 0; i < classIds.length; i++) {
      let option = document.createElement("option");
      option.value = classIds[i];
      option.textContent = `No.${classIds[i]}: ${classNames[i]}`;
      select.appendChild(option);
    }

    console.log(`✅ Danh sách lớp đã load vào #${selectId} thành công`);
  } catch (error) {
    console.error("❌ Lỗi khi load danh sách lớp:", error);
  }
}

// Gọi hàm này khi trang admin tải xong
document.addEventListener("DOMContentLoaded", async function () {
  await loadPendingClasses();
});

//1
async function approveClass(classId) {
  try {
    console.log(`Starting to approve class ${classId}`);

    // Get current gas price and add a small buffer
    const gasPrice = await web3.eth.getGasPrice();
    const gasPriceWithBuffer = Math.floor(Number(gasPrice) * 1.1).toString();

    console.log(`Gas price: ${gasPriceWithBuffer}`);

    // Send transaction with explicit gas parameters
    const result = await contract.methods.approveClass(classId).send({
      from: accounts[0],
      gas: 300000,
      gasPrice: gasPriceWithBuffer,
    });

    console.log("Transaction successful:", result);
    alert("✅ Lớp đã được duyệt!");
    loadPendingClasses(); // Cập nhật danh sách lớp chờ duyệt
  } catch (error) {
    console.error("❌ Lỗi khi duyệt lớp:", error);
    // More detailed error logging
    if (error.message) console.error("Error message:", error.message);
    if (error.code) console.error("Error code:", error.code);
    alert(`Lỗi: ${error.message ? error.message : "Unknown error"}`);
  }
}

async function rejectClass(classId) {
  try {
    console.log(`Starting to reject class ${classId}`);

    // Get current gas price and add a small buffer
    const gasPrice = await web3.eth.getGasPrice();
    const gasPriceWithBuffer = Math.floor(Number(gasPrice) * 1.1).toString();

    console.log(`Gas price: ${gasPriceWithBuffer}`);

    // Send transaction with explicit gas parameters
    const result = await contract.methods.rejectClass(classId).send({
      from: accounts[0],
      gas: 300000,
      gasPrice: gasPriceWithBuffer,
    });

    console.log("Transaction successful:", result);
    alert("❌ Lớp đã bị từ chối!");
    loadPendingClasses(); // Cập nhật danh sách lớp chờ duyệt
  } catch (error) {
    console.error("❌ Lỗi khi từ chối lớp:", error);
    // More detailed error logging
    if (error.message) console.error("Error message:", error.message);
    if (error.code) console.error("Error code:", error.code);
    alert(`Lỗi: ${error.message ? error.message : "Unknown error"}`);
  }
}
let adminAddress = localStorage.getItem("adminAddress") || null;

async function connectWallet() {
  if (window.ethereum) {
    try {
      console.log("🔗 Kết nối MetaMask...");
      web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      accounts = await web3.eth.getAccounts();
      console.log("✅ Đã kết nối với tài khoản:", accounts[0]);

      document.getElementById(
        "walletAddress"
      ).innerText = `🟢 Đã kết nối: ${accounts[0]}`;
      contract = new web3.eth.Contract(contractABI, contractAddress);
      console.log("📜 Hợp đồng đã tải:", contract);

      // 🟢 Load danh sách lớp chờ duyệt
      await loadPendingClasses();
    } catch (error) {
      console.error("❌ Lỗi khi kết nối MetaMask:", error);
    }
  } else {
    alert("⚠️ Bạn cần cài MetaMask để sử dụng!");
  }
}

async function createClass() {
  const className = document.getElementById("className").value.trim();
  if (!className) return alert("⚠️ Vui lòng nhập tên lớp!");

  try {
    await contract.methods.createClass(className).send({ from: accounts[0] });
    alert("✅ Lớp học đã được tạo, chờ Admin duyệt!");
    window.location.href = "admin_login.html?role=admin"; // Chuyển sang trang Admin
  } catch (error) {
    console.error("❌ Lỗi khi tạo lớp:", error);
  }
}
async function loadPendingClasses() {
  if (!contract) {
    console.error("❌ Hợp đồng chưa được tải.");
    return;
  }

  try {
    console.log("📌 Đang tải danh sách lớp chờ duyệt...");
    const result = await contract.methods.getPendingClasses().call();
    console.log("✅ Dữ liệu lớp chờ:", result);

    const pendingClassesList = document.getElementById("pendingClassesList");
    if (!pendingClassesList) {
      console.error("❌ Không tìm thấy element pendingClassesList");
      return;
    }

    pendingClassesList.innerHTML = ""; // Xóa danh sách cũ trước khi thêm mới

    // Web3.js trả về giá trị dưới dạng các thuộc tính số (0, 1, 2)
    const classIds = result[0]; // Mảng ID lớp
    const classNames = result[1]; // Mảng tên lớp
    const teachers = result[2]; // Mảng địa chỉ giáo viên

    if (!classIds || !classNames || !teachers) {
      console.error("❌ Dữ liệu trả về không hợp lệ:", result);
      return;
    }

    for (let i = 0; i < classIds.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${classNames[i]}</strong> (GV: ${teachers[i]}) 
        <button onclick="approveClass(${classIds[i]})">✅ Duyệt</button>
        <button onclick="rejectClass(${classIds[i]})">❌ Từ chối</button>
      `;
      pendingClassesList.appendChild(li);
    }
  } catch (error) {
    console.error("❌ Lỗi khi tải danh sách lớp chờ duyệt:", error);
    console.error("Chi tiết lỗi:", error.message);
  }
}

async function getAdminAddress() {
  const adminAddress = await contract.methods.getAdmin().call();
  return adminAddress.toLowerCase();
}
async function loginWithMetaMask() {
  if (window.ethereum) {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0]; // Lấy địa chỉ ví người dùng

      console.log("🔹 Địa chỉ ví:", userAddress);

      const adminAddress = "0xD04B8057460F760dca8CEF697e596dfc10a9Ec9e";
      const message =
        "Xác thực đăng nhập Admin vào hệ thống Blockchain Attendance";

      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, userAddress],
      });

      console.log("✅ Ký thành công:", signature);

      if (userAddress.toLowerCase() === adminAddress.toLowerCase()) {
        console.log("🔓 Đăng nhập thành công với vai trò Admin");
        // Ẩn nút đăng nhập
        document.querySelector(
          "button[onclick='loginWithMetaMask()']"
        ).style.display = "none";

        // Ẩn thông báo lỗi nếu có
        document.getElementById("errorMessage").style.display = "none";

        // Hiển thị thông báo đăng nhập thành công
        const loginStatusElement = document.createElement("div");
        loginStatusElement.innerHTML = `<p class="success-message">✅ Đã đăng nhập thành công với địa chỉ: ${userAddress}</p>`;
        loginStatusElement.className = "login-status";

        // Thêm vào trước adminPanel
        const adminPanel = document.getElementById("adminPanel");
        adminPanel.parentNode.insertBefore(loginStatusElement, adminPanel);

        // Hiển thị danh sách lớp
        adminPanel.style.display = "block";

        // Load danh sách lớp chờ duyệt
        await loadPendingClasses();
      } else {
        console.log("❌ Địa chỉ ví không khớp với địa chỉ Admin");
        document.getElementById("errorMessage").style.display = "block";
      }
    } catch (error) {
      console.error("❌ Lỗi khi đăng nhập:", error);
      document.getElementById("errorMessage").innerText =
        "Lỗi khi kết nối MetaMask!";
      document.getElementById("errorMessage").style.display = "block";
    }
  } else {
    alert("⚠️ Bạn cần cài MetaMask để đăng nhập!");
  }
}

async function addStudent() {
  const classId = document.getElementById("classListForAddingStudent")?.value;
  const studentAddress = document
    .getElementById("studentAddress")
    ?.value.trim();
  if (!studentAddress)
    return showSnackbar("⚠️ Vui lòng nhập địa chỉ ví của học sinh!");

  try {
    await contract.methods
      .addStudent(classId, studentAddress)
      .send({ from: accounts[0] });
    showSnackbar("✅ Học sinh đã được thêm vào lớp!");
  } catch (error) {
    console.error("❌ Lỗi khi thêm học sinh:", error);
  }
}

async function markAttendance() {
  const classId = document.getElementById("classList")?.value;
  if (!classId) return showSnackbar("⚠️ Vui lòng chọn lớp học!");

  try {
    await contract.methods
      .markAttendance(classId, true)
      .send({ from: accounts[0] })
      .on("receipt", () => showSnackbar("✅ Điểm danh thành công!"));
  } catch (error) {
    console.error("❌ Lỗi khi điểm danh:", error);
  }
}

async function viewAttendance() {
  try {
    const history = document.getElementById("attendanceHistory");
    history.innerHTML = "";

    const studentAddress = accounts[0];
    console.log("📌 Địa chỉ sinh viên:", studentAddress);

    if (!studentAddress) {
      showSnackbar(
        "❌ Vui lòng kết nối MetaMask trước khi xem lịch sử điểm danh."
      );
      return;
    }

    const totalClasses = Number(
      await contract.methods.getTotalClasses().call()
    );
    console.log("📌 Tổng số lớp:", totalClasses);

    for (let i = 1; i <= totalClasses; i++) {
      const attendanceCount = await contract.methods
        .getAttendanceCount(i, studentAddress)
        .call();

      // 🔥 Lấy thông tin lớp học từ hợp đồng
      const classData = await contract.methods.classes(i).call();
      const className = classData.name; // Tên lớp

      for (let j = 0; j < attendanceCount; j++) {
        const record = await contract.methods
          .getAttendanceRecord(i, studentAddress, j)
          .call();

        const li = document.createElement("li");
        li.innerText = `📚 ${className}: ${
          record[0] ? "✅ Có mặt" : "❌ Vắng"
        } - ${new Date(Number(record[1]) * 1000).toLocaleString()}`;
        history.appendChild(li);
      }
    }
  } catch (error) {
    console.error("❌ Lỗi khi xem lịch sử điểm danh:", error);
  }
}

function showSnackbar(message, type = "info") {
  const snackbar = document.getElementById("snackbar");

  // Xóa các class cũ và thêm class mới
  snackbar.className = "show";
  snackbar.classList.add(type);

  // Hiển thị nội dung snackbar
  snackbar.innerText = message;

  // Ẩn sau 3 giây
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
}
