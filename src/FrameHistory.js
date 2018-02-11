class FrameHistory {
  constructor() {
    this.size = 0;
    this.first = null;
  }

  add(frameObject) {
    const template = {
      frameObject,
      next: null,
    };

    if (this.size === 0) {
      this.size = 1;
      this.first = template;
    }
  }
}

module.exports = FrameHistory;
