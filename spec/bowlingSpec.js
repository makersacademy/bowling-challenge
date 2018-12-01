'use strict';

describe('Bowling', function() {


  var game;

  beforeEach(function() {
    game = new Bowling();
  });

  it('can contain score of each roll', function() {
    game.score(2, 7);
    expect(firstroll).toEqual(2);
    game.scoreReset()
  });

  it('can contain score of each roll', function() {
    game.score(3, 5);
    expect(secondroll).toEqual(5);
    game.scoreReset()
  });

  it('returning default value of score', function() {
    game.score(3, 5);
    game.scoreReset();
    expect(secondroll).toEqual(0);
    expect(firstroll).toEqual(0);
  });

  it('returning points scored per frame', function() {
    game.score(3, 5);
    expect(scorePerFrame).toEqual(8);
  });

  it('returning pins number', function() {
    expect(game.returnPinNumber(2)).toEqual(2);
  });

  it('contain pins scores', function() {
    let size = pins.length;
    expect(size).toEqual(11);
  });


});
