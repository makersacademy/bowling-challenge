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
      for(let i=0; i<20; i++){
        game.recordBall(0);
      }
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
      console.log(game.frameList)
      expect(game.calculateTotal()).toEqual(28);
      expect(game.frameList[0].total).toEqual(19);
    });
  })

  describe("Strike", function(){
    it("two strikes in a row", function(){
      game.recordBall(10);
      expect(game.frameList.length).toEqual(1);
      game.recordBall(10);
      expect(game.frameList.length).toEqual(2);
    });
  })

  // describe("Next2Balls", function(){
  //   it("returns the two balls in the frameList following the bonus", function(){
  //     game.recordBall(10);
  //     game.recordBall(7);
  //     game.recordBall(2);
  //     console.log(game.frameList);
  //     expect(game.getNextTwoBalls()).toEqual(9);
  //   });
  // })

  describe("Round 10 with a bonus score", function(){

  })

});
