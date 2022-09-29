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
    const index = frame.getNumber();
    string += this.showTotalScore(index);
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

  showTotalScore(index) {
    const total = this.scoringTable.getTotalScoreAtFrame(index);
    return "\nTotal Score: " + total;
  }
}

module.exports = Formatter;
