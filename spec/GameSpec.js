'use strict';

describe('Game', function() {
  var game;
  var frame;
  var frame2;
  var frame3;

  beforeEach(function() {
  game = new Game();
  frame = jasmine.createSpyObj('frame',['rollBallOne', 'rollBallTwo', 'calcScore', 'isStrike', 'isSpare']);
  });

  it('has an empty array of scores at the beginning', function(){
    game.addFrame(frame)
    expect(game.totalsOfFrames()).toEqual([frame]);
  });

  it('doesnt not allow to have more than 10 frames - game is over', function(){
    for (var i=0; i<11; i++) {
      game.addFrame(frame);
    }
    expect(function(){game.addFrame(frame);}).toThrowError('The game is over - no more frames left');
  });

  describe("Score of the game", function(){
    beforeEach(function() {
    frame2 = jasmine.createSpyObj('frame2',['rollBallOne', 'rollBallTwo', 'calcScore', 'isStrike', 'isSpare']);

    frame3 = jasmine.createSpyObj('frame3',['rollBallOne', 'rollBallTwo', 'calcScore', 'isStrike', 'isSpare']);
    });

    it('total count includes bonuses for Strike game', function(){
      game.addFrame(frame);
      game.addFrame(frame2);
      game.addFrame(frame3);
      spyOn(Math,'random').and.returnValue(10);
      frame.isStrike.and.returnValue(true);
      frame.calcScore.and.returnValue(10);
      // spyOn(Math,'random2').and.returnValue(5);
      frame2.calcScore.and.returnValue(5);
      // spyOn(Math,'random3').and.returnValue(5);
      frame3.calcScore.and.returnValue(5);
      expect(game.calcTotal()).toEqual(25);
    });

    // it('total count includes bonuses for Spare game', function(){
    //   game.addFrame(frame);
    //   game.addFrame(frame2);
    //   game.addFrame(frame3);
    //    spyOn(Math,'random').and.returnValue(10);
    //   frame.isStrike.and.returnValue(false);
    //   frame.isSpare.and.returnValue(true);
    //   frame.calcScore.and.returnValue(10);
    //   // spyOn(Math,'random2').and.returnValue(5);
    //   frame2.rollBallOne.and.returnValue(5);
    //   frame3.calcScore.and.returnValue(6);
    //   expect(game.calcTotal()).toEqual(26);
    // });


  });

});
