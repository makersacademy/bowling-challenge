describe('Bowling game', function (){

  beforeEach(function(){
    game = new Bowling ();

  });

  describe('gutter game', function(){
    it('should score 0 if player never hits a pin', function(){
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });
  });

  describe("When in all rolls only hits 1 pin", function(){
    it('should score 20 if player only hits a pin per roll', function(){
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score()).toEqual(20);
    });
  });

  // describe("is spare when hit 10 pins in two rolls", function(){
  //   it("should score 10 plus score in next roll", function(){
  //     game.roll(5);
  //     game.roll(5);
  //     game.roll(5);
  //     expect(game.score()).toEqual(15);
  //   });
  //
  // });

  describe("is spare", function(){
    it('is spare when scores 10 in two rolls', function(){
      expect(game.isSpare()).toBe(true);
    });

  });






});
