const Frame = require("./Frame");

class frameFactory {
  static createFrame() {
    return new Frame();
 }
}

module.exports = frameFactory;