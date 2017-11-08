'use strict';

describe ('Feature tests: Player', function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  describe('#roll', function() {
    it('can roll a ball and return a score', function() {
      expect(player.roll(4)).toEqual(4);
    });
  });

  describe("#Score", function() {
    it('can return the score for a game with no strikes or spares', function() {
      player.roll(6);
      player.roll(3);
      player.roll(2);
      expect(player.score()).toEqual(11);
    })
  })

  describe("#frames", function() {
    it("can return the points in each frame for a game with no spares or strikes", function() {
      player.roll(4);
      player.roll(4);
      player.roll(3);
      player.roll(4);
      expect(player.frames()).toEqual([[4,4],[3,4]])
    })
  })

  describe("#frameScores", function() {
    it("can sum the points in each frame for a game with no spares or strikes", function() {
      player.roll(3);
      player.roll(2);
      player.roll(1);
      player.roll(0);
      player.frames();
      expect(player.frameScores()).toEqual([5, 1])
    })
  })

  describe("#spareScore", function() {
    it('can return the scores for a game with spares', function() {
      player.roll(5);
      player.roll(5);
      player.roll(5);
      expect(player.spareScore()).toEqual(20);
    })
  })

  describe('#strikeScore', function() {
    it('can return the correct score for a game with strikes', function() {
      player.roll(10);
      player.roll(0);
      player.roll(5);
      player.roll(4);
      player.roll(5);
      player.roll(4);
      expect(player.strikeScore()).toEqual(37);
    })
  })

  // describe('#realScore', function() {
  //   it('can return the score for a game with strikes and spares', function() {
  //     player.roll(10);
  //     player.roll(0);
  //     player.roll(5);
  //     player.roll(5);
  //     player.roll(10);
  //     player.roll(0);
  //     player.roll(4);
  //     player.roll(6);
  //     player.roll(4);
  //     player.roll(3);
  //     expect(player.realScore()).toEqual(81)
  //   });
  // });

  [20],[20],[20],[14],[7]


});
