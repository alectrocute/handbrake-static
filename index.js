const os = require("os");
const path = require("path");
const arch = os.arch();
let platform = os.platform();

if (platform == "darwin") {
  platform = "mac";
} else if (platform == "win32") {
  platform = "win";
}

const file = platform == "mac" ? "HandBrakeCLI" : "HandBrakeCLI.exe";

// linux coming soon
if (platform !== "mac" && platform !== "win") {
  process.exit(1);
}

var productionPath = path
  .join(__dirname, `node_modules/handbrake-static/bin/${platform}/x64/${file}`)
  .replace("app.asar", "app.asar.unpacked");
exports.path = productionPath;
