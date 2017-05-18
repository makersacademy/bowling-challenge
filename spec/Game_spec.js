describe("feature test", function(){ "use strict";

  var game;

  beforeEach(function(){
    game = new game();
  });

  describe("#bowl functionality", function(){

    it("pinsKnockdown method generates number between 0 and 10 ", function(){
      spyOn(game, 'pinsKnockdown').and.returnValue(3);
      expect(game.pinsKnockdown()).toEqual(3);
    });

    it("checks if is a strike", function(){
      spyOn(bowling, 'pinsKnockdown').and.returnValue(10);
      bowling.bowl();
      expect(bowling._sKsP).toEqual("Strike!");
    });

    it("checks if is a spare", function(){
      spyOn(bowling, 'pinsKnockdown').and.returnValues(5, 5);
      bowling.bowl();
      bowling.bowl();
      expect(bowling._sKsP).toEqual("Spare!");
    });

    it("records correct total score", function(){
      bowling._totalScore = 0;
      spyOn(bowling, 'pinsKnockdown').and.returnValues(5, 2);
      bowling.bowl();
      bowling.bowl();
      expect(bowling._totalScore).toEqual(7);
    });

    it("adds correct amount to score when a strike is recoreded", function(){
      spyOn(bowling, 'pinsKnockdown').and.returnValues(10, 2, 7);
      bowling.bowl();
      bowling.bowl();
      bowling.bowl();
      expect(bowling._totalScore).toEqual(28);
  });

  it("adds correct amount to score when a spare is recoreded", function(){
    spyOn(bowling, 'pinsKnockdown').and.returnValues(5, 5, 5, 2);
    bowling.bowl();
    bowling.bowl();
    bowling.bowl();
    bowling.bowl();
    expect(bowling._totalScore).toEqual(22);
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



});
