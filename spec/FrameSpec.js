describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame;
  });

  it('should have default status of inactive', function() {
    expect(frame.status()).toEqual('inactive');
  });
  it('should have default score set to undefined', function() {
    expect(typeof(frame.score())).toEqual('undefined');
  });
  it('should have default rolls array set to empty array', function() {
    expect(frame.rolls()).toEqual([]);
  });

  describe('.add_roll', function() {
    it('should push argument value to rolls array', function() {
      frame.add_roll(5)
      frame.add_roll(2)
      expect(frame.rolls()).toEqual([5, 2]);
    });
    it('should calculateScore if status is complete', function() {
      frame.add_roll(5)
      frame.add_roll(4)
      expect(frame._score).toEqual(9);
    });
  });

  describe('.isInPlay', function() {
    it('should return true if frame has 1 roll under 10', function() {
      frame._score = 7;
      frame._rolls = [7]
      expect(frame.isInPlay()).toEqual(true)
    });
    it('should return false if frame has 1 roll equal to 10', function() {
      frame._score = 10;
      frame._rolls = [10]
      expect(frame.isInPlay()).toEqual(false)
    });
    it('should return false if frame has more than one roll', function() {
      frame._rolls = [1, 2]
      expect(frame.isInPlay()).toEqual(false)
    });
  });

  describe('.calculateScore', function() {
    it('should update score to sum of rolls', function() {
      frame._rolls = [7,2]
      frame.calculateScore()
      expect(frame._score).toEqual(9)
      frame._rolls = [10, 2, 1]
      frame.calculateScore()
      expect(frame._score).toEqual(13)
    });
  });

  describe('.manageStatus', function() {
    it('should do nothing if rolls length is 1', function() {
      frame._status = 'active'
      frame._rolls = [3]
      frame.manageStatus()
      expect(frame._status).toEqual('active')
    });
    it('should set status to complete if rolls length is 2 and rolls sum is under 10', function() {
      frame._status = 'active'
      frame._rolls = [3,4]
      frame.manageStatus()
      expect(frame._status).toEqual('complete')
    });
    it('should do nothing if rolls length is 2 and spare/strike was scored', function() {
      frame._status = 'active'
      frame._rolls = [5,5]
      frame.manageStatus()
      expect(frame._status).toEqual('active')
      frame._rolls = [10,5]
      frame.manageStatus()
      expect(frame._status).toEqual('active')
    });
    it('should set status to complete if rolls length is 3 and spare/strike was scored', function() {
      frame._rolls = [5,5,3]
      frame.manageStatus()
      expect(frame._status).toEqual('complete')
      frame._rolls = [10,5,3]
      frame.manageStatus()
      expect(frame._status).toEqual('complete')
    });
  });
});
