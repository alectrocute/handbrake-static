var os = require("os");
var path = require("path");
var platform = os.platform();
var arch = os.arch();

if (platform == "darwin") {
  platform = "mac";
} else if (platform == "win32") {
  platform = "win";
}

let file = platform == "mac" ? "HandBrakeCLI" : "HandBrakeCLI.exe";

// linux coming soon
if (platform !== "mac" && platform !== "win") {
  process.exit(1);
}

var productionPath = path
  .join(__dirname, `node_modules/handbrake-static/bin/${platform}/x64/${file}`)
  .replace("app.asar", "app.asar.unpacked");
exports.path = productionPath;
