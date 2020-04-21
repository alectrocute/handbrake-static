# 🍹handbrake-static

handbrake-static provides cross-platform [HandBrake CLI](https://handbrake.fr/) binaries in your Electron application.

## Installation

```sh
 npm i handbrake-static --save
```

## Usage

```js
const handbrakePath = require("handbrake-static").path;
console.log(handbrakePath);
```

A more general example (which isn't the scope of this package) -

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