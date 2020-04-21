const os = require("os");
const path = require("path");
let platform = os.platform();

if (platform == "darwin") {
  platform = "mac";
} else if (platform == "win32") {
  platform = "win";
}

const file = platform == "mac" ? "HandBrakeCLI" : "HandBrakeCLI.exe";

// linux coming soon
if (platform !== "mac" && platform !== "win") {
  console.error(
    "ERROR - handbrake-static only supports mac & windows for now."
  );
  process.exit(1);
}

var productionPath = path
  .join(__dirname, `handbrake-static/bin/${platform}/x64/${file}`)
  .replace("app.asar", "app.asar.unpacked");

var developmentPath = path.join(
  __dirname,
  `node_modules/handbrake-static/bin/${platform}/x64/${file}`
);

exports.path = productionPath;
exports.devPath = developmentPath;
