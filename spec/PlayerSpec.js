describe('Player', function(){

  var player;

  beforeEach(function(){
    player = new Player('Paul');
  });

  it('can be given a name on creation', function(){
    expect(player.nameGiven).toEqual('Paul')
  });

});
