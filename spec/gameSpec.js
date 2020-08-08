'use strict';
describe('Game class', function(){
  var game;
  var frame1;
  var frame2;
  var frame3;
  beforeEach(function(){
    game = new Game();
    frame1 = jasmine.createSpyObj('frame1',['pointsFirstRoll', 'pointsSecondRoll', 'totalFrameScore']);
    frame2 = jasmine.createSpyObj('frame2',['pointsFirstRoll', 'pointsSecondRoll']);
    frame3 = jasmine.createSpyObj('frame3',['pointsFirstRoll', 'pointsSecondRoll']);
  });
  it('has an array that contains the game frames', function(){
    expect(game.gameFrames()).toEqual([]);
  });
  it('includes multiple frames in the gameFrames array', function(){
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    expect(game.gameFrames()).toEqual([frame1, frame2, frame3]);
  });

  it('updates current frame', function () {
    game.addFrame(frame1);
    expect(game.currentFrame).toEqual(1);
    game.addFrame(frame2);
    expect(game.currentFrame).toEqual(2);
  });
  
  it('does not allow to add more than 10 frames', function(){
    for(var i=0; i<11; i++) {
      game.addFrame(frame1);
    }
    expect(game.gameFrames().length).toEqual(10);
  });

  describe('has an array that contains all the single frames points', function(){
    it('starts as an empty array', function(){
      expect(game.framesScores()).toEqual([]);
    });
  //   it('gets populated using getFramesScores function', function(){
  //     spyOn('frame1', "totalFrameScore").and.returnValue(10);
  //     for(var i=0; i<3; i++) {
  //       game.addFrame(frame1);
  //     }
  //     game.getFramesScores();
  //     expect(game.framesScores()).toEqual([10, 10, 10]);
  //   });
  });

  // CHECK HOW TO STUB IN UNIT TEST

});
