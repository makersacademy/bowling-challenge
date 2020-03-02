describe("Player", function() {
  it('player should have a name', function(){
    var player = new Player('John');
    expect(player.name).toEqual('John')
  });
});
