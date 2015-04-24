describe('Game', function() {

  var rollHelper = function(rollArray) {
    for(var i = 0; i < rollArray.length; i++) {
      game.roll(rollArray[i]);
    }
  };

  beforeEach(function() {
    game = new Game();
  });

  it('is comprised of ten frames when created', function() {
    expect(game.frames.length).toEqual(10);
  });

  it('ends with a final frame', function() {
    expect(game.frames[9].isLastFrame).toEqual(true);
  });

  it('knows which is the current frame', function() {
    game.roll(5);
    game.roll(4);
    expect(game.currentFrame()).toBe(game.frames[1]);
  });

  it('knows when it is over', function() {
    rollHelper([10, 3, 7, 6, 1, 10, 10, 10, 2, 8, 9, 0, 7, 3, 10, 10, 10]);
    expect(game.isOver()).toEqual(true);
  });

  it('will not allow further rolls once completed', function() {
    rollHelper([10, 3, 7, 6, 1, 10, 10, 10, 2, 8, 9, 0, 7, 3, 10, 10, 10]);
    expect(function() { game.roll(3) }).toThrow(new Error('Game is over!'));
  });

  describe('rolling and tracking the score', function() {

    it('single roll played', function() {
      game.roll(9);
      expect(game.runningScore()).toEqual(9);
    });

    it('two open frames', function() {
      rollHelper([5, 3, 6, 3]);
      expect(game.runningScore()).toEqual(17);
    });

    it('a strike and an open frame', function() {
      rollHelper([10, 7, 2]);
      expect(game.runningScore()).toEqual(28);
    });

    it('a double', function() {
      rollHelper([10, 10, 9, 0]);
      expect(game.runningScore()).toEqual(57);
    });

    it('a turkey', function() {
      rollHelper([10, 10, 10, 0, 9]);
      expect(game.runningScore()).toEqual(78);
    });

    it('the game off the challenge repo', function() {
      rollHelper([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
      expect(game.runningScore()).toEqual(133);
    });

    it('some other games off of the internet - no strikes or spares', function() {
      rollHelper([9, 0, 3, 5, 6, 1, 3, 6, 8, 1, 5, 3, 2, 5, 8, 0, 7, 1, 8, 1]);
      expect(game.runningScore()).toEqual(82);
    });

    it('some other games off of the internet - with spares', function() {
      rollHelper([9, 0, 3, 7, 6, 1, 3, 7, 8, 1, 5, 5, 0, 10, 8, 0, 7, 3, 8, 2, 8]);
      expect(game.runningScore()).toEqual(131);
    });

    it('some other games off of the internet - with strikes', function() {
      rollHelper([10, 3, 7, 6, 1, 10, 10, 10, 2, 8, 9, 0, 7, 3, 10, 10, 10]);
      expect(game.runningScore()).toEqual(193);
    });

    it('a gutter game', function() {
      rollHelper([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(game.runningScore()).toEqual(0);
    });

    it('perfect game', function() {
      rollHelper([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
      expect(game.runningScore()).toEqual(300);
    });
    
  });

});