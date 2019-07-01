'use strict';

describe('Bowling', function () {

  var game;

  beforeEach(function () {
    game = new Game;
  });




  describe('Game', function () {
    it('game starts with zero points', function () {
      expect(game.score).toEqual(0);
    });

    it('game starts on frame 1', function () {
      expect(game.frameNumber).toEqual(1);
    })

    it('game starts on roll 0', function () {
      expect(game.rollCount).toEqual(0);
    })
  });


  describe('Scorecard', function() {

    var scorecard;
    
    beforeEach(function () {
      scorecard = new ScoreCard
    })

    it('stores the frames', function () {
      expect(scorecard.frames).toEqual([]);
    })
  });


  describe('Frame', function () {

    // it('can record the score', function() {
    //   var frame;
    //   frame = new Frame;

    //   game.roll(1);
    //   expect(frame.score).toEqual(1);
    // })


  })



});
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

// });
