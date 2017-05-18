describe("#Games features", function(){"use strict";

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("#bowl functionality", function(){

    it("pinsKnockdown method generates number between 0 and 10 ", function(){
      spyOn(game, 'pinsKnockdown').and.returnValue(3);
      expect(game.pinsKnockdown()).toEqual(3);
    });

    it("checks if is a strike", function(){
      spyOn(game, 'pinsKnockdown').and.returnValue(10);
      game.bowl();
      expect(game._sKsP).toEqual("Strike!");
    });

    it("checks if is a spare", function(){
      spyOn(game, 'pinsKnockdown').and.returnValues(5, 5);
      game.bowl();
      game.bowl();
      expect(game._sKsP).toEqual("Spare!");
    });

    it("records correct total score", function(){
      game._totalScore = 0;
      spyOn(game, 'pinsKnockdown').and.returnValues(5, 2);
      game.bowl();
      game.bowl();
      expect(game._totalScore).toEqual(7);
    });

    it("adds correct amount to score when a strike is recoreded", function(){
      spyOn(game, 'pinsKnockdown').and.returnValues(10, 2, 7);
      game.bowl();
      game.bowl();
      game.bowl();
      expect(game._totalScore).toEqual(28);
  });

  it("adds correct amount to score when a spare is recoreded", function(){
    spyOn(game, 'pinsKnockdown').and.returnValues(5, 5, 5, 2);
    game.bowl();
    game.bowl();
    game.bowl();
    game.bowl();
    expect(game._totalScore).toEqual(22);
  });
  });


describe("#frame/roll functionality", function(){

  it("alternates roll count", function(){
    game.rollAlternate();
    expect(game._roll).toEqual(2);
    game.rollAlternate();
    expect(game._roll).toEqual(1);
  });

  it("increments frame ", function(){
    game._standingPins = 0
    game.frameIncrement();
    expect(game._frame).toEqual(2);
  });

  it("manages frame and roll logic", function(){
    game._standingPins = 0
    game.frameAndRoll();
    expect(game._frame).toEqual(2);
    expect(game._roll).toEqual(1);
  });
});

  it("frame specific variables are reset at a new frame", function(){
    spyOn(game, 'pinsKnockdown').and.returnValues(3, 4);
    game.bowl();
    game.bowl();
    expect(game._rollScore1).toEqual(0);
    expect(game._rollScore2).toEqual(0);
    expect(game._currentKnockdown).toEqual(0);
    expect(game._standingPins).toEqual(10);
  });

  it("manages end game - frame not increased after 10", function(){
      game._frame = 10
      spyOn(game, 'pinsKnockdown').and.returnValues(5, 2);
      game.bowl();
      game.bowl();
      expect(game._frame).toEqual(10);
    });

  it("manages end game - extra roll for strike/spare", function(){
      game._frame = 10
      spyOn(game, 'pinsKnockdown').and.returnValues(5, 5);
      game.bowl();
      game.bowl();
      expect(game._frame).toEqual(11);
    });

  it("resets frame and roll on new game", function(){
      game._frame = 10
      game._roll = 2
      game.newGame();
      expect(game._frame).toEqual(1);
      expect(game._frame).toEqual(1);
  });
});
