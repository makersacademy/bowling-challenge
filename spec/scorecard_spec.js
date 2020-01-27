describe('scorecard', function(){

  let score = new ScoreCard();

  describe('initialization', function() {
    it('starts with a score of 0', function() {
      expect(score.score).toBe(0);
    })
  }); 

  describe('last', function() {
    it('returns the last frame', function() {
      let b = new Frame()
      b.roll(5)
      b.roll(3)
      score.addFrame(f)
      expect(score.last()).toBe(f)
    })
  })

});

describe('frame', function(){
  let f

  beforeEach(function(){
    f = new Frame;
  })

  describe('initialization', function(){
    it('starts with a score and rollcount of 0', function(){
      expect(f.score()).toEqual(0)
      expect(f.rollCount).toEqual(0)
    })
  })

  describe('roll', function(){
    it('rolls and adds to the score and rollCount', function(){
      f.roll(6)
      expect(f.score()).toBe(6)
      expect(f.rollCount).toBe(1)
    })
  })

  describe('complete', function(){
    it('states frame as complete on strike', function(){
      f.roll(10)
      expect(f.complete()).toBe(true)
    })
    it('states frame is complete on two rolls', function(){
      f.roll(2)
      f.roll(5)
      expect(f.complete()).toBe(true)
    })
  })

  describe('strike/spare', function() {
    it('states the frame was a strike', function() {
      f.roll(10)
      expect(f.isStrike()).toBe(true)
    })
    it('states the frame was a spare', function() {
      f.roll(6)
      f.roll(4)
      expect(f.isSpare()).toBe(true)
    })
  })

  describe('bonus', function() {
    it('states the bonus is 1 for a strike', function() {
      f.roll(10)
      expect(f.bonus()).toBe(1)
    })
    it('states the bonus is 0 for a spare', function() {
      f.roll(6)
      f.roll(4)
      expect(f.bonus()).toBe(0)
    })
  })
});