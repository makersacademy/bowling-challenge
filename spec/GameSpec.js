'use strict';

describe('Game', function(){

  var frame = jasmine.createSpy('frame');
  var game = new Game(frame);  
  var game2 = new Game;

  it('is initialized with an array of 10 empty frames', function(){
    var testArray = [];
    for(var i = 0; i <= 9; i++) {testArray.push(frame) };
    expect(game.frames).toEqual(testArray);
  });

 

});