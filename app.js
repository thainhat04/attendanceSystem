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
    name: "ClassCreated",
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
const contractAddress = "0xA29F48720d65da84fe2F5e4062A6D1Cb2dd191c4";

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
    web3 = new Web3(window.ethereum);
    accounts = await web3.eth.getAccounts();
    contract = new web3.eth.Contract(contractABI, contractAddress);
}

if (window.location.pathname.includes("admin.html")) {
    loadPendingClasses();
}

  if (!role) {
    // Nếu không có role, quay về trang chọn vai trò
    window.location.href = "role.html";
  }

  // Hiển thị giao diện theo vai trò
  if (role === "teacher") {
    teacherPanel.style.display = "block";
  } else if (role === "student") {
    studentPanel.style.display = "block";
  } else if (role === "admin") {
    adminPanel.style.display = "block";
    loadPendingClasses(); // Load danh sách lớp chờ duyệt khi vào admin
}

  document
    .getElementById("connectWallet")
    ?.addEventListener("click", connectWallet);
  document
    .getElementById("createClass")
    ?.addEventListener("click", createClass);
  document.getElementById("addStudent")?.addEventListener("click", addStudent);
  document
    .getElementById("markAttendance")
    ?.addEventListener("click", markAttendance);
  document
    .getElementById("viewAttendance")
    ?.addEventListener("click", viewAttendance);

  // Lấy các phần tử DOM
  const studentListModal = document.getElementById("studentListModal");
  const closeModal = document.querySelector(".close");

  // Mở modal khi nhấn nút "Danh sách các học sinh"
  document.getElementById("listStudent").addEventListener("click", async () => {
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

  closeModal.addEventListener("click", () => {
    studentListModal.style.display = "none";
  });

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
  } else if (role === "student") {
      document.getElementById("studentPanel").style.display = "block";
  } else if (role === "admin") {
      document.getElementById("adminPanel").style.display = "block";
      loadPendingClasses(); // Gọi hàm lấy danh sách lớp chờ duyệt
  }
});

async function loadPendingClasses() {
  try {
      const events = await contract.getPastEvents("ClassPending", { fromBlock: 0, toBlock: "latest" });

      const pendingClassesList = document.getElementById("pendingClassesList");
      pendingClassesList.innerHTML = ""; // Xóa danh sách cũ

      if (events.length === 0) {
          pendingClassesList.innerHTML = "<li>🚫 Không có lớp nào đang chờ duyệt.</li>";
          return;
      }

      events.forEach(event => {
          const { classId, name, teacher } = event.returnValues;
          
          const listItem = document.createElement("li");
          listItem.innerHTML = `
              <strong>📚 Lớp: ${name}</strong> <br/>
              👨‍🏫 Giảng viên: ${teacher} <br/>
              <button onclick="approveClass(${classId})">✅ Duyệt</button>
              <button onclick="rejectClass(${classId})">❌ Từ chối</button>
              <hr/>
          `;
          pendingClassesList.appendChild(listItem);
      });

  } catch (error) {
      console.error("❌ Lỗi khi tải danh sách lớp chờ duyệt:", error);
  }
}


// Gọi hàm này khi trang admin tải xong
document.addEventListener("DOMContentLoaded", async function () {
  await loadPendingClasses();
});


async function approveClass(classId) {
  try {
      await contract.methods.approveClass(classId).send({ from: accounts[0] });
      alert("✅ Lớp đã được duyệt!");
      loadPendingClasses(); // Cập nhật danh sách lớp chờ duyệt
  } catch (error) {
      console.error("❌ Lỗi khi duyệt lớp:", error);
  }
}

async function rejectClass(classId) {
  try {
      await contract.methods.rejectClass(classId).send({ from: accounts[0] });
      alert("❌ Lớp đã bị từ chối!");
      loadPendingClasses(); // Cập nhật danh sách lớp chờ duyệt
  } catch (error) {
      console.error("❌ Lỗi khi từ chối lớp:", error);
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

          document.getElementById("walletAddress").innerText = `🟢 Đã kết nối: ${accounts[0]}`;
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


async function loadClasses() {
  const classList = document.getElementById("classList");
  classList.innerHTML = "";

  const totalClasses = await contract.methods.getTotalClasses().call();
  for (let i = 1; i <= totalClasses; i++) {
      const classData = await contract.methods.getClass(i).call();
      const option = new Option(classData[0], i);
      classList.appendChild(option);
  }
}

async function createClass() {
  const className = document.getElementById("className").value.trim();
  if (!className) return alert("⚠️ Vui lòng nhập tên lớp!");

  try {
      await contract.methods.createClass(className).send({ from: accounts[0] });
      alert("✅ Lớp học đã được tạo, chờ Admin duyệt!");
      window.location.href = "admin_login.html"; // Chuyển sang trang Admin
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
      // Gọi hàm từ Smart Contract để lấy danh sách lớp chờ duyệt
      const pendingClasses = await contract.methods.getPendingClasses().call();

      const pendingClassesList = document.getElementById("pendingClassesList");
      pendingClassesList.innerHTML = ""; // Xóa danh sách cũ

      if (pendingClasses.length === 0) {
          pendingClassesList.innerHTML = "<li>🚫 Không có lớp nào chờ duyệt.</li>";
          return;
      }

      pendingClasses.forEach((classItem, index) => {
          if (classItem.teacher !== "0x0000000000000000000000000000000000000000") { // Kiểm tra lớp hợp lệ
              const listItem = document.createElement("li");
              listItem.innerHTML = `📌 <strong>${classItem.name}</strong> - GV: ${classItem.teacher} 
                  <button onclick="approveClass(${index + 1})">✅ Duyệt</button>`;
              pendingClassesList.appendChild(listItem);
          }
      });

  } catch (error) {
      console.error("❌ Lỗi khi tải danh sách lớp chờ duyệt:", error);
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

          const adminAddress = "0x5F36E7A89be6B7DE697920892da6fB8E6c377FfA"; 

          const message = "Xác thực đăng nhập Admin vào hệ thống Blockchain Attendance";
          const signature = await web3.eth.personal.sign(message, userAddress, "");

          console.log("✅ Ký thành công:", signature);

          if (userAddress.toLowerCase() === adminAddress.toLowerCase()) {
              document.getElementById("adminPanel").style.display = "block"; // Hiển thị danh sách lớp
              await loadPendingClasses(); // Load danh sách lớp chờ duyệt
          } else {
              document.getElementById("errorMessage").style.display = "block";
          }
      } catch (error) {
          console.error("❌ Lỗi khi đăng nhập:", error);
          document.getElementById("errorMessage").innerText = "Lỗi khi kết nối MetaMask!";
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
      showSnackbar("❌ Vui lòng kết nối MetaMask trước khi xem lịch sử điểm danh.");
      return;
    }

    const totalClasses = Number(await contract.methods.getTotalClasses().call());
    console.log("📌 Tổng số lớp:", totalClasses);

    for (let i = 1; i <= totalClasses; i++) {
      const attendanceCount = await contract.methods.getAttendanceCount(i, studentAddress).call();
      
      // 🔥 Lấy thông tin lớp học từ hợp đồng
      const classData = await contract.methods.classes(i).call();
      const className = classData.name; // Tên lớp

      for (let j = 0; j < attendanceCount; j++) {
        const record = await contract.methods.getAttendanceRecord(i, studentAddress, j).call();
        
        const li = document.createElement("li");
        li.innerText = `📚 ${className}: ${record[0] ? "✅ Có mặt" : "❌ Vắng"} - ${new Date(Number(record[1]) * 1000).toLocaleString()}`;
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
