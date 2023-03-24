const jsdom = require('jsdom');
const { JSDOM } = jsdom;

class addClassPrefix {

  constructor(options = {}) {
    this.prefix = options.prefix || '';
    this.version = addClassPrefix.version;
  }

  apply (compiler) {
    const self = this;
    compiler.hooks.emit.tapAsync('addClassPrefix', function (compilation, cb) {
      if (self.prefix) {
        const { assets } = compilation;
        var keys = Object.keys(assets);
        keys.forEach(async (item) => {
          if (/\.html$/.test(item)) {
            const content = assets[item].source();
            const dom = new JSDOM(content);
            const { document } = dom.window;
            document.body.classList.add(self.prefix);
            assets[item].source = function () {
              return dom.serialize();
            };
          }
        });
      }
      cb();
    });
  }

}

addClassPrefix.version = '1.0.0';

module.exports = addClassPrefix;