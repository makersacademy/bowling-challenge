'use strict';

describe('Bowling', function() {


  var game;

  beforeEach(function() {
    game = new Bowling();
  });


  it('returning points scored per frame', function() {
    game.returnPinNumber(8);
    game.returnPinNumber(1);
    expect(rools.length).toEqual(2);
  });

  it('storing each roll of all game', function() {
    for (var i = 0; i < 20; i++) {
      game.returnPinNumber(2);
    }
    expect(rools.length).toEqual(20);
  });

  it('returning pins number', function() {
    expect(game.returnPinNumber(2)).toEqual(2);
  });

  it('calculate pins scores', function() {
    for (var i = 0; i < 20; i++) {
      game.returnPinNumber(2);
    };
    game.score();
    expect(score).toEqual(40);
  });

  it('calculate pins scores', function() {
    for (var i = 0; i < 20; i++) {
      game.returnPinNumber(5);
    };
    game.score();
    expect(score).toEqual(150);
  });


});
