'use strict';

describe("BowlingGame", function() {
var game;

  beforeEach(function() {

    game = new BowlingGame();

    game.framesArray = [
    game.frame_one = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished']),
    game.frame_two = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished']),
    game.frame_three = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished']),
    game.frame_four = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished']),
    game.frame_five = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished']),
    game.frame_six = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished']),
    game.frame_seven = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished']),
    game.frame_eight = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished']),
    game.frame_nine = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished']),
    game.frame_ten = jasmine.createSpyObj('BowlingFrame',['first_ball', 'second_ball', 'current_ball', 'addScore', 'isFinished'])
    ]
    game.currentFrame = game.framesArray[game.currentFrameCounter];

  });

  describe("when starting a game", function(){

    it('should start with a total score of 0', function(){
      expect(game.totalScore).toEqual(0)
    });

    it("should know that it's on the first frame", function(){
      expect(game.currentFrame).toEqual(game.frame_one);
    });

    it("should start with an array of 10 frames", function(){
      expect(game.framesArray.length).toEqual(10);
    });

  });

  describe("when starting a frame", function(){

    it('should be able to add a score of 3 to frame one', function(){
      game.frame_one.isFinished = false;
      game.takeShot(3);
      expect(game.frame_one.addScore).toHaveBeenCalledWith(3);
    });

    it('should be able to move on to the next frame when game is finished', function(){
      game.frame_one.isFinished = true;
      game.takeShot(3);
      expect(game.currentFrame).toEqual(game.frame_two);
    });

  });

});
