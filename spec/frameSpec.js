describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#firstBowlPins', function() {
    it('should save the score of bowling1', function() {
      frame.firstBowlPins(5)
      expect(frame.first).toEqual(5)
    })
  })

  describe('#secondBowlPins', function(){
    it('should save the score of bowling2', function() {
      frame.firstBowlPins(5)
      frame.secondBowlPins(3)
      expect(frame.second).toEqual(3)
    })
    
    it('should through an error if frame is complete', function(){
      frame.firstBowlPins(5)
      frame.secondBowlPins(3);
            console.log(frame.isComplete())
      expect(function(){frame.secondBowlPins(5)}).toThrow('this frame is complete please start next one!');
    })

    it ('should through an error if first pin is not set', function() {
      expect(function(){frame.secondBowlPins(4)}).toThrow('Please throw first bowl')
    })
  })

  describe('#isStrike', function() {
    it('should know a strike', function() {
      frame.firstBowlPins(10)
      expect(frame.strike).toEqual(true)
    })

    it('should mark a frame as complete', function(){
      frame.firstBowlPins(10)
      expect(frame.isComplete()).toEqual(true)
    })

    it('should throw error if strike, and second pin is added', function(){
      frame.firstBowlPins(10)
      expect(function(){frame.secondBowlPins(5)}).toThrow('this frame is complete please start next one!')
    })
  })

  describe('#isSpare', function(){
    it('should know a spare', function() {
      frame.firstBowlPins(4)
      frame.secondBowlPins(6)
      expect(frame.spare).toEqual(true)
    })
  })

  describe('#score', function(){
    it('should correctly calculate a spare', function(){
      this.spare=true
      frame.bonus(5)
      frame.firstBowlPins(4)
      frame.secondBowlPins(6)
      expect(frame.totalScore()).toEqual(15)
    })

    it('should correctly calculate a strike', function(){
      this.strike=true
      frame.bonus(16)
      frame.firstBowlPins(10)
      expect(frame.totalScore()).toEqual(26)
    })
  })
})
