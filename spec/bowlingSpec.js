'use strict';

describe('Bowling', function() {
  var bowling;
  var gutterGame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var noTensGame = [7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2];
  var perfectGame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  var awkwardGame = [10, 10, 10, 9, 1, 10, 10, 10, 9, 1, 10, 10, 10, 10];
  var awkwardGameTwo = [10, 5, 5, 4, 3, 7, 3, 10, 8, 1, 7, 2, 4, 3, 10, 7, 3, 7];
  var awkwardGameThree = [10, 10, 7, 3, 10, 10, 8, 2, 10, 10, 9, 1, 5, 0];

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('can score a gutter game', function() {
    expect(bowling.score(gutterGame)).toEqual(0);
  });

  it('can score a game with no strikes or spares', function() {
    expect(bowling.score(noTensGame)).toEqual(90);
  });

  it('can score a perfect game', function() {
    expect(bowling.score(perfectGame)).toEqual(300);
  });

  it('can score awkward games', function() {
    expect(bowling.score(awkwardGame)).toEqual(258);
  });

  it('can score other awkward games', function() {
    expect(bowling.score(awkwardGameTwo)).toEqual(142);
  });

  it('can score other awkward games', function() {
    expect(bowling.score(awkwardGameThree)).toEqual(204);
  });

});
