describe ('Bowling',function () {
  var game;

  beforeEach(function() {
    game = new Bowling();
  });

  it ('has 10 frames',function() {
    expect(game.gameFrames.length).toEqual(10);
  });

  it ('knows a frame is over when it rolls a strike', function(){
    game.roll(10);
    expect(game.gameFrames[0].isOver()).toBe(true);
  });

  it ('knows the current frame', function(){
    game.roll(10);
    expect(game.currentFrame()).toBe(game.gameFrames[1]);
  });

  it ('keeps track of rolls',function(){
    game.roll(5);
    expect(game.rolls).toEqual([5]);
  });

  it ('keep track of the bonus indexes of a strike',function(){
    game.roll(10);
    expect(game.bonusIndexes).toEqual([1,2]);
  });

  it ('keep track of the bonus indexes of a spare',function(){
    game.roll(5);
    game.roll(5);
    expect(game.bonusIndexes).toEqual([2]);
  });

  it('counts total score of rolls for a perfect game',function(){
    for (var i = 0 ; i < 12; i++) {
    game.roll(10)};
    expect(game.rollScore()).toBe(120);
  });

  it('counts total score of bonuses for a perfect game',function(){
    for (var i = 0 ; i < 12; i++) {
    game.roll(10)};
    expect(game.bonusScore()).toBe(180);
  });

  it('counts total score for a perfect game',function(){
    for (var i = 0 ; i < 12; i++) {
    game.roll(10)};
    expect(game.score()).toBe(300);
  });


});
