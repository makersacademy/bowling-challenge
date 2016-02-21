describe('Player', function() {
  var player = new Player('Rufus');

  describe('#name', function(){
    it('returns player name', function() {
      expect(player.name).toEqual('Rufus');
    });
  });


});
