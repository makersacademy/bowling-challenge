describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it( "starts with framenumber zero", function() {
    expect(game.frameNumber).toBe(0)
  });

  describe('add_frame', function() {

    beforeEach(function() {
      game.addFrame();
    });

    it ("changes framenumber to 1", function() {
      expect(game.frameNumber).toBe(1);
    });

    it ("adds frame to frame list", function() {
      expect(game.frameList[0].framenumber).toBe(0)
    });

    it ("stops adding frames when framenumber is 9", function() {
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      expect(game.frameList.length).toBe(10)
    });
  });

  describe('total_score', function() {

    beforeEach(function() {
      game.addFrame();
      game.addFrame();
    });

    it ('adds the score of two frames', function() {
      game.frameList[0].addroll(2)
      game.frameList[0].addroll(2)
      game.frameList[1].addroll(2)
      game.frameList[1].addroll(2)
      expect(game.totalScore()).toBe(8)
    });

    it ('doubles next two if rolls strike', function() {
      game.frameList[0].addroll(10)
      game.frameList[1].addroll(2)
      game.frameList[1].addroll(2)
      expect(game.totalScore()).toBe(18)
    });

    it ('doubles next rolls if half strike', function() {
      game.frameList[0].addroll(5)
      game.frameList[0].addroll(5)
      game.frameList[1].addroll(2)
      game.frameList[1].addroll(2)
      expect(game.totalScore()).toBe(16)
    });

    it ("adds three roll scores if in 10th frame", function() {
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.addFrame();
      game.frameList[9].addroll(10)
      game.frameList[9].addroll(10)
      game.frameList[9].addroll(10)
      expect(game.totalScore()).toBe(30)
    });

    it("doubles two consequetive rolls if you strike twice", function() {
      game.addFrame();
      game.frameList[0].addroll(10)
      game.frameList[1].addroll(10)
      game.frameList[2].addroll(10)
      expect(game.totalScore()).toBe(60)
    });
  });

});
