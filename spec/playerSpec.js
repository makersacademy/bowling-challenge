'use strict';

describe('Player', function(){

  let player;

  beforeEach(function(){
    player = new Player('Dave');
  });

  it('has a name', function(){
    expect(player.getName()).toEqual('Dave');
  });

});
