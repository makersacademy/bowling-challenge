'use strict';
// const Player = require('../src/player.js');

describe('Player', function(){

  let player;

  beforeEach(function(){
    player = new Player('Dave');
  });

  it('has a name', function(){
    expect(player.name).toEqual('Dave');
  });

});
