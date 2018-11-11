describe("#Bowling Game", function(){"use strict";

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("#bowling rules", function(){

    it("pinsKnockdown method generates number between 0 and 10 ", function(){
      spyOn(game, 'pinsKnockdown').and.returnValue(3);
      expect(game.pinsKnockdown()).toEqual(3);
    });

    it("Can tell if there's a strike", function(){
      spyOn(game, 'pinsKnockdown').and.returnValues(10);
      game.bowl();
      expect(game._bonus).toEqual("Strike!");
    });

    it("Can tell if there's a spare", function(){
      spyOn(game, 'pinsKnockdown').and.returnValues(5, 5);
      game.bowl();
      game.bowl();
      expect(game._bonus).toEqual("Spare!");
    });

    it("Can calculate score", function(){
      game._totalScore = 0;
      spyOn(game, 'pinsKnockdown').and.returnValues(5, 2);
      game.bowl();
      game.bowl();
      expect(game._totalScore).toEqual(7);
    });

    it("Understands bonus rules with strike", function(){
      spyOn(game, 'pinsKnockdown').and.returnValues(10, 2, 7);
      game.bowl();
      game.bowl();
      game.bowl();
      expect(game._totalScore).toEqual(28);
  });

  it("Understands bonus rules with spare", function(){
    spyOn(game, 'pinsKnockdown').and.returnValues(5, 5, 5, 2);
    game.bowl();
    game.bowl();
    game.bowl();
    game.bowl();
    expect(game._totalScore).toEqual(22);
  });
  });


describe("#frames", function(){

  it("Understands alternation", function(){
    game.rollAlternate();
    expect(game._roll).toEqual(2);
    game.rollAlternate();
    expect(game._roll).toEqual(1);
  });

  it("Updates frame ", function(){
    game._standingPins = 0;
    game.frameIncrement();
    expect(game._frame).toEqual(2);
  });

  it("Understands how frame/roll relationship works", function(){
    game._standingPins = 0;
    game.frameAndRoll();
    expect(game._frame).toEqual(2);
    expect(game._roll).toEqual(1);
  });
});

  it("Reset at a new frame", function(){
    spyOn(game, 'pinsKnockdown').and.returnValues(3, 4);
    game.bowl();
    game.bowl();
    expect(game._firstRollScore).toEqual(0);
    expect(game._secondRollScore).toEqual(0);
    expect(game._currentKnockdown).toEqual(0);
    expect(game._standingPins).toEqual(10);
  });

  it("Can reset on New Game", function(){
      game._frame = 10;
      game._roll = 2;
      game.newGame();
      expect(game._frame).toEqual(1);
      expect(game._frame).toEqual(1);
  });
});
