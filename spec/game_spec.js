'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('starts with zero points', function() {
    expect(game.calculateScore()).toEqual(0);
  });

  it('can add points', function() {
    game.bowl(8);
    game.bowl(1);
    expect(game.calculateScore()).toEqual(9);
  });

  it('knows what turn it is/what frame it is on', function() {
    game.bowl(8);
    game.bowl(1);
    game.bowl(4);
    expect(game.calculateFrameNumber()).toEqual(2);
  });

  it('knows what frame it is on, even with several strikes', function() {
    game.bowl(10);
    game.bowl(10);
    game.bowl(3);
    game.bowl(5);
    game.bowl(10);
    game.bowl(3);
    expect(game.calculateFrameNumber()).toEqual(5);
  });

  describe('for strikes', function() {
    it('calculates correct score with strikes', function() {
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.calculateScore()).toEqual(26);
    });

     it("doesn't calculate strike total until enough turns have been taken", function() {
      game.bowl(4);
      game.bowl(4);
      game.bowl(10);
      expect(game.calculateScore()).toEqual(8);
     });

    it('calculates correct score with two strikes in a row', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.calculateScore()).toEqual(50);
    });

    it("doesn't calculate strike total until enough turns have been taken - double strike", function() {
     game.bowl(4);
     game.bowl(4);
     game.bowl(10);
     game.bowl(10);
     expect(game.calculateScore()).toEqual(8);
    });

    it('calculates correct score with three strikes in a row', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.calculateScore()).toEqual(80);
    });

    describe('random feature tests with different strike combos (for my sanity)', function() {
      it('calculates correct score with random strikes in a row', function() {
        game.bowl(4);
        game.bowl(4);
        game.bowl(10);
        game.bowl(10);
        game.bowl(10);
        game.bowl(4);
        game.bowl(4);
        game.bowl(3);
        game.bowl(2);
        expect(game.calculateScore()).toEqual(93);
      });

      it('calculates correct score with random strikes in a row', function() {
        game.bowl(4);
        game.bowl(4);
        game.bowl(10);
        game.bowl(10);
        game.bowl(10);
        expect(game.calculateScore()).toEqual(38);
      });

      it('calculates correct score with random strikes in a row', function() {
        game.bowl(4);
        game.bowl(4);
        game.bowl(10);
        game.bowl(10);
        game.bowl(10);
        game.bowl(4);
        game.bowl(4);
        expect(game.calculateScore()).toEqual(88);
      });
    });
  });

  describe('for spares', function() {
    it('calculates correct score with spares', function() {
      game.bowl(3);
      game.bowl(7);
      game.bowl(4);
      expect(game.calculateScore()).toEqual(14);
    });



  });










});
