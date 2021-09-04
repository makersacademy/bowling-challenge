class ScoreCardDouble {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    this.frames[this.frames.length - 1].setNumber(this.frames.length);
  }

  getFrameNumber(num) {
    return this.frames[num - 1];
  }
}

class FrameDouble {
  constructor() {
    this.firstRoll;
    this.secondRoll;
    this.number;
  }

  setNumber(num) {
    this.number = num;
  }
}

beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});
