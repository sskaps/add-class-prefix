const path = reuqire('path');
const pkgDir = require('pkg-dir').sync;

function getPkgInfo (targetPath = '') {
  const dir = pkgDir(targetPath || process.cwd());
  const pgkInfo = require(path.resolve(dir, 'package.json'));
  if (Object.prototype.toString.call(pgkInfo) === '[object Object]') {
    return pgkInfo
  }
  return {};
}

module.exports = {
  getPkgInfo
};
