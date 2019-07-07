'use strict';

describe('Scorecard', function () {

  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
    // frame = new Frame();
  });

  describe('start a game ', function () {
    // it('game starts with zero points', function () {
    //   console.log(scorecard.score, 'zero score');
    //   expect(scorecard.result).toEqual(0);
    // });

    it('game starts on frame 1', function () {
      expect(scorecard.frameNumber).toEqual(1);
    })

    it('game starts on roll 0', function () {
      expect(scorecard.rollCount).toEqual(0);
    })

    it('stores the frames', function () {
      expect(scorecard.frames).toEqual([]);
    })
  })

});



//   describe('frames', function () {

//     it('can record the score', function () {
//       // scorecardspy = jasmine.createSpyObj('game', ['roll'])
//       scorecard.roll(1);
//       console.log(scorecard.rolls, 'rolls array' );
//       expect(scorecard.rolls).toEqual([1]);
//     })
//   })
