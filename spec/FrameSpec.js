describe('Frame', function() {

  beforeEach(function(){
    frame = new Frame(1);
  });

  describe('making a new frame object', function() {
    it('has a frame number property which is set when a new frame object is initialized', function() {
      expect(frame.frameNumber).toEqual(1)
    });

    it('has a has a roll one, roll two and bonus point properties which are equal to null when a new frame object is initialized', function() {
      expect(frame.rollOne).toEqual(null)
      expect(frame.rollTwo).toEqual(null)
      expect(frame.bonus).toEqual(null)
    });
  });

  describe('entering roll scores', function () {
    it('can update the roll one score property', function() {
      frame.rollOneScore(4)
      expect(frame.rollOne).toEqual(4)
    })

    it('can update the roll two score property', function() {
      frame.rollTwoScore(2)
      expect(frame.rollTwo).toEqual(2)
    })
  })

  describe('entering bonus points', function () {
    it('can update the bonus points', function() {
      frame.addBonus(3)
      expect(frame.bonus).toEqual(3)
    })
  })

  describe('calculating total frame score', function () {
    it('is a sum of roll 1, roll 2 and bonus points', function() {
      frame.rollOneScore(5)
      frame.rollTwoScore(5)
      frame.addBonus(4)
      expect(frame.frameScore()).toEqual(14)
    })

    it('is a sum of roll 1, roll 2', function() {
      frame.rollOneScore(5)
      frame.rollTwoScore(4)
      expect(frame.frameScore()).toEqual(9)
    })
  })
});
