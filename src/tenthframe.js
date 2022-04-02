import Frame from './frame';

export default class TenthFrame extends Frame {
  constructor(firstRoll, secondRoll, thirdRoll = 0) {
    super(firstRoll, secondRoll);
    this.thirdRoll = thirdRoll;
    this.finalFrameScore = firstRoll + secondRoll + thirdRoll;
  }
}
