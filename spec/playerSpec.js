'use strict';
// let player = require('../src/player.js');
let player;

describe('Player', function(){

  // let player;
  // let player = require('../src/player.js');

  beforeEach(function(){
    player = new Player('Dave');
  });

  it('has a name', function(){
    expect(player.name).toEqual('Dave');
  });

});
