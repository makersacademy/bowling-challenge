'use strict';

describe('Scorecard', function () {

  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
    // frame = new Frame();
  });

  describe('start a game ', function () {
    it('game starts with zero points', function () {
      console.log(scorecard.score, 'zero score');
      expect(scorecard.score).toEqual(0);
    });

    it('game starts on frame 1', function () {
      console.log(scorecard.frameNumber, 'first frame');
      expect(scorecard.frameNumber).toEqual(1);
    })

    it('game starts on roll 0', function () {
      console.log(scorecard.rollCount), 'rollCount';
      expect(scorecard.rollCount).toEqual(0);
    })

    it('stores the frames', function () {
      console.log(scorecard.frames, 'empty frames array');
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




// });    


  // it('can roll gutter game', function () {
  //   rollMany(0, 20);
  //   expect(game.score()).toEqual(0);
  // });

  // it('can roll all ones', function () {
  //   rollMany(1, 20);
  //   expect(game.score()).toEqual(20);
  // });

  // it('can roll a spare', function () {
  //   game.roll(5);
  //   game.roll(5);
  //   game.roll(5);
  //   rollMany(0, 17);
  //   expect(game.score()).toEqual(20);
  // });

  // it('can roll a strike', function () {
  //   game.roll(10);
  //   game.roll(5);
  //   game.roll(2);
  //   rollMany(0, 16);
  //   expect(game.score()).toEqual(24);
  // });

  // it('can roll perfect game', function () {
  //   rollMany(10, 12);
  //   expect(game.score()).toEqual(300);
  // });

  // var rollMany = function (pins, rolls) {
  //   for (var i = 0; i < rolls; i++) {
  //     game.roll(pins);
  //   }
  // };

