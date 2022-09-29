class Formatter {
  constructor(scoringTable) {
    this.scoringTable = scoringTable;
  }

  showAll() {
    let string = "";
    const frames = this.scoringTable.getTenFrames();
    frames.forEach((frame) => {
      string += this.showFrameAndTotal(frame);
      string += "\n";
    });
    return string;
  }

  showFrameAndTotal(frame) {
    let string = "";
    string += this.showFrame(frame);
    const frameNumber = frame.getNumber();
    string += this.showTotalScore(frameNumber);
    return string;
  }

  showFrame(frame) {
    return (
      "Frame: " +
      frame.getNumber() +
      "\nRoll 1: " +
      frame.getRollOne() +
      "\nRoll 2: " +
      frame.getRollTwo()
    );
  }

  showTotalScore(frameNumber) {
    const total = this.scoringTable.getTotalScoreAtFrame(frameNumber);
    debugger;
    return "\nTotal Score: " + total;
  }
}

module.exports = Formatter;
