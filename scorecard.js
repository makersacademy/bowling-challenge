class Scorecard{
  constructor(){
    this.frames = []
  }

  addFrame(...args) {
    this.frames.push(args)
  }
  
  checkSpecials(frame_index) {
    if (this.frames[frame_index][0] === 10) {return "strike"}
    else if (this.flattenArrayAndSumContents(this.frames[frame_index]) === 10) {return "spare"}
    else if (this.flattenArrayAndSumContents(this.frames[frame_index]) === 0) {return "gutter"}
    return "normal"
  }
  
  calculateScore() {
    // return this.current_score
  }

  addFrameScore(index) {
    const current_frame = this.frames[index]
    const previous_frame = this.frames[index-1]
    let frame_current_score = this.flattenArrayAndSumContents(current_frame)
    if (this.checkSpecials(index-1) === "strike") {
      frame_current_score += this.flattenArrayAndSumContents(current_frame)
    }
    else if (this.checkSpecials(index) === "spare") {
      frame_current_score += previous_frame[0]
    }
    return frame_current_score
  }

  addBonusScore() {
    if (this.frames.length > 10) {
      this.current_score += this.flattenArrayAndSumContents(this.frames[-1])}
    return
  }

  // Helper methods //
  // This method is for refactoring purposes. It flattens and array and sums contents
  flattenArrayAndSumContents(frame) {
    return frame.reduce((ps,a) => ps + a, 0)
  }

  getFrames() {
    return this.frames
  }
}

module.exports = Scorecard