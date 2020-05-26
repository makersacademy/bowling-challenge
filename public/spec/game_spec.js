'use strict';

describe('game', function() {

  var game, frame; 

  beforeEach(function(){
    game = new Game();
    game.create(Frame);
  });

  it('should be able to create a set of 10 frames', function() {
    expect(game.frames.length).toEqual(10);
  });

  it('should be instantiated with no points', function(){
    expect(game.score()).toEqual(0);
  });


  it('should not be able to create more than 10 frames', function(){
    expect( function(){ game.create(Frame); } ).toThrow(new Error("No more frames available, create a new game to play again."));
  });

  it('should be able to detemine the current score after shots', function(){
    game.frames[0].receiveShot(5);
    game.frames[0].receiveShot(3);
    game.frames[1].receiveShot(3);
    game.frames[1].receiveShot(3);
    expect(game.score()).toEqual(14);
  });


  it('should update a frames score if it was a spare', function() {
    game.frames[0].receiveShot(5);
    game.frames[0].receiveShot(5);
    game.frames[1].receiveShot(6);
    game.frames[1].receiveShot(3);
    game.evaluateScores();
    expect(game.frames[0].score).toEqual(16);
  });

  it('should update a frames score if it was a strike', function() {
    game.frames[0].receiveShot(10);
    game.frames[1].receiveShot(6);
    game.frames[1].receiveShot(3);
    game.evaluateScores();
    expect(game.frames[0].score).toEqual(19);
  });

  it('should update a frames score correctly with two strikes in a row', function() {
    game.frames[0].receiveShot(10);
    game.frames[1].receiveShot(10);
    game.frames[2].receiveShot(10);
    game.evaluateScores();
    expect(game.frames[0].score).toEqual(30);
  });

  // it('should deal with a strike in frame 9 and 10 correctly', function() {
  //   game.frames[8].receiveShot(10);
  //   game.frames[9].receiveShot(10);
  //   game.frames[9].receiveShot(5);
  //   game.frames[9].receiveShot(5);
  //   game.evaluateScores();
  //   expect(game.frames[8].score).toEqual(25);
  // });

  // it('should deal with a spare in frame 10 correctly', function() {
  //   game.frames[9].receiveShot(5);
  //   game.frames[9].receiveShot(5);
  //   game.frames[9].receiveShot(6);
  //   game.evaluateScores();
  //   expect(game.frames[9].score).toEqual(16);
  // });

  // it('should deal with a frame 10 correctly', function() {
  //   game.frames[9].receiveShot(5);
  //   game.frames[9].receiveShot(3);
  //   game.evaluateScores();
  //   expect(game.frames[9].score).toEqual(8);
  // });

  // it('should work for a full game', function() {
  //   game.frames[0].receiveShot(1);
  //   game.frames[0].receiveShot(4);
  //   game.frames[1].receiveShot(4);
  //   game.frames[1].receiveShot(5);
  //   game.frames[2].receiveShot(6);
  //   game.frames[2].receiveShot(4);
  //   game.frames[3].receiveShot(5);
  //   game.frames[3].receiveShot(5);
  //   game.frames[4].receiveShot(10);
  //   game.frames[5].receiveShot(0);
  //   game.frames[5].receiveShot(1);
  //   game.frames[6].receiveShot(7);
  //   game.frames[6].receiveShot(3);
  //   game.frames[7].receiveShot(6);
  //   game.frames[7].receiveShot(4);
  //   game.frames[8].receiveShot(10);
  //   game.frames[9].receiveShot(2);
  //   game.frames[9].receiveShot(8);
  //   game.frames[9].receiveShot(6);
  //   game.evaluateScores();
  //   expect(game.score()).toEqual(133);
  // });
  
  // it('should work for a gutter game', function() {
  //   game.frames[0].receiveShot(0);
  //   game.frames[0].receiveShot(0);
  //   game.frames[1].receiveShot(0);
  //   game.frames[1].receiveShot(0);
  //   game.frames[2].receiveShot(0);
  //   game.frames[2].receiveShot(0);
  //   game.frames[3].receiveShot(0);
  //   game.frames[3].receiveShot(0);
  //   game.frames[4].receiveShot(0);
  //   game.frames[4].receiveShot(0);
  //   game.frames[5].receiveShot(0);
  //   game.frames[5].receiveShot(0);
  //   game.frames[6].receiveShot(0);
  //   game.frames[6].receiveShot(0);
  //   game.frames[7].receiveShot(0);
  //   game.frames[7].receiveShot(0);
  //   game.frames[8].receiveShot(0);
  //   game.frames[8].receiveShot(0);
  //   game.frames[9].receiveShot(0);
  //   game.frames[9].receiveShot(0);
  //   game.evaluateScores();
  //   expect(game.score()).toEqual(0);
  // });

  // it('should work for a perfect game', function() {
  //   game.frames[0].receiveShot(10);
  //   game.frames[1].receiveShot(10);
  //   game.frames[2].receiveShot(10);
  //   game.frames[3].receiveShot(10);
  //   game.frames[4].receiveShot(10);
  //   game.frames[5].receiveShot(10);
  //   game.frames[6].receiveShot(10);
  //   game.frames[7].receiveShot(10);
  //   game.frames[8].receiveShot(10);
  //   game.frames[9].receiveShot(10);
  //   game.frames[9].receiveShot(10);
  //   game.frames[9].receiveShot(10);
  //   game.evaluateScores();
  //   expect(game.score()).toEqual(300);
  // });

});