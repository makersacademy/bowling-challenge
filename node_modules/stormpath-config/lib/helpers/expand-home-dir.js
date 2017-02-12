'use strict';

var join = require('path').join;

function expandHomeDir(path) {
  var isWindows = process.platform == 'win32';
  var homeDir = process.env[isWindows ? 'USERPROFILE' : 'HOME'];

  if (path === '~') {
    if (!homeDir) {
      return false;
    }
    return homeDir;
  }

  if (!path || path[0] !== '~') {
    return path;
  }

  if (!homeDir) {
    return false;
  }


  return join(homeDir, path.slice(2));
}

module.exports = expandHomeDir;
