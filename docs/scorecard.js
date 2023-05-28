class Scorecard {

  constructor() {
    this.frames = []

  }

  calculateScore() {
    let sum = 0;
   
    for (let i = 0; i < this.frames.length; i++) {
      let currentFrame = this.frames[i]
      let nextFrame = this.frames[i + 1]
      let nextNextFrame = this.frames[i + 2]

      sum += this.frameScore(currentFrame)

      // Bonuses:
        // when strike or spare on final frame
          if (currentFrame === this.frames[10]) {
            sum -= this.frameScore(currentFrame);
          }
        // when strike   
          else if (currentFrame.length < 2 && nextFrame.length === 2) {
            sum += this.addStrikeBonus(nextFrame);
                
          }
        // when strikes in a row
          else if (currentFrame.length < 2 && nextFrame.length < 2) {
            sum += this.addStrikesInARowBonus(nextFrame, nextNextFrame);
                
          }
        // when spare
          else if (this.frameScore(currentFrame) === 10 && currentFrame.length === 2 ) {
            sum += nextFrame[0];
          }
    }
    return sum;


  }

    addFrame(roll1, roll2) {
      if (roll1 < 10) {
          this.frames.push([roll1, roll2]);

    // adds bonus rolls as frame if frame 10 is a strike or spare
      } else if (roll1 === 10 && this.frames.length === 10) {        
            this.frames.push([roll1, roll2]); 
      } else if (roll1 === 10 ) {
          this.frames.push([roll1]);
      }
    }

    frameScore(frame) {
      let sum = 0;

      for (let j = 0 ; j < frame.length; j++) {
        sum += frame[j]; 
      }
      return sum;
    }

    addStrikeBonus(nextFrame) {
      let sum = 0;

      sum += nextFrame[0];
      sum += nextFrame[1];

      return sum;
    }

    addStrikesInARowBonus(nextFrame, nextNextFrame) {
      let sum = 0;

      sum += nextFrame[0];
      sum += nextNextFrame[0];

      return sum;
    }

}


module.exports = Scorecard;