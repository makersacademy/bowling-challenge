class Scorecard{
  constructor(frames){
    this.frames = frames
    this.current_score = 0
  }

  checkSpecials(frame_index) {
    if (this.frames[frame_index][0] === 10) {return "strike"}
    else if (this.flattenArrayAndSumContents(this.frames[frame_index]) === 10) {return "spare"}
    else if (this.flattenArrayAndSumContents(this.frames[frame_index]) === 0) {return "gutter"}
    return "normal"
  }
  
  getCurrentScore() {
    // let sum = flat(this.frames)
    const flattened_array = this.frames.flat()
    const sum = this.frames.flat().reduce((ps, a) => ps + a, 0);
    return sum
  }

  addBonusScore() {
    if (this.frames.length > 10) {
      this.current_score += this.flattenArrayAndSumContents(this.frames[-1])}
    return
  }

  // This method is for refactoring purposes. It flattens and array and sums contents
  flattenArrayAndSumContents(frame) {
    return frame.reduce((ps,a) => ps + a, 0)
  }
}

module.exports = Scorecard