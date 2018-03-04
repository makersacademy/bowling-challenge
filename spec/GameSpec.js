'use strict';

// describe('Thermostat', function() {
//   var thermostat
//
//   beforeEach(function() {
//     thermostat = new Thermostat();
//   });
//
//   it('it starts at 20 degrees', function() {
//     expect(thermostat.temp).toEqual(20);
//   });
// });

describe('Game', function(){
  var game

  beforeEach(function(){
    game = new Game();
  });

  it('starts with an empty array', function(){
    expect(game.frames).toEqual([]);
  });

});
