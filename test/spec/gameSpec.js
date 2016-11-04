describe ('Game', function () {
  var game = new Game ();
  var strike = Game._pins;

  it("has a score that is initially zero", function () {
    expect(game._score).toEqual(0);
  });

  it("has 10 pins", function () {
    expect(game._pins).toEqual(10);
  });

  it("starts a frame at least 10 times", function(){
    spyOn(game, 'frame');
    game.start();
    expect(game.frame.calls.count()).toEqual(10);
  });

  it("starts a frame no more than 12 times", function(){
    spyOn(game, 'frame');
    game.start();
    expect(game.frame.calls.count()).toBeLessThan(12);
  });

  describe('frame', function(){

    it("updates the score based on the result of the frame", function(){
      spyOn(game, 'roll').and.returnValue(3);
      score = game._score;
      game.frame();
      expect(game._score).toEqual(score+6);
    });

    it("performs one roll if strike", function(){
      spyOn(game, 'roll').and.returnValue(strike);
      game.frame();
      expect(game.roll.calls.count()).toEqual(1);
    });

    it("performs two rolls if the first wasn't a strike", function(){
      spyOn(game, 'roll').and.returnValue(4);
      game.frame();
      expect(game.roll.calls.count()).toEqual(2);
    });

    it("adds a bonus if the player rolls a strike", function(){
      spyOn(game, 'roll').and.returnValue(strike);
      spyOn(game, 'bonus');
      game.frame();
      expect(game.bonus()).toHaveBeenCalled();
    });

    it("adds a bonus if the player rolls a spare", function(){
      spyOn(game, 'roll').and.returnValue(strike/2);
      spyOn(game, 'bonus');
      game.frame();
      expect(game.bonus()).toHaveBeenCalled();
    });
  });

  describe("roll", function(){
    it ("returns a random number of pins that have been knocked down", function(){
      expect([1,2,3,4,5,6,7,8,9,10]).toContain(game.roll());
    });
  });

  describe("bonus", function(){
    it ("increases the score by the number of pins knocked down in the next roll", function(){
      spyOn(game, 'roll').and.returnValue(7);
      expect(game.bonus()).toChange(game._score).by(7);
    });

    it ("applies even when next roll is a strike", function(){
      spyOn(game, 'roll').and.returnValue(strike);
      expect(game.bonus()).toChange(game._score).by(strike);
    });
  });

  describe("10th frame strike or spare", function(){
    it("lets you roll the additional balls for bonus", function(){
      done.fail("Need to design this spec");
    });
  });

});
