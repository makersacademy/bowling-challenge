describe('Player', function(){
  beforeEach(function() {
    player = new Player
      });
  it('can play a frame and see his points', function() {
    player.bowl1(7);
    player.bowl2(2);
    expect(player.points).toEqual(9);
  });
  it('can bowl a strike', function(){
    player.bowl1(10);
    expect(player.points).toEqual(0);
    expect(player.bonus).toEqual(10);
  })
  it('can bowl a spare', function(){
    player.bowl1(2);
    player.bowl2(8);
    expect(player.points).toEqual(2);
    expect(player.bonus).toEqual(8);
  });

  it('cannot bowl twice after a strike', function(){
    player.bowl1(10);
    expect(function(){player.bowl2(1);}).toThrow('Strike, wait for next frame!');
  });
  it('can bowl a strike and a spare', function)
});