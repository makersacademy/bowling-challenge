describe("Game", function() {
  var score;
  var frame;
  var display;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    display = new Display();
  });

  it("should have an initial score of 0", function() {
    expect(game.score).toEqual(0);
    expect(game.cumulatives).toEqual([]);
  });

  describe('Retrieving score from Frame', function() {
    it('uses frame to get the score', function() {
      game.add_score(5)
      game.add_score(3)
      expect(game.score).toEqual(8)
      expect(game.cumulatives).toEqual([8]);


    });
  });
  it('adds a new frame after round', function() {
    game.add_score(5)
    game.add_score(3)
    expect(game.frames.length).toEqual(2)
  })
  it('adds new scores into new frame', function() {
    game.add_score(5)
    game.add_score(3)
    game.add_score(6)
    game.add_score(3)
    expect(game.score).toEqual(17)
    expect(game.cumulatives).toEqual([8, 17]);
  })

  describe('Spares', function() {
    beforeEach(function() {
      game.add_score(5)
      game.add_score(5)
    })
    it('adds first ball bonus for spare', function() {
      game.add_score(5)
      game.add_score(2)
      expect(game.score).toEqual(22)
      expect(game.cumulatives).toEqual([15, 22]);

    })
  })

  describe('Strike', function() {
    beforeEach(function() {
      game.add_score(10)
    })
    it('adds two ball bonus for strike', function() {
      expect(game.cumulatives).toEqual([])
      game.add_score(5)
      game.add_score(2)
      expect(game.score).toEqual(7+17)
      expect(game.cumulatives).toEqual([17, 7+17]);
    })
    it('carry over bonus for strike and spare', function() {
      game.add_score(5)
      game.add_score(5)
      game.add_score(3)
      game.add_score(0)
      expect(game.score).toEqual(3+13+20)
      expect(game.cumulatives).toEqual([20, 13 + 20, 13 + 20 + 3]);
    })
    it('carry over bonus for two strikes', function() {
      game.add_score(10)
      game.add_score(5)
      game.add_score(2)
      expect(game.score).toEqual(7+17+25)
      expect(game.cumulatives).toEqual([25, 25 + 10 + 7, 25 + 17 + 7]);
    })
    it('carry over bonus for two strikes', function() {
      game.add_score(10)
      game.add_score(10)
      game.add_score(10)
      game.add_score(0)
      game.add_score(0)
      expect(game.score).toEqual(90)
      expect(game.cumulatives).toEqual([30, 60, 80, 90, 90 ]);
    })
  })
  describe('End Game', function() {
    beforeEach(function() {
      [1,2,3,4,5,6,7,8,9,10].forEach( function() {
        game.add_score(10)
      })
    })
    it('Adds extra balls to the last frame', function() {
      console.log('SHOWING BEFORE SHOTS');
      display.print(game.frames, game.cumulatives)
      game.add_score(10)
      game.add_score(10)
      expect(game.score).toEqual(300)
      expect(game.cumulatives).toEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, 300 ]);
      console.log('SHOWING AFTER LAST SHOTS');
      display.print(game.frames, game.cumulatives)
    });
  });
});
