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
