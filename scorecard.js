class Scorecard{
  constructor(frames){
    this.frames = frames
  }

  checkSpecials(frame_index) {
    if (this.frames[frame_index][0] === 10) {return "strike"}
    else if (this.frames[frame_index].reduce((ps,a) => ps + a, 0) === 10) {return "spare"}
    return
  }
  
  getCurrentScore() {
    // let sum = flat(this.frames)
    const flattened_array = this.frames.flat()
    const sum = this.frames.flat().reduce((ps, a) => ps + a, 0);
    return sum
  }
}

module.exports = Scorecard