var it = require('tape'),
    fs = require('fs'),
    HandbrakeCLI = require('..');

it('should find HandbrakeCLI', function(t) {
  var stats = fs.statSync(HandbrakeCLI.path);
  t.ok(stats.isFile(HandbrakeCLI.path));
  t.end();
});
