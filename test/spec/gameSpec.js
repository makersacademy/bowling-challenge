describe ('Game', function () {

  var results = [1,2,3]
  var game = new Game (results);
  var strike = game._pins;

  it("has a score that is initially zero", function () {
    expect(game.getScore()).toEqual(0);
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

  it("recieves an array of roll results on initialisation", function(){
    expect(game.results).toEqual([1,2,3])
  });

  describe('frame', function(){

    it("updates the score based on the result of the frame", function(){
      spyOn(game, 'roll').and.returnValue(3);
      var score = game.getScore();
      game.frame();
      expect(game.getScore()).toEqual(score+6);
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
      spyOn(game, 'setBonus');
      game.frame();
      expect(game.setBonus).toHaveBeenCalled();
    });

    it("adds a bonus if the player rolls a spare", function(){
      spyOn(game, 'roll').and.returnValue(strike/2);
      spyOn(game, 'setBonus');
      game.frame();
      expect(game.setBonus).toHaveBeenCalled();
    });
  });

  describe("roll", function(){
    it ("returns a random number of pins that have been knocked down", function(){
      expect([1,2,3,4,5,6,7,8,9,10]).toContain(game.roll());
    });
  });

  describe("bonus", function(){
    it ("increases the score by the number of pins knocked down in the next roll", function(){
      spyOn(game, 'roll').and.returnValue(3);
      game.setBonus();
      var score = game.getScore();
      game.frame();
      expect(game.getScore()).toEqual(score + 3*3);
    });

    it ("applies even when next roll is a strike", function(){
      spyOn(game, 'roll').and.returnValue(strike);
      spyOn(game, 'applyBonus');
      game.setBonus();
      game.frame();
      expect(game.applyBonus).toHaveBeenCalled();
    });
  });

  describe("10th frame", function(){

    it("lets you roll the additional balls for bonus if it was a strike frame", function(){
      spyOn(game, 'roll').and.returnValue(strike);
      spyOn(game, 'extraRolls');
      game.start();
      expect(game.extraRolls).toHaveBeenCalled();
    });
    it("lets you roll the additional balls for bonus if it was a spare frame", function(){
      spyOn(game, 'roll').and.returnValue(5);
      spyOn(game, 'extraRolls');
      game.start();
      expect(game.extraRolls).toHaveBeenCalled();
    });
  });

  describe("rolling extra balls", function(){

    it("lets you have up to 3 extra rolls", function(){
      spyOn(game, 'roll');
      game.extraRolls();
      expect(game.roll.calls.count()).toBeLessThan(4);
    });

    it("you get as many extra rolls as you have balls remaining", function(){
      spyOn(game, 'roll');
      game._balls = 2;
      game.extraRolls();
      expect(game.roll.calls.count()).toEqual(2);
    });
  });

  describe("special games:", function(){
    it("is a gutter game when you score nothing", function(){
      game = new Game ();
      spyOn(game, 'roll').and.returnValue(0);
      game.start();
      expect(game.getScore()).toEqual(0);
    });
    it("is a gutter game when you score nothing", function(){
      game = new Game ();
      var strike = game._pins;
      spyOn(game, 'roll').and.returnValue(strike);
      game.start();
      expect(game.getScore()).toEqual(300);
    });
  });
});
