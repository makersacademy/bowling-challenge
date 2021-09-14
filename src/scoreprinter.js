"use strict";

class ScorePrinter {
  stringify(frames, scores) {
    const scorecard = ["Frame | R1 | R2 | R3 | Score"];
    for (let index = 0; index < frames.length; index++) {
      scorecard.push(this.frameString(index, frames[index], scores[index]));
    }
    let totalScore = scores[scores.length - 1];
    scorecard.push(
      `TOTAL SCORE: ${totalScore > 0 ? totalScore : 0}`.padStart(26)
    );
    return scorecard.join("\r\n");
  }

  frameString(index, frame, score) {
    let frameNo = `${index + 1} |`.padStart(7).padEnd(7);
    let roll1 = frame.rollOne() === null ? "|" : `${frame.rollOne()} |`;
    let roll2 = frame.rollTwo() === null ? "|" : `${frame.rollTwo()} |`;
    let roll3 = frame.isFinalFrame()
      ? frame.rollThree() === null
        ? "|"
        : `${frame.rollThree()} |`
      : "|";
    return (
      frameNo +
      roll1.padStart(5).padEnd(5) +
      roll2.padStart(5).padEnd(5) +
      roll3.padStart(5).padEnd(5) +
      (score >= 0 ? ` ${score}` : "")
    );
  }
}
