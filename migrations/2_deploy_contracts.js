const AttendanceSystem = artifacts.require("AttendanceSystem");

module.exports = function (deployer) {
  deployer.deploy(AttendanceSystem);
};
