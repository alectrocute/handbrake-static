# 🍹handbrake-static

handbrake-static provides cross-platform [HandBrake CLI](https://handbrake.fr/) binaries in your Electron application.

## Installation

```sh
 npm i handbrake-static --save
```

## Usage

```js
// points to app.asar.unpacked
const handbrakePath = require("handbrake-static").path;

// points to node_modules
const handbrakeDevPath = require("handbrake-static").devPath;

console.log(handbrakePath, handbrakeDevPath);
```

Don't forget to expose the binaries in your production build! Use electron-builder's [extraFiles configuration attribute](https://www.electron.build/configuration/contents).

```json
"extraFiles": {
  "from": "node_modules/handbrake-static/bin/mac/x64/HandBrakeCLI",
  "to":
  "./resources/app.asar.unpacked/handbrake-static/bin/mac/x64/HandBrakeCLI",
}
```

A more general example of using the HandBrake CLI binary in your project (which isn't the scope of this package 🤷‍♂️) -

```js
const handbrakePath = require("handbrake-static").path;
const util = require("util");
const cp = require("child_process");

function execHandbrake(inputPath, outputPath, done) {
  const cmd = util.format(
    '"%s" %s',
    handbrakePath,
    `-i ${inputPath}`,
    `-o ${outputPath}`,
    "-e x264",
    "--encoder-preset veryfast",
    "-q 17"
  );
  cp.exec(cmd, done);
}
```
