describe('scorecard', function(){

  let score;

  beforeEach(function() {
    score = new ScoreCard;
  })

  describe('initialization', function() {
    it('starts with a score of 0', function() {
      expect(score.frames).toEqual([]);
    })
  }); 

  describe('current', function() {
    it('returns the current frame', function() {
      score.addFrame()
      score.current().roll(5)
      expect(score.current().rolls).toEqual([5])
    })
  });

  describe('last', function() {
    it ('returns the last frame', function() {
      score.addFrame()
      score.current().roll(5)
      score.addFrame()
      score.current().roll(10)
      expect(score.last().isStrike()).toBe(false)
    })
  })

  describe('score', function(){
    it ('calculated the correct score including bonus', function() {
      score.addFrame()
      score.current().roll(10)
      score.addFrame()
      score.current().roll(5)
      score.current().roll(3)
      score.calc_score()
      expect(score.last().score()).toEqual(18)
      score.addFrame()
      score.current().roll(5)
      score.current().roll(3)
      score.calc_score()
      // expect(score.last().score()).toEqual(18)
      expect(score.score).toEqual(26)
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
      expect(f.complete(1)).toBe(true)
    })
    it('states frame is complete on two rolls', function(){
      f.roll(2)
      f.roll(5)
      expect(f.complete(1)).toBe(true)
    })
    it('states final frame is incomplete on 1 strike', function(){
      f.roll(10)
      expect(f.complete(10)).toBe(false)
    })
    it('states final frame is incomplete on 2 strikes', function(){
      f.roll(10)
      f.roll(10)
      expect(f.complete(10)).toBe(false)
    })
    it('states final frame is complete on less than 10 pins', function(){
      f.roll(3)
      f.roll(3)
      expect(f.complete(10)).toBe(true)
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

  xdescribe('bonus', function() {
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
})
