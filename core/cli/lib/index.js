module.exports = core;
const pkg = require("../package.json");

function core(args) {
  console.log("这是真正的 cli", args);
  checkPkgVersion();
}

function checkPkgVersion() {
  console.log(pkg.version);
}
