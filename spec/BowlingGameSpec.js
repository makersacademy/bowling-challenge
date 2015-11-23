describe("Bowling Game", function() {

  beforeEach(function(){
    game = new BowlingGame;
  });

  it("a game with points but without a strike or a spare", function() {
    game.roll(4);
    game.roll(3);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(3);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(3);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(3);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(3);
    game.roll(2);
    game.roll(7);
    expect(game.points()).toEqual(80);
    expect(game.showFrameScore()).toEqual([7, 16, 23, 32, 39, 48, 55, 64, 71, 80]);
    expect(game.scoreSheet).toEqual( [ [ 4, 3 ], [ 2, 7 ], [ 4, 3 ], [ 2, 7 ], [ 4, 3 ], [ 2, 7 ], [ 4, 3 ], [ 2, 7 ], [ 4, 3 ], [ 2, 7 ] ]);
  });

  it("a mixed game which includes strike and spare", function() {
    game.roll(4);
    game.roll(3);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(6);
    game.roll(2);
    game.roll(7);
    game.roll(10);
    game.roll(3);
    game.roll(7);
    game.roll(10);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(3);
    game.roll(2);
    game.roll(7);
    expect(game.points()).toEqual(121);
    expect(game.showFrameScore()).toEqual([7, 16, 28, 37, 57, 77, 96, 105, 112, 121]);
    expect(game.scoreSheet).toEqual([ [ 4, 3 ], [ 2, 7 ], [ 4, '/' ], [ 2, 7 ], [ ' ', 'X' ], [ 3, '/' ], [ ' ', 'X' ], [ 2, 7 ], [ 4, 3 ], [ 2, 7 ] ]);
  });

  it("when a strike in last frame then player gets three turns", function() {
    game.roll(4);
    game.roll(3);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(6);
    game.roll(2);
    game.roll(7);
    game.roll(10);
    game.roll(3);
    game.roll(7);
    game.roll(10);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(3);
    game.roll(10);
    game.roll(7);
    game.roll(2);
    expect(game.points()).toEqual(131);
    expect(game.showFrameScore()).toEqual([7, 16, 28, 37, 57, 77, 96, 105, 112, 131]);
    expect(game.scoreSheet).toEqual([ [ 4, 3 ], [ 2, 7 ], [ 4, '/' ], [ 2, 7 ], [ ' ', 'X' ], [ 3, '/' ], [ ' ', 'X' ], [ 2, 7 ], [ 4, 3 ], [ ' ', 'X' ], [ 7, 2 ] ]);
  });

  it("when a spare in last frame then player gets three turns", function() {
    game.roll(4);
    game.roll(3);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(6);
    game.roll(2);
    game.roll(7);
    game.roll(10);
    game.roll(3);
    game.roll(7);
    game.roll(10);
    game.roll(2);
    game.roll(7);
    game.roll(4);
    game.roll(3);
    game.roll(3);
    game.roll(7);
    game.roll(2);
    expect(game.points()).toEqual(124);
    expect(game.showFrameScore()).toEqual([7, 16, 28, 37, 57, 77, 96, 105, 112, 124]);
    expect(game.scoreSheet).toEqual([ [ 4, 3 ], [ 2, 7 ], [ 4, '/' ], [ 2, 7 ], [ ' ', 'X' ], [ 3, '/' ], [ ' ', 'X' ], [ 2, 7 ], [ 4, 3 ], [ 3, '/' ], [ 2, 0 ] ]);
  });

  it("should handle a perfect game", function() {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    expect(game.points()).toEqual(300);
    expect(game.showFrameScore()).toEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, 300])
	});

  it("should handle a gutter game", function() {
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    expect(game.points()).toEqual(0);
    expect(game.showFrameScore()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	});

});
