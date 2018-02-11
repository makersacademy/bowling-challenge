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
    } else {
      let current = this.first;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = template;
      this.size += 1;
    }
  }
}

module.exports = FrameHistory;
