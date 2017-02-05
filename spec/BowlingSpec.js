describe('Bowling', function(){

  beforeEach(function() {
    game = new Bowling();
  });

  it('Game score starts at 0', function(){
    expect(game.getScore()).toEqual(0);
  });

  it('Frame starts at index 0', function(){
    expect(game.getFrame()).toEqual(0);
  });

  it('Roll starts at index 0', function(){
    expect(game.getRoll()).toEqual(0);
  });

  it('saves the first ever roll into the right place', function(){
    game.roll(1)
    expect(game.scoreSheet[0][0]).toEqual(1);
  });

  it('saves the rolls of <10 into the right place', function(){
    game.roll(1);
    expect(game.scoreSheet[0][0]).toEqual(1);
    game.roll(2);
    expect(game.scoreSheet[0][1]).toEqual(2);
    game.roll(3);
    expect(game.scoreSheet[1][0]).toEqual(3);
    game.roll(4);
    expect(game.scoreSheet[1][1]).toEqual(4);
  });

  it('gutter game', function(){
    for (var i = 0; i < 21; i++) {
      game.roll(0);};
    expect(game.scoreSheet).toEqual([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
    [0,0,0]]);
  });

  it ('can deal with strikes in frame score', function(){
    game.roll(0);
    game.roll(10);
    expect(game.frameScore).toEqual([10,0,0,0,0,0,0,0,0,0]);
  });
})
