describe('Frame', function() {

  beforeEach(function(){
    frame = new Frame(1);
  });

  describe('making a new frame object', function() {
    it('has a frame number property which is set when a new frame object is initialized', function() {
      expect(frame.frameNumber).toEqual(1)
    });

    it('has a has a roll one and roll two properties which are equal to null when a new frame object is initialized', function() {
      expect(frame.rollOne).toEqual(null)
      expect(frame.rollTwo).toEqual(null)
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
});
