describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it( "starts with framenumber zero", function() {
    expect(game.framenumber()).toBe(0)
  });

  describe('add_frame', function() {

    beforeEach(function() {
      game.add_frame();
    });

    it ("changes framenumber to 1", function() {
      expect(game.framenumber()).toBe(1);
    });

    it ("adds frame to frame list", function() {
      expect(game.framelist()[0].framenumber).toBe(0)
    });

    it ("stops adding frames when framenumber is 9", function() {
      game.add_frame();
      game.add_frame();
      game.add_frame();
      game.add_frame();
      game.add_frame();
      game.add_frame();
      game.add_frame();
      game.add_frame();
      game.add_frame();
      game.add_frame();
      expect(game.framelist().length).toBe(10)
    });
  });

  describe('total_score', function() {

    beforeEach(function() {
      game.add_frame();
      game.add_frame();
    });

    it ('adds the score of two frames', function() {
      game.framelist()[0].addroll(2)
      game.framelist()[0].addroll(2)
      game.framelist()[1].addroll(2)
      game.framelist()[1].addroll(2)
      expect(game.total_score()).toBe(8)
    });

    it ('doubles next two if rolls strike', function() {
      game.framelist()[0].addroll(10)
      game.framelist()[1].addroll(2)
      game.framelist()[1].addroll(2)
      expect(game.total_score()).toBe(18)
    });
  });

});
