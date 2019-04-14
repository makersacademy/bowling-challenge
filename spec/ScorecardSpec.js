describe('Scorecard', function() {

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  it('should have frames set to empty array by default', function() {
    expect(scorecard.frames).toEqual([]);
  });
  it('should have frameIndex set to 0 by default', function() {
    expect(scorecard.frameIndex).toEqual(0);
  });

  describe('.startGame', function() {
    it('should push 10 frames into frames array', function() {
      scorecard.startGame()
      expect(scorecard.frames.length).toEqual(10)
    });
    it('should set first frame status to active', function() {
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      expect(Frame.prototype.changeStatus).toHaveBeenCalledWith('active');
      expect(Frame.prototype.changeStatus).toHaveBeenCalledTimes(1);
    });
  });

  describe('.roll', function() {
    it('should call add_roll on all Frames with status set to active', function() {
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      spyOn(Frame.prototype, 'status').and.returnValue('active');
      spyOn(Frame.prototype, 'add_roll');
      scorecard.roll(4)
      expect(Frame.prototype.add_roll).toHaveBeenCalledTimes(10);
      expect(Frame.prototype.add_roll).toHaveBeenCalledWith(4);
    });
    it('should not call add_roll on Frames if status not active', function() {
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      spyOn(Frame.prototype, 'status').and.returnValue('inactive');
      spyOn(Frame.prototype, 'add_roll');
      scorecard.roll(4)
      expect(Frame.prototype.add_roll).toHaveBeenCalledTimes(0);
    });
  });

  describe('.manageFrame', function() {
    it('should increment frameIndex when the current frame ends', function() {
      spyOn(Frame.prototype, 'changeStatus');
      spyOn(Frame.prototype, 'isInPlay').and.returnValue(false);
      scorecard.startGame();
      scorecard.manageFrame()
      expect(scorecard.frameIndex).toEqual(1)
    });
    it('should not increment frameIndex when the current frame is ongoing', function() {
      spyOn(Frame.prototype, 'changeStatus');
      spyOn(Frame.prototype, 'isInPlay').and.returnValue(true);
      scorecard.startGame();
      scorecard.manageFrame()
      expect(scorecard.frameIndex).toEqual(0)
    });
    it('should change next frame status to active when the current frame ends', function() {
      spyOn(Frame.prototype, 'changeStatus');
      spyOn(Frame.prototype, 'isInPlay').and.returnValue(false);
      scorecard.startGame();
      scorecard.manageFrame()
      expect(Frame.prototype.changeStatus).toHaveBeenCalledWith('active');
      expect(Frame.prototype.changeStatus).toHaveBeenCalledTimes(2); // Once in startGame and once in mangageFrame
    });
  });
  describe('.isGameOver', function() {
    it('should return false if game ongoing', function() {
      spyOn(Frame.prototype, 'status').and.returnValue('inactive');
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      expect(scorecard.isGameOver()).toEqual(false)
    });
    it('should return true if game finished', function() {
      spyOn(Frame.prototype, 'status').and.returnValue('complete');
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      expect(scorecard.isGameOver()).toEqual(true)
    });
  });
  describe('.calculateFrameScores', function() {
    it('should push a running total to frameScores for each completed frame', function() {
      spyOn(Frame.prototype, 'status').and.returnValue('complete');
      spyOn(Frame.prototype, 'changeStatus');
      spyOn(Frame.prototype, 'score').and.returnValue(4);
      scorecard.startGame();
      scorecard.calculateFrameScores();
      expect(scorecard.frameScores).toEqual([4,8,12,16,20,24,28,32,36,40])
    });
  });
  describe('.isRollValid', function() {
    it('should return false if roll > 10', function() {
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      expect(scorecard.isRollValid(11)).toEqual(false)
    });
    it('should return false if sum of two rolls > 10', function() {
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      spyOn(Frame.prototype, 'rolls').and.returnValue([4]);
      expect(scorecard.isRollValid(7)).toEqual(false)
    });
    it('should return true if sum of two rolls <= 10', function() {
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      spyOn(Frame.prototype, 'rolls').and.returnValue([4]);
      expect(scorecard.isRollValid(6)).toEqual(true)
    });
    it('should return true if first roll is smaller than 10', function() {
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      spyOn(Frame.prototype, 'rolls').and.returnValue([]);
      expect(scorecard.isRollValid(6)).toEqual(true)
    });
    it('should return true if first roll is 10', function() {
      spyOn(Frame.prototype, 'changeStatus');
      scorecard.startGame();
      spyOn(Frame.prototype, 'rolls').and.returnValue([]);
      expect(scorecard.isRollValid(10)).toEqual(true)
    });
    it('should return false if roll is < 0', function() {
      expect(scorecard.isRollValid(-1)).toEqual(false)
    });
  });
});
