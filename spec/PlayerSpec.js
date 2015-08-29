describe('Player',function(){
  var player;

  beforeEach(function(){
    player = new Player();
  });

  it('can return total score',function(){
    expect(player.points()).toEqual(0);
  });
});