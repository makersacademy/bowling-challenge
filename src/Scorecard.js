var Scorecard = function () {
    this.frames = {}
      for (var i = 1; i < 10; i++) {
        this.frames[i] = new Frame()
      }
    this.frames[10] = new FinalFrame()
}
