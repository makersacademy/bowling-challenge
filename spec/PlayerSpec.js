'use strict';

describe('Player', function(){
  var player;
  var playername = "John"

  beforeEach(function(){
    player = new Player(playername)
  });

  it('has a name', function(){
    expect(player.getName()).toEqual(playername);
  });
});