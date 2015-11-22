describe('Player',function() {
  var player = new Player("Ezzy");

  it('get player name',function() {
    expect(player.getName()).toEqual('Ezzy');
  });
});