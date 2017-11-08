'use strict';


describe ('Unit tests: Player', function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  // describe('#play', function() {
  //   it('can create a new player', function() {
  //     expect(player.play).not.toBeUndefined()
  //   });
  // })

  describe('#roll', function() {
    it('roll is defined', function() {
      expect(player.roll).not.toBeUndefined()
    });
  })

});
