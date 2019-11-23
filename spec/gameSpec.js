'use strict';

describe ('game', function() {
  var game_object;
  var frame_test;
  var final_frame_test;

  beforeEach(function() {
    game_object = new Game()
  });

  it('loads something into the game object', function() {
    frame_test = new Frame(3,6);
    expect(game_object.loadFrame(frame_test)).toMatch("ok");
  });

 it('takes a full gutter game and returns nil', function(){
   frame_test = new Frame(0,0);
   final_frame_test = new FinalFrame(0,0,0);
   for(let i = 0; i < 9; i++){
    game_object.loadFrame(frame_test);
 }
   game_object.loadFrame(final_frame_test);
   expect(game_object.getGameScore()).toEqual(0);
 })


});
