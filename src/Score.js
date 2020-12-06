'use strict';

class Score {
  constructor() {
    this.userPoints = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  };

  userPins(frame, roll, pins) {
    this.userPoints[frame -1] += pins;
  };

  total() {
    return this.userPoints.reduce((a, b) => a + b, 0);
  };

  totalFrame(frame) {
    return this.userPoints[frame -1];
  };
};
