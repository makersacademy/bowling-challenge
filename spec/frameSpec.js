describe( 'Frame', function() {
  //var frame;
  beforeEach(function() {
    frame = new Frame
  })

  describe('newShot', function(){
    it('adds new shots to the shots array', function() {
      frame.newShot(4)
      expect(frame.shots[0]).toEqual(4)
    })
  })  
  describe('bonusAttributer', function(){
    it('sets strike to true if you get a strike', function() {
      frame.newShot(10);
      frame.bonusAttributer();
      expect(frame.strike).toEqual(true)
      expect(frame.spare).toEqual(false)
    })
    it('sets spare to spare if you get a spare', function() {
     // frame = new Frame
      frame.newShot(5)
      frame.newShot(5)
      frame.bonusAttributer()
      expect(frame.strike).toEqual(false)
      expect(frame.spare).toEqual(true)
    })
  })
  describe('roundGetsBonus', function(){
    it('returns true if its a spare but not a strike', function() {
     // frame = new Frame
      frame.newShot(5)
      frame.newShot(5)
      frame.bonusAttributer()
      expect(frame.roundGetsBonus()).toEqual(true)
    })
    it('returns true if a strike but not a spare', function(){
     // frame = new Frame
      frame.newShot(10);
      frame.bonusAttributer();
      expect(frame.roundGetsBonus()).toEqual(true)
    })
    it('returns false when neither a spare nor a strike', function() {
     // frame = new Frame
      frame.newShot(5)
      frame.newShot(4)
      frame.bonusAttributer()
      expect(frame.roundGetsBonus()).toEqual(false)
    })
  })
  describe('score calculator', function(){
    it('correctly sets a zero score', function(){
     // frame = new Frame
      frame.newShot(0)
      frame.newShot(0)
      frame.frameScoreCalculator();
      expect(frame.score).toEqual(0)
    })
    it('sets this.score to eq correct score when score is present', function(){
     // frame = new Frame
      frame.newShot(5)
      frame.newShot(3)
      frame.frameScoreCalculator();
      expect(frame.score).toEqual(8)
    })
    it('does not change the shots array', function(){
     // frame = new Frame
      frame.newShot(5)
      frame.newShot(3)
      frame.frameScoreCalculator();
      expect(frame.shots).toEqual([5,3])
    })
  })
})