describe ('Game', function () {

  var results = [1,2,3,4,5,5,3,5,2,6,7,3,6,1,3,2,8,1,9,0];
  var game = new Game (results);
  var strike = game._pins;

  it("has a score that is initially zero", function () {
    expect(game.getScore()).toEqual(0);
  });

  it("has 10 pins", function () {
    expect(game._pins).toEqual(10);
  });

  it("recieves an array of roll results on initialisation", function(){
    expect(game.results).toEqual(results);
  });

  it("starts a frame as many times as the results array indicates", function(){
    spyOn(game, 'frame');
    spyOn(game, 'tenthFrame');
    game.start();
    expect(game.frame.calls.count()).toEqual(results.length/2-1);
    expect(game.tenthFrame).toHaveBeenCalled();
  });

  describe('frame', function(){

    it("updates the score based on the result of the frame", function(){
      spyOn(game, 'getRoll').and.returnValue(3);
      var score = game.getScore();
      game.frame();
      expect(game.getScore()).toEqual(score+6);
    });

    it("performs one roll if strike", function(){
      spyOn(game, 'getRoll').and.returnValue(strike);
      game.frame();
      expect(game.getRoll.calls.count()).toEqual(1);
    });

    it("performs two rolls if the first wasn't a strike", function(){
      spyOn(game, 'getRoll').and.returnValue(4);
      game.frame();
      expect(game.getRoll.calls.count()).toEqual(2);
    });

    it("adds a bonus if the player rolls a strike", function(){
      spyOn(game, 'getRoll').and.returnValue(strike);
      spyOn(game, 'setBonus');
      game.frame();
      expect(game.setBonus).toHaveBeenCalled();
    });

    it("adds a bonus if the player rolls a spare", function(){
      spyOn(game, 'getRoll').and.returnValue(strike/2);
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
      spyOn(game, 'getRoll').and.returnValue(3);
      game.setBonus();
      var score = game.getScore();
      game.frame();
      expect(game.getScore()).toEqual(score + 3*3);
    });

    it ("applies even when next roll is a strike", function(){
      spyOn(game, 'getRoll').and.returnValue(strike);
      spyOn(game, 'applyBonus');
      game.setBonus();
      game.frame();
      expect(game.applyBonus).toHaveBeenCalled();
    });
  });

  describe("10th frame", function(){

    it("lets you roll the additional balls for bonus if it was a strike frame", function(){
      var results = [10,0,3,4,5,5,3,5,2,6,7,3,6,1,3,2,8,1,10,4,6];
      var game = new Game (results);
      spyOn(game, 'extraRoll');
      game.start();
      expect(game.extraRoll).toHaveBeenCalled();
    });
    it("lets you roll the additional balls for bonus if it was a spare frame", function(){
      var results = [10,0,3,4,5,5,3,5,2,6,7,3,6,1,3,2,8,1,9,1,7];
      var game = new Game (results);
      spyOn(game, 'extraRoll');
      game.start();
      expect(game.extraRoll).toHaveBeenCalled();
    });
  });

  describe("rolling extra balls", function(){

    it("lets you have up to 1 extra roll", function(){
      results = [10,0,3,4,10,0,3,5,10,0,7,3,10,0,3,2,8,10,10,0,10,4,5];
      game = new Game(results);
      spyOn(game, 'extraRoll');
      game.start();
      expect(game.extraRoll.calls.count()).toEqual(1);
    });

    it("if you have no balls left you don't get an extra roll", function(){
      results = [1,2,3,4,5,5,3,5,2,6,7,3,6,1,3,2,8,1,9,10];
      game = new Game(results);
      spyOn(game, 'extraRoll');
      game.start();
      expect(game.extraRoll).not.toHaveBeenCalled();
    });
  });

  describe("special games:", function(){
    it("is a gutter game when you score nothing", function(){
      var results = new Array(20);
      results.fill(0,0,20);
      game = new Game (results);
      game.start();
      expect(game.getScore()).toEqual(0);
    });
    it("is a perfect game when all your rolls ares strikes", function(){
      var results = [10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10, 10, 10];
      game = new Game (results);
      game.start();
      expect(game.getScore()).toEqual(230);
    });
    it("example game", function(){
      var results = [1,4,4,5,6,4,5,5,10,0,0,1,7,3,6,4,10,0,2,8,6];
      game = new Game (results);
      game.start();
      expect(game.getScore()).toEqual(131);
    });
  });
});
