var Game = require('../src/Game');

describe('Game', function(){
  beforeEach(function(){
    game = new Game();
  });

  describe("Simple scores", function(){
    it("allows the player to enter a score for a frame", function(){
      game.recordBall(3);
      expect(game.calculateTotal()).toEqual(3);
    });

    it("allows the player to enter two scores for a frame", function(){
      game.recordBall(3);
      game.recordBall(4);
      expect(game.calculateTotal()).toEqual(7);
    })

    it('returns an incomplete game at the start', function(){
      expect(game.isComplete()).toBe(false);
    });

    it("can see that the game is complete after 20 rolls of zero", function(){
      for(let i=0; i<18; i++){
        game.recordBall(0);
      }
      game.recordBall(0, true);
      game.recordBall(0, true);
      game.checkEndOfGame();
      expect(game.isComplete()).toBe(true);
    });

    it("can see that all frameList are complete after 20 rolls of zero", function(){
      for(let i=0; i<20; i++){
        game.recordBall(0);
      }
      expect(game.frameList.slice(-1)[0].isComplete()).toBe(true);
    });

    it("records two frameList in a row correctly", function(){
      for(let i=0; i<4; i++) {
        game.recordBall(4);
      }
      expect(game.isComplete()).toBe(false);
      expect(game.calculateTotal()).toEqual(16);
      expect(game.frameList.length).toEqual(2);
    });
  });

  describe("Spare", function(){
    it("spare - records 10 for the frame at first but then updates the frame with bonus points", function(){
        game.recordBall(3);
        game.recordBall(7);
        expect(game.calculateTotal()).toEqual(10);
        game.recordBall(7);
        game.addBonusScores();
        expect(game.calculateTotal()).toEqual(24);
        expect(game.frameList[0].total).toEqual(17);
    });
  })

  describe("Strike", function(){
    it("strike - records 10 for the frame after a strike but then updates the frame with bonus points", function(){
      game.recordBall(10);
      expect(game.calculateTotal()).toEqual(10);
      expect(game.frameList[0].total).toEqual(10);
      game.recordBall(7);
      game.recordBall(2);
      game.addBonusScores();
      expect(game.calculateTotal()).toEqual(28);
      expect(game.frameList[0].total).toEqual(19);
    });

    it("calculates two strikes in a row", function(){
      game.recordBall(10);
      expect(game.frameList.length).toEqual(1);
      game.recordBall(10);
      expect(game.frameList.length).toEqual(2);
    });

    it("calculates four strikes in a row", function(){
      for(let i=0; i<4; i++) {
        game.recordBall(10);
      }
      game.recordBall(2);
      game.recordBall(5);
      game.addBonusScores();
      // (30) + (30) + (10+10+2) + (10+2+5) + 2 + 5
      expect(game.calculateTotal()).toEqual(106);
    });
  })

  describe("Strike and spare", function(){
    it("four strikes followed by a spare", function(){
      for(let i=0; i<4; i++) {
        game.recordBall(10);
      }
      game.recordBall(8);
      game.recordBall(2);
      game.recordBall(3);
      game.addBonusScores();
      // (30) + (30) + (10+10+8) + (10+8+2) + (8+2+3) + 3
      expect(game.calculateTotal()).toEqual(124);
    });
  })

  describe("Round 10 with a bonus score", function(){
    it("allows round 10 to have 3 balls with 3 strikes", function(){
      for(let i=0; i<18; i++) {
        game.recordBall(4);
      }
      expect(game.calculateTotal()).toEqual(72);
      game.recordBall(10, true);
      game.recordBall(10, true);
      game.recordBall(10, true);
      // console.log(game.frameList)
      expect(game.calculateTotal()).toEqual(102)
    });

    it("allows round 10 to have 3 balls with a spare", function(){
      for(let i=0; i<18; i++) {
        game.recordBall(4);
      }
      expect(game.calculateTotal()).toEqual(72);
      game.recordBall(8, true);
      game.recordBall(2, true);
      game.recordBall(5, true);
      // console.log(game.frameList)
      expect(game.calculateTotal()).toEqual(87)
    });

    it("correctly calculates only 2 balls in round 10 if less than 10", function(){
      for(let i=0; i<18; i++) {
        game.recordBall(4);
      }
      expect(game.calculateTotal()).toEqual(72);
      game.recordBall(3, true);
      game.recordBall(2, true);
      game.checkEndOfGame();
      expect(game.calculateTotal()).toEqual(77);
      expect(game.isComplete()).toEqual(true);
      game.recordBall(5, true);
      expect(game.calculateTotal()).toEqual(77)
    });

    // it("correctly allows 3 balls in round 10 if a strike on first ball", function(){
    //   for(let i=0; i<18; i++) {
    //     game.recordBall(4);
    //   }
    //   expect(game.calculateTotal()).toEqual(72);
    //   game.recordBall(10, true);
    //   game.recordBall(2, true);
    //   game.recordBall(5, true);
    //   expect(game.calculateTotal()).toEqual(87);
    //   expect(game.isComplete()).toEqual(true);
    // });
  })

});
