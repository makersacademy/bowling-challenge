describe('Player',function(){
  var player;

  beforeEach(function(){
    player = new Player();
  });

  it('#points are returned',function(){
    expect(player.points()).toEqual(0);
  });

  xit('notes the points of a strike directly to Scorecard',function(){
    player.notesPinsDown(10);
    expect(player.points()).toEqual()
  });

  xit('notes the number of pins down on Scorecard every two turns', function(){
    player.notesPinsDown(4);
    expect(player.points()).toEqual(0);

    player.notesPinsDown(2);
    expect(player.points()).toEqual(6);
  });

});