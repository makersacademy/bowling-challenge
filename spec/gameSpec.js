var Game = require('../src/game.js');
var TenthFrame = require('../src/tenthFrame.js');
var Frame = require('../src/Frame.js');


describe("Game", function() {

    beforeEach(function() {
      game = new Game();
    });

    it("is an instance of Game", function() {
      expect(game).toEqual(jasmine.any(Game));
    });

    it("is initialised with ten empty frames", function() {
      expect(game.frames.length).toEqual(10);
    });

    it("its last frame should be of type 'tenthFrame'", function() {
      expect(game.frames.pop()).toEqual(jasmine.any(TenthFrame));
    });

    it("can return a given frame", function(){
      expect(game.getFrame(9)).toEqual(jasmine.any(TenthFrame));
    });

    it("Can set the first score of a given frame", function(){
      game.setFirstScore(2, 5);
      expect(game.getFrame(2).getFirstScore()).toEqual(5);
    });

    it("Can set the second score of a given frame", function(){
      game.setSecondScore(2, 5);
      expect(game.getFrame(2).getSecondScore()).toEqual(5);
    });

    it("can correctly update frames with an input score method", function(){
      game.inputScore(10); // 1
      game.inputScore(2);  // 2
      game.inputScore(4);
      game.inputScore(8);  // 3
      game.inputScore(2);
      game.inputScore(3);  // 4
      game.inputScore(3);
      game.inputScore(10); // 5
      game.inputScore(10); // 6
      game.inputScore(10); // 7
      game.inputScore(3);  // 8
      game.inputScore(7);
      game.inputScore(8);  // 9
      game.inputScore(2);

      game.inputScore(10); // 10
      game.inputScore(4);
      game.inputScore(7);

      game.inputScore(7);  // game over

      expect(game.getFrame(0).getFirstScore()).toEqual(10);
      expect(game.getFrame(1).getFirstScore()).toEqual(2);
      expect(game.getFrame(1).getSecondScore()).toEqual(4);
      expect(game.getFrame(2).getFirstScore()).toEqual(8);
      expect(game.getFrame(2).getSecondScore()).toEqual(2);
      expect(game.getFrame(3).getFirstScore()).toEqual(3);
      expect(game.getFrame(3).getSecondScore()).toEqual(3);
      expect(game.getFrame(4).getFirstScore()).toEqual(10);
      expect(game.getFrame(5).getFirstScore()).toEqual(10);
      expect(game.getFrame(6).getFirstScore()).toEqual(10);
      expect(game.getFrame(7).getFirstScore()).toEqual(3);
      expect(game.getFrame(7).getSecondScore()).toEqual(7);
      expect(game.getFrame(8).getFirstScore()).toEqual(8);
      expect(game.getFrame(8).getSecondScore()).toEqual(2);

      expect(game.getFrame(9).getFirstScore()).toEqual(10);
      expect(game.getFrame(9).getSecondScore()).toEqual(4);
      expect(game.getFrame(9).getBonusScore()).toEqual(7);
      // expect(game.inputScore(7)).toEqual("Game has finished!");  // game over
    });

    it("can correctly update frames when the tenth frame has no spares or strikes", function(){
      game.inputScore(10); // 1
      game.inputScore(2);  // 2
      game.inputScore(4);
      game.inputScore(8);  // 3
      game.inputScore(2);
      game.inputScore(3);  // 4
      game.inputScore(3);
      game.inputScore(10); // 5
      game.inputScore(10); // 6
      game.inputScore(10); // 7
      game.inputScore(3);  // 8
      game.inputScore(7);
      game.inputScore(8);  // 9
      game.inputScore(2);

      game.inputScore(1); // 10
      game.inputScore(4);


      expect(game.getFrame(0).getFirstScore()).toEqual(10);
      expect(game.getFrame(1).getFirstScore()).toEqual(2);
      expect(game.getFrame(1).getSecondScore()).toEqual(4);
      expect(game.getFrame(2).getFirstScore()).toEqual(8);
      expect(game.getFrame(2).getSecondScore()).toEqual(2);
      expect(game.getFrame(3).getFirstScore()).toEqual(3);
      expect(game.getFrame(3).getSecondScore()).toEqual(3);
      expect(game.getFrame(4).getFirstScore()).toEqual(10);
      expect(game.getFrame(5).getFirstScore()).toEqual(10);
      expect(game.getFrame(6).getFirstScore()).toEqual(10);
      expect(game.getFrame(7).getFirstScore()).toEqual(3);
      expect(game.getFrame(7).getSecondScore()).toEqual(7);
      expect(game.getFrame(8).getFirstScore()).toEqual(8);
      expect(game.getFrame(8).getSecondScore()).toEqual(2);

      expect(game.getFrame(9).getFirstScore()).toEqual(1);
      expect(game.getFrame(9).getSecondScore()).toEqual(4);
    });

    it("can return the total of a game", function(){
      game.inputScore(10); // 1
      game.inputScore(2);  // 2
      game.inputScore(4);
      game.inputScore(8);  // 3
      game.inputScore(2);
      game.inputScore(3);  // 4
      game.inputScore(3);

      expect(game.getTotal()).toEqual(41);
    });
});

