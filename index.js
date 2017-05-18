#!/usr/bin/env node

var spawn = require('child_process').spawn;
var child = spawn('yarn', [ 'create', 'yarn' ]);
var readline = require('readline');

readline.createInterface({
  input     : child.stdout,
  terminal  : false
}).on('line', function(line) {
  console.log(line);
});
