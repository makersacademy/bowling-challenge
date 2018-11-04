describe('Score', function() {
  var score;
  // var game = jasmine.createSpyObj('game', ['scores']);
  // game.scores.and.callFake(function() {
  //   return [10,10,10,10,10,10,10,10,10,10,10,10];
  // });
  //
  // foo = {
  //     setBar: function(value) {
  //       bar = value;
  //     }
  //   };

  // var game = {
  //   scores: function() {
  //     return [10,10,10,10,10,10,10,10,10,10,10,10];
  //   }
  // }

  beforeEach(function() {
    var game = jasmine.createSpy('game', {
      'scores': [10,10,10,10,10,10,10,10,10,10,10,10],
    });

    score = new Score(game.scores);
    regular_frame = new Frame([3,4]);
    spare_frame = new Frame([5,5]);
    strike_frame = new Frame([10,0]);
  });

  // var game = require('game')



  describe('initialize', function() {
    it('gets an array of frames from game', function() {
      expect(score.scores_array).toEqual([10,10,10,10,10,10,10,10,10,10,10,10]);
    });
  });

  describe('calculateFrameScore', function() {
    it('returns the score for an open frame', function() {
      score.calculateFrameScore([regular_frame])
      expect(regular_frame.score).toEqual(7);
    });

    it('returns the score for a spare frame', function() {
      score.calculateFrameScore([spare_frame, regular_frame])
      expect(spare_frame.score).toEqual(13);
    });

    // it('returns the score for a strike frame', function() {
    //   score.calculateFrameScore([strike_frame, regular_frame])
    //   expect(strike_frame.score).toEqual(24);
    // });
  });
});
