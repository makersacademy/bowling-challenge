describe('player', function(){
  var player;

  beforeEach(function(){
    player = new Player('Alexis');
  })

  it('remember their name', function() {
    expect(player.name).toEqual('Alexis')
  })

  it('takes score', function(){
    player.score(5)
    expect(player.total).toEqual(5);
  })

  it('sums up scores after several rolls', function(){
    player.score(5)
    player.score(10)
    player.score(1)
    expect(player.total).toEqual(16);
  })
})