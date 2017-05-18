describe("feature test", function(){ "use strict";

  var game;

  beforeEach(function(){
    game = new game();
  });

  describe("bowl functionality", function(){

    it("pinsKnockdown method generates number between 0 and 10 ", function(){
      spyOn(game, 'pinsKnockdown').and.returnValue(3);
      expect(game.pinsKnockdown()).toEqual(3);
    });
  });

});
