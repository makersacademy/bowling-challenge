class Game {
  constructor(frameClass) {
    this.frames = [];
    for(let i = 0; i < 9; i++) {
      // Create 9 frames that are not the final frame
      let frame = new frameClass(false);
      this.frames.push(frame);
    }
    // create and push the final frame to the frames array
    let final_frame = new frameClass(true);
    this.frames.push(final_frame);

  }
}

module.exports = Game;