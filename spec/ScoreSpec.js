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
      console.log('DISPLAY OF STRIKE BOTH IN NEXT: ');
      display.print(game.frames, game.cumulatives)
      game.add_score(5)
      game.add_score(2)
      console.log('after both');
      display.print(game.frames, game.cumulatives)
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
      console.log('strike attempt: ');
      console.log('DISPLAY OF PREVIOUS STRIKE: ');
      display.print(game.frames, game.cumulatives)
      game.add_score(10)
      console.log('display after 1 extra strike: ');
      display.print(game.frames, game.cumulatives)
      game.add_score(5)
      console.log('Needs to add second ball score to second strike');
      console.log('display after 2 extra ball: ');
      display.print(game.frames, game.cumulatives)
      game.add_score(2)
      expect(game.score).toEqual(7+17+25)
      expect(game.cumulatives).toEqual([25, 25 + 10 + 7, 25 + 17 + 7]);
      console.log('display final: ');
      display.print(game.frames, game.cumulatives)
    })
  })

});
