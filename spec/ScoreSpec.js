'use strict';

describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  it("should return the score after a full game - no strikes or spares", function() {
    multipleTurns(20, 4)
    expect(score.score()).toEqual(80);
  });

  it("should return the score - strike on first round with bonus points", function() {
    score._game.roll(10)
    multipleTurns(18, 4)
    expect(score.score()).toEqual(90);
  });

  it("should return the score - spare on first round with bonus points", function() {
    score._game.roll(4)
    score._game.roll(6)
    multipleTurns(18, 4)
    expect(score.score()).toEqual(86);
  });

  it("should return top score if person rolls all strikes", function(){
    multipleTurns(12, 10);
    expect(score.score()).toEqual(300);
  });

  it("should return 0 if a person has a gutter game", function() {
      multipleTurns(20, 0);
      expect(score.score()).toEqual(0);
  });
  

  function multipleTurns(turns, numberOfPins){
    for(var i = 0; i < turns; i++){
      score._game.roll(numberOfPins);
    }
  };
});