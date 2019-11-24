'use strict';

describe ('Game object', function() {
  var game_object;
  var frame_test;
  var final_frame_test;
  var frame_spare;
  var frame_strike;

  beforeEach(function() {
        game_object = new Game();
  });

  it('loads something into the game object', function() {
    frame_test = new Frame(3,1);
    expect(game_object.loadFrame(frame_test)).toMatch("ok");
  });

  it('takes a game of 4/5 and returns 90', function(){
    frame_test = new Frame(4,5);
    final_frame_test = new FinalFrame(4,5,0);
    for(let i = 0; i < 9; i++){
      game_object.loadFrame(frame_test);
    }
    game_object.loadFrame(final_frame_test);
    expect(game_object.getGameScore()).toEqual(90);
    });

    it('throws an error if we try and load the game with more than \
    10 frames', function() {
      frame_test = new Frame(1,1);
      for(let i = 0; i < 10; i++){
        game_object.loadFrame(frame_test);
      }
      expect(function(){game_object.loadFrame(frame_test);}).toThrow("Array \
full");
    })

  it('takes a full gutter game and returns nil', function(){
    frame_test = new Frame(0,0);
    final_frame_test = new FinalFrame(0,0,0);
    for(let i = 0; i < 9; i++){
      game_object.loadFrame(frame_test);
    }
    game_object.loadFrame(final_frame_test);
    expect(game_object.getGameScore()).toEqual(0);
  });

 it('takes a game with two spares and returns 102', function(){
   frame_spare = new Frame(6,4);
   frame_test = new Frame(4,5);
   final_frame_test = new FinalFrame(4,5,0);
   game_object.loadFrame(frame_spare);
   game_object.loadFrame(frame_spare);
   for(let i = 2; i < 9; i++){
     game_object.loadFrame(frame_test);
   }
   game_object.loadFrame(final_frame_test);
   expect(game_object.getGameScore()).toEqual(102);
 });

 it('takes a game with 9 spares and one 3,3 and returns 147', function(){
   frame_spare = new Frame(6,4);
   final_frame_test = new FinalFrame(3,3,0);
   for(let i = 0; i < 9; i++){
     game_object.loadFrame(frame_spare);
   }
   game_object.loadFrame(final_frame_test);
   expect(game_object.getGameScore()).toEqual(147);
 });
 it('takes a game with 10 spares and one 3 and returns 157', function(){
   frame_spare = new Frame(6,4);
   final_frame_test = new FinalFrame(6,4,3);
   for(let i = 0; i < 9; i++){
     game_object.loadFrame(frame_spare);
   }
   game_object.loadFrame(final_frame_test);
   expect(game_object.getGameScore()).toEqual(157);
 })
 it('takes a game with 9 strikes plus 3 more and returns 300', function(){
   frame_strike = new Frame(10,0)
   final_frame_test = new FinalFrame(10,10,10);
   for(let i = 0; i < 9; i++){
     game_object.loadFrame(frame_strike);
   }
   game_object.loadFrame(final_frame_test);
   expect(game_object.getGameScore()).toEqual(300);
 })
 it('takes a game with 8 strikes plus 3 and returns 250', function(){
   frame_strike = new Frame(10,0)
   frame_test = new Frame(0,0)
   game_object.loadFrame(frame_strike);
   game_object.loadFrame(frame_test);
   final_frame_test = new FinalFrame(10,10,10);
   for(let i = 2; i < 9; i++){
     game_object.loadFrame(frame_strike);
   }
   game_object.loadFrame(final_frame_test);
   expect(game_object.getGameScore()).toEqual(250);
 })
});
