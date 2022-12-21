const sprintf = require('sprintf-js').sprintf;

class GameFormatter {
  constructor(game) {
    this.game = game;
  }

  getScorecard() {
    const scorecardArray = []
    this.#addHeader(scorecardArray);
        
    const frames = this.game.frames;
    frames.forEach((frame, index) => {
      this.#addFrameString(scorecardArray, frame, index);
    });
    
    this.#addFooter(scorecardArray);
    return scorecardArray.join('\n');
  }

  #addHeader(scorecardArray) {
    scorecardArray.push('| FRAME | ROLLS | SCORE |');
    scorecardArray.push('| ----- | ----- | ----- |');
  }

  #addFrameString(scorecardArray, frame, index) {
    const indexString = sprintf(' %1$2d. ', index + 1);
    const rollString = frame.format();
    let scoreString = '     ';
    if (frame.status === 'completed') {
      scoreString = sprintf(' %1$3d ', this.#getScoreUntil(index));
    }
    scorecardArray.push(`| ${indexString} | ${rollString} | ${scoreString} |`);
  }

  #addFooter(scorecardArray) {
    const totalScore = sprintf(' %1$3s ', this.#getScoreUntil(10));
    scorecardArray.push(`|       | TOTAL | ${totalScore} |`);
  }

  #getScoreUntil(index) {
    const frames = this.game.frames;
    return frames.slice(0, index + 1)
      .reduce((sum, frame) => 
        frame.status === 'completed' ? sum + frame.score : sum
      , 0);
  }
}

module.exports = GameFormatter;
