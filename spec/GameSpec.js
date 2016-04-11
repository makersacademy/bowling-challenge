describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = 'new Frame';
  });

  describe('scoring', function() {
    it('has a starting score of 0', function() {
      expect(game.getScore()).toEqual(0);
    });

    it('may not change the score', function() {
      game.rollBall(0);
      expect(game.getScore()).toEqual(0);
    });

    it('increase total score by amount of pins', function() {
      game.rollBall(8);
      expect(game.getScore()).toEqual(8);
    });
  })

  it('counts the rolls per frame', function() {
    game.rollBall(4);
    expect(game.getRollCount()).toEqual(1);
  });

  it('has 2 rolls per frame', function() {
    game.rollBall(4);
    game.rollBall(4);
    expect(game.getRollCount()).toEqual(2);
  });

  it('starts at frame 1', function() {
    expect(game.getFrameCount()).toEqual(0);
  });

  it('goes to next frame after 2 rolls', function() {
    game.rollBall(4);
    game.rollBall(4);
    expect(game.getFrameCount()).toEqual(1);
  });

  it('gets score of completed frame', function() {
    game.rollBall(4);
    game.rollBall(4);
    expect(game.getScore()).toEqual(8);
  });

  it('goes to frame 2 after four rolls', function() {
    for(var i = 0; i < 4; i++) {
      game.rollBall(4);
    }
    expect(game.getFrameCount()).toEqual(2);
    expect(game.getRollCount()).toEqual(4);
  });

  describe('Full game', function() {
    it('shows final result', function () {
      game = new Game();
      // First frame
      game.rollBall(1);
      game.rollBall(4);
      game.rollBall(4);
      game.rollBall(5);
      game.rollBall(6);
      game.rollBall(4);
      game.rollBall(5);
      game.rollBall(5);
      game.rollBall(10);
      game.rollBall(0);
      game.rollBall(1);
      game.rollBall(7);
      game.rollBall(3);
      game.rollBall(6);
      game.rollBall(4);
      game.rollBall(10);
      game.rollBall(2);
      game.rollBall(8);
      game.rollBall(6);
      expect(game.getScore()).toEqual(133);
    });

    xit('bonus frame strike', function () {
      game = new Game();
      // First frame
      game.rollBall(1);
      console.log('first');
      console.log(game.getScore());
      game.rollBall(4);
      console.log(game.getScore());

      // Second frame
      console.log('second');
      game.rollBall(4);
      console.log(game.getScore());
      game.rollBall(5);
      console.log(game.getScore());

      // Third frame
      console.log('third');
      game.rollBall(6);
      console.log(game.getScore());
      game.rollBall(4);
      console.log(game.getScore());

      // Fourth frame
      console.log('fourth');
      game.rollBall(5);
      console.log(game.getScore());
      game.rollBall(5);
      console.log(game.getScore());

      // Fifth frame
      console.log('fifth');
      game.rollBall(10);
      console.log(game.getScore());


      // Sixth frame
      console.log('Sixth');
      game.rollBall(0);
      console.log(game.getScore());
      game.rollBall(1);
      console.log(game.getScore());

      // Seventh frame
      console.log('Seventh');
      game.rollBall(7);
      console.log(game.getScore());
      game.rollBall(3);
      console.log(game.getScore());

      // Eightth frame
      console.log('Eightth');
      game.rollBall(6);
      console.log(game.getScore());
      game.rollBall(4);
      console.log(game.getScore());

      // Ninth frame
      console.log('Ninth');
      game.rollBall(10);
      console.log(game.getScore());

      // Tenth frame
      console.log('Tenth');
      game.rollBall(2);
      console.log(game.getScore());
      game.rollBall(8);
      console.log(game.getScore());

      // Bonus frame
      console.log('Bonus');
      game.rollBall(6);
      console.log(game.getScore());

      expect(game.getScore()).toEqual(137);
    });
  });

  describe('Bonus points', function() {
    it('gets points from 1st roll in next frame after spare', function() {
      game.rollBall(4);
      game.rollBall(6);
      game.rollBall(5);
      expect(game.getScore()).toEqual(20);
    });
  });


});
