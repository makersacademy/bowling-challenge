describe('Player', function(){
  beforeEach(function() {
    player = new Player
      });
  it('can play a frame and see his points', function() {
    player.bowl1(7);
    player.bowl2(2);
    expect(player.scorecard[0]).toEqual(9);
  });
  it('can bowl a strike', function(){
    player.bowl1(10);
    expect(player.scorecard[0]).toEqual(0);
    expect(player.bonus).toEqual(10);
  })
  it('can bowl a spare', function(){
    player.bowl1(2);
    player.bowl2(8);
    expect(player.scorecard[0]).toEqual(0);
    expect(player.bonus).toEqual(10);
  });

  it('cannot bowl twice after a strike', function(){
    player.bowl1(10);
    expect(function(){player.bowl2(1);}).toThrow('Strike, wait for next frame!');
  });
  it('can bowl a strike and a spare', function(){
    player.bowl1(10);
    player.bowl1(8);
    player.bowl2(2);
    expect(player.scorecard[0]).toEqual(20);
  });
  it('can bowl 4 strikes in a row', function(){
    for (var i = 0; i < 4; i++) {
      player.bowl1(10);
    };
    expect(player.scorecard[1]).toEqual(60);
  });
   it('can bowl 6 strikes in a row', function(){
    for (var i = 0; i < 6; i++) {
      player.bowl1(10);
    };
    expect(player.scorecard[3]).toEqual(120);
  });
});