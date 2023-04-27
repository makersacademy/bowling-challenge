class Scorecard{
  constructor(){
    this.frames = []
  }

  addFrame(...args) {
    this.frames.push(args)
  }
  
  checkSpecials(frame) {
    if (frame[0] === 10) {return "strike"}
    else if (this.sum(frame) === 10) {return "spare"}
    else if (this.sum(frame) === 0) {return "gutter"}
    return "normal"
  }
  
  calculateScore() {
    // Player initializes with the score of 0 when they have not rolled
    let score = 0
    // Returns 0 if the player has not made any shots yet.
    if (this.frames.length === 0) {return score}
    // Adds the first shot player made, as strikes and spares have effect to the points of next shot, not current
    score += this.sum(this.frames[0])
    // Line below is added to allow player to check their score during the game
    let frame_count = Math.min(this.frames.length, 10)
    // This while loop starts with index 1, as we added the points for the first shot already.
    let i = 1
    while (i < frame_count){
      score += this.addFrameScore(i)
      i += 1
    }
    return score
  }

  addFrameScore(index) {
    // We assign variables to the current frame and the one before for easy readability
    const current_frame = this.frames[index]
    const previous_frame = this.frames[index-1]
    // The unmodified score of the current frame is calculated and assigned to a variable
    let frame_current_score = this.sum(current_frame)
    if (this.checkSpecials(previous_frame) === "strike") {
      // If the previous frame was a strike, we add the points of the current frame on top of itself
      frame_current_score += this.sum(current_frame)
    }
    else if (this.checkSpecials(previous_frame) === "spare") {
      // If the previous frame was a spare, we only add the first roll of the current frame
      frame_current_score += current_frame[0]
    }
    // Final score is returned
    return frame_current_score
  }

  addBonusScore() {
    // This line below is to ensure bonus scores are not added if the player has not rolled more than 10 shots
    if (this.frames.length > 10) {
      this.current_score += this.sum(this.frames[-1])}
    return
  }

  // Helper methods //
  // This method is for refactoring purposes. It flattens and array and sums contents
  sum(frame) {
    return frame.reduce((ps,a) => ps + a, 0)
  }
  
  // Gets the frames in tests for visibility 
  getFrames() {
    return this.frames
  }
}

module.exports = Scorecard