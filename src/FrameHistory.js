class FrameHistory {
  constructor() {
    this.size = 0;
    this.first = null;
  }

  add(frameObject) {
    if (this.size === 0) {
      this.first = frameObject;
    }
  }
}

module.exports = FrameHistory;
