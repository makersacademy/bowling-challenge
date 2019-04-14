describe('Game', function() {
  beforeEach(function() {
    game = new Game;
  })
  describe('.roll', function() {
    it('should call addRoll on current frame when called', function() {
      spyOn(Frame.prototype, 'addRoll')
      game.roll(0);
      expect(Frame.prototype.addRoll).toHaveBeenCalledWith(0, 1)
    });
  });

  describe('.manageFrame', function() {
    it('should set isInPlay to false if isGameOver is true', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3, 3]);
      for(i = 1; i < 10; i ++) { game.frames.push(new Frame) }
      game.manageFrame()
      expect(game.isInPlay).toEqual(false);
    });
    it('should add new frame to frames array if isGameOver is false and current frame is over', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3, 3]);
      game.manageFrame()
      expect(game.frames.length).toEqual(2);
    });
    it('should call calcBonus on currentFrame if isGameOver is false and current frame is over', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3, 3]);
      spyOn(Frame.prototype, 'calcBonus')
      game.roll(3);
      game.roll(2);
      expect(Frame.prototype.calcBonus).toHaveBeenCalled();
    });
    it('should call addBonus if isGameOver is false and current frame is over', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3, 3]);
      spyOn(Frame.prototype, 'calcBonus')
      spyOn(Game.prototype, 'addBonus')
      game.roll(3);
      game.roll(2);
      expect(Game.prototype.addBonus).toHaveBeenCalled();
    });
  });
  describe('.isFrameOver', function() {
    it('should show false when only 1 roll and not strike', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3]);
      expect(game.isFrameOver()).toEqual(false)
    });
    it('should show true when 2 rolls completed', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3, 3]);
      expect(game.isFrameOver()).toEqual(true)
    });
    it('should show true when strike scored', function() {
      spyOn(Frame.prototype, 'score').and.returnValue(10);
      expect(game.isFrameOver()).toEqual(true)
    });
  });

  describe('.isGameOver', function() {
    it('should show false when game is in play', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3]);
      expect(game.isGameOver()).toEqual(false);
    });
    it('should show true after 10 completed frames', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3, 3]);
      for(i = 1; i < 10; i ++) { game.frames.push(new Frame) }
      expect(game.isGameOver()).toEqual(true);
    });
  });

  describe('.currentFrame', function() {
    it('should show last frame in frames array', function() {
      game.frames = [1, 2, 3];
      expect(game.currentFrame()).toEqual(3);
    });
  });

  describe('.lastFrame', function() {
    it('should show last frame in frames array', function() {
      game.frames = [1, 2, 3];
      expect(game.lastFrame()).toEqual(2);
    });
  });

  describe('.totalScore', function() {
    it('should show total score of all frames bowled so far', function() {
      spyOn(Frame.prototype, 'score').and.returnValue(3);
      game.roll(1)
      game.roll(2)
      game.roll(3)
      expect(game.totalScore()).toEqual(6);
    });
  });

  describe('.addBonus', function() {
    it('should call addToScore on previous frame if previous frame has bonus = spare', function() {
      var frame1 = jasmine.createSpyObj(Frame, {
        'bonus': 'spare',
        'addToScore': ''
      });
      var frame2 = jasmine.createSpyObj(Frame, {
        'rolls': [5, 4]
      });
      game.frames = [frame1, frame2];
      game.addBonus();
      expect(frame1.addToScore).toHaveBeenCalledWith(5);
    });
    it('should not call addToScore on previous frame if previous frame has bonus = none', function() {
      var frame1 = jasmine.createSpyObj(Frame, {
        'bonus': 'none',
        'addToScore': ''
      });
      var frame2 = jasmine.createSpyObj(Frame, {
        'rolls': [5, 4]
      });
      game.frames = [frame1, frame2];
      game.addBonus();
      expect(frame1.addToScore).not.toHaveBeenCalled();
    });
    it('should do nothing when there is no previous frame', function() {
      var frame1 = jasmine.createSpyObj(Frame, {
        'bonus': 'none',
        'addToScore': ''
      });
      game.frames = [frame1];
      game.addBonus();
      expect(frame1.bonus).not.toHaveBeenCalled();
    });
    it('should call addToScore on previous frame if previous frame has bonus = strike', function() {
      var frame1 = jasmine.createSpyObj(Frame, {
        'bonus': 'strike',
        'addToScore': ''
      });
      var frame2 = jasmine.createSpyObj(Frame, {
        'score': 9
      });
      game.frames = [frame1, frame2];
      game.addBonus();
      expect(frame1.addToScore).toHaveBeenCalledWith(9);
    });
  });

  describe('.addChainStrikeBonus', function() {
    it('should call addToScore on two frames back if previous two frames have bonus = strike', function() {
      var frame1 = jasmine.createSpyObj(Frame, {
        'bonus': 'strike',
        'addToScore': ''
      });
      var frame2 = jasmine.createSpyObj(Frame, {
        'bonus': 'strike'
      });
      var frame3 = jasmine.createSpyObj(Frame, {
        'rolls': [4, 5]
      });
      game.frames = [frame1, frame2, frame3];
      game.addChainStrikeBonus();
      expect(frame1.addToScore).toHaveBeenCalledWith(4);
    });
    it('should not call addToScore on two frames back if previous frame has bonus = none/spare', function() {
      var frame1 = jasmine.createSpyObj(Frame, {
        'bonus': 'strike',
        'addToScore': ''
      });
      var frame2 = jasmine.createSpyObj(Frame, {
        'bonus': 'spare'
      });
      var frame3 = jasmine.createSpyObj(Frame, {
        'rolls': [4, 5]
      });
      game.frames = [frame1, frame2, frame3];
      game.addChainStrikeBonus();
      expect(frame1.addToScore).not.toHaveBeenCalled();
    });
    it('should do nothing when only two frames exist', function() {
      var frame1 = jasmine.createSpyObj(Frame, {
        'bonus': 'strike',
      });
      var frame2 = jasmine.createSpyObj(Frame, {
        'bonus': 'spare'
      });
      game.frames = [frame1, frame2];
      game.addChainStrikeBonus();
      expect(frame1.bonus).not.toHaveBeenCalled();
    });
  });

  describe('.manageFinalFrame', function() {
    it('should set isInPlay to false when currentFrame has 2 rolls which sum to < 10 ', function() {
      var frame1 = jasmine.createSpyObj(Frame, {
        'bonus': 'none',
      });
      var frame2 = jasmine.createSpyObj(Frame, {
        'bonus': 'none',
        'rolls': [3, 3],
        'score': 6
      });
      game.frames = [frame1, frame2];
      game.manageFinalFrame();
      expect(game.isInPlay).toEqual(false);
    });
  });
});
