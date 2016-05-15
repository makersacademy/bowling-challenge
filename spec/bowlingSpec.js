(function () {
    'use strict';
 }());

 describe('Bowling', function(){

  var game;

  beforeEach(function(){
    game = new Bowling();
  });


  it ('score begins at 0', function(){
    expect(game.score).toEqual(0);
  });

});
