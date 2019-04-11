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

    it("can see that all frames are complete after 20 rolls of zero", function(){
      for(let i=0; i<20; i++){
        game.recordBall(0);
      }
      expect(game.frames.slice(-1)[0].isComplete()).toBe(true);
    });

    it("records two frames in a row correctly", function(){
      for(let i=0; i<4; i++) {
        game.recordBall(4);
      }
      expect(game.isComplete()).toBe(false);
      expect(game.calculateTotal()).toEqual(16);
      expect(game.frames.length).toEqual(2);
    });
  });

  describe("Spare", function(){
    it("spare - records 10 for the frame at first but then updates the frame with bonus points", function(){
        game.recordBall(3);
        game.recordBall(7);
        expect(game.calculateTotal()).toEqual(10);
        expect(game.bonuses.length).toEqual(1);
        game.recordBall(7);
        expect(game.calculateTotal()).toEqual(24);
        expect(game.frames[0].frameTotal).toEqual(17);
    });
  })

  describe("Strike", function(){
    it("strike - records 10 for the frame after a strike but then updates the frame with bonus points", function(){
      game.recordBall(10);
      expect(game.calculateTotal()).toEqual(10);
      expect(game.frames[0].frameTotal).toEqual(10);
      expect(game.bonuses.length).toEqual(1);
      game.recordBall(7);
      game.recordBall(2);
      expect(game.calculateTotal()).toEqual(28);
      expect(game.frames[0].frameTotal).toEqual(19);
    });
  })

  describe("Strike", function(){
    it("two strikes in a row", function(){
      game.recordBall(10);
      expect(game.frames.length).toEqual(1);
      game.recordBall(10);
      expect(game.frames.length).toEqual(2);
    });
  })

  describe("Round 10 with a bonus score", function(){

  })

});
