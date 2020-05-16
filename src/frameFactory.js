class FrameFactory {
  constructor(frameClass, rollClass) {
    this.frameClass = frameClass
    this.rollClass = rollClass
  }

  instance() {
    return new this.frameClass(new this.rollClass(-1), this.rollClass(-1))
  }
}