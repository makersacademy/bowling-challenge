describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game(Frame)
  });

  it('should know the values for each roll of each frame', function() {
    game._frames[0].roll(1)
    game._frames[0].roll(2)
    game._frames[1].roll(3)
    game._frames[1].roll(4)
    game._frames[2].roll(5)
    game._frames[2].roll(1)
    game._frames[3].roll(2)
    game._frames[3].roll(3)
    game._frames[4].roll(4)
    game._frames[4].roll(5)
    game._frames[5].roll(1)
    game._frames[5].roll(2)
    game._frames[6].roll(3)
    game._frames[6].roll(4)
    game._frames[7].roll(5)
    game._frames[7].roll(1)
    game._frames[8].roll(2)
    game._frames[8].roll(3)
    game._frames[9].roll(4)
    game._frames[9].roll(5)

    expect(game._frames[0]._scores[0]).toEqual(1)
    expect(game._frames[0]._scores[1]).toEqual(2)
    expect(game._frames[1]._scores[0]).toEqual(3)
    expect(game._frames[1]._scores[1]).toEqual(4)
    expect(game._frames[2]._scores[0]).toEqual(5)
    expect(game._frames[2]._scores[1]).toEqual(1)
    expect(game._frames[3]._scores[0]).toEqual(2)
    expect(game._frames[3]._scores[1]).toEqual(3)
    expect(game._frames[4]._scores[0]).toEqual(4)
    expect(game._frames[4]._scores[1]).toEqual(5)
    expect(game._frames[5]._scores[0]).toEqual(1)
    expect(game._frames[5]._scores[1]).toEqual(2)
    expect(game._frames[6]._scores[0]).toEqual(3)
    expect(game._frames[6]._scores[1]).toEqual(4)
    expect(game._frames[7]._scores[0]).toEqual(5)
    expect(game._frames[7]._scores[1]).toEqual(1)
    expect(game._frames[8]._scores[0]).toEqual(2)
    expect(game._frames[8]._scores[1]).toEqual(3)
    expect(game._frames[9]._scores[0]).toEqual(4)
    expect(game._frames[9]._scores[1]).toEqual(5)
  });


});
