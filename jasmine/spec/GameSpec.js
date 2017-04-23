describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    frame1 = new Frame();
    frame2 = new Frame()
    frame3 = new Frame()
    frame4 = new Frame()
    frame5 = new Frame()
    frame6 = new Frame()
    frame7 = new Frame()
    frame8 = new Frame()
    frame9 = new Frame()
    frame10 = new Frame()
    frame11 = new Frame()
    frame1.bowls[0] = 10
    frame1.bowls[1] = 0
    frame2.bowls[0] = 10
    frame2.bowls[1] = 0
    frame1.bowls[0] = 10
    frame1.bowls[1] = 0
    frame3.bowls[0] = 10
    frame3.bowls[1] = 0
    frame4.bowls[0] = 10
    frame4.bowls[1] = 0
    frame5.bowls[0] = 3
    frame5.bowls[1] = 5
    frame6.bowls[0] = 5
    frame6.bowls[1] = 5
    frame7.bowls[0] = 10
    frame7.bowls[1] = 0
    frame8.bowls[0] = 5
    frame8.bowls[1] = 5
    frame9.bowls[0] = 2
    frame9.bowls[1] = 4
    frame10.bowls[0] = 4
    frame10.bowls[1] = 5
  });

  describe('set up', function(){
    it('starts a game with no frames', function(){
      expect(game._frames.length).toBe(0)
    });
  });
  describe('adding frames', function(){
    it('adds a frame to the current game', function(){
      game.addframe(frame1)
      expect(game._frames.length).toBe(1)
    });
  });
  describe('can calculate bonus', function(){
    it('calculates spare bonus', function(){
      game.addframe(frame8)
      game.addframe(frame10)
      expect(game.spareBonus(0)).toBe(4)
    });
    it('calculates strike bonus (no strike next frame)', function(){
      game.addframe(frame1)
      game.addframe(frame10)
      expect(game.strikeBonus(0)).toBe(9)
    });
    it('calculates strike bonus (strike next frame)', function(){
      game.addframe(frame1)
      game.addframe(frame1)
      game.addframe(frame10)
      expect(game.strikeBonus(0)).toBe(14)
    });
  });
  describe('calculates score', function(){
    it('calculates the score at any given point (strike test)', function(){
      game.addframe(frame1)
      game.addframe(frame1)
      game.addframe(frame10)
      game.calculateScores()
      expect(game.scores).toEqual([24,19,9])
    });
    it('calculates the score at any given point (spare test)', function(){
      game.addframe(frame1)
      game.addframe(frame1)
      game.addframe(frame10)
      game.addframe(frame8)
      game.addframe(frame10)
      game.calculateScores()
      expect(game.scores).toEqual([24,19,9,14,9])
    });
    it('calculates a frame score (strike)', function(){
      game.addframe(frame1)
      game.addframe(frame1)
      game.addframe(frame10)
      expect(game.calculateScore(0)).toBe(24)
    });
  });
  describe('checks if a game is complete', function(){
    it('ordinary game', function(){
      var i;
      for (i = 0; i < 10; ++i) {
        game.addframe(frame10)
      }
      expect(game.complete()).toEqual('Game Finished')
    })
    it('strike', function(){
      var i;
      for (i = 0; i < 10; ++i) {
        game.addframe(frame1)
      }
      game.complete()
    expect(game._frames.length).toEqual(11)
    });
    it('spare', function(){
      var i;
      for (i = 0; i < 10; ++i) {
        game.addframe(frame8)
      }
      game.complete()
    expect(game._frames.length).toEqual(11)
  })
  });
});
