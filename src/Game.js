'use strict';

class Game {

  constructor(){
    this.frameScores = [];
    this.frames = [];
    this.MAX_FRAME = 10;
  }

  updateFramesArray(frame, pins){
    if (this.frames[frame] === undefined) {
      this.frames[frame] = [pins]
    } else {
      this.frames[frame].push(pins)
    }
  };


  strike(frame) {
    if (this.frames[frame][0] === 10) {
      return true;
    };
  }

  spare(frame) {
    if (!this.strike(frame) && (this.frames[frame].reduce((a,b) => a + b, 0) === 10)) {
      return true;
    }
  };

  bonusRoll(frame, bonus) {
    if (this.strike(frame) || this.spare(frame)) {
      // var bonus = prompt("Bonus roll. Enter the number of pins")
      this.updateFramesArray(this.frames[this.frames.length - 1], bonus)
    }
  };

  calculateFrameScore(frame) {
    var frameScore = this.frames[frame].reduce((a,b) => a + b, 0)

    if (frame > 0) {
      frameScore += this.frameScores[frame-1]
    }
    this.frameScores.push(frameScore)
    
  }

  previousStrike(frame) {
    if (this.strike(frame-1)) {
      this.frameScores[frame-1] += this.frames[frame][0]
      if (this.frames[frame].length > 1) {
        this.frameScores[frame-1] += this.frames[frame][1]
      }
    }
  }

  previousSpare(frame) {
    if (this.spare(frame-1)) {
      this.frameScores[frame-1] += this.frames[frame][0]
    }
  }

  doubleStrike(frame) {
    if (frame > 1) {
      if (this.strike(frame-2) && this.strike(frame-1)) {
        this.frameScores[frame-2] += this.frames[frame][0];
        this.frameScores[frame-1] += 10;
      }
    }
  }

  updatePreviousFrame(frame) {
    this.previousStrike(frame)
    this.previousSpare(frame)
    this.doubleStrike(frame)
  }

  
  validRoll(pins) {
    return (roll < 0 ||  roll > 10 || !Number.isInteger(roll))
  }

  roll(frame) {
    var roll = parseInt(prompt("Enter the number of pins down"))
    if (this.validRoll(roll)) {
      throw new Error("Invalid input")
    } else {
      this.updateFramesArray(frame, roll);
    }
  }

  strikeBonus(index) {
    return this.frames[index + 1] + this.frames[index + 2];
  }

  updateScores(frame) {
    if (frame > 0) {
      this.updatePreviousFrame(frame);
    }
    this.calculateFrameScore(frame);
  }

  finalRound(frame){
    return frame === this.MAX_FRAME - 1;
  }

  totalScore() {
    return this.frameScores[this.MAX_FRAME - 1];
  }

  play() {
    var frame = 0;
    do {
      this.roll(frame);

      if (this.strike(frame) && !this.finalRound(frame)) {
        this.updateScores(frame)
        frame++;
        continue;
      }

      this.roll(frame);

      if (this.finalRound(frame)){
        this.bonusRoll(frame);
      }

      this.updateScores(frame);

      frame++;
      
    } while (frame < this.MAX_FRAME)
  }
    
}
