describe("Frame", function(){
  var frame;
  var pins;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('has a number of rolls/bowls', function() {
    it('returns a score on the first bowl', function() {
      frame.firstBowl(7);
      expect(frame._details.firstScore).toEqual(7);
    });

    it('returns a score on the second bowl', function() {
      frame.secondBowl(2);
      expect(frame._details.secondScore).toEqual(2);
    });

    it('cannot score more than ten pins on a standard frame', function() {
      frame.firstBowl(5);
      expect(function(){
        frame.secondBowl(6);
      }).toThrowError('Error: You cannot hit more than 10 pins.')
    })
  });

  describe('totals the score of the bowls in the frame', function() {
    it('can add the scores of the two bowls', function() {
      frame.firstBowl(7);
      frame.secondBowl(2);
      expect(frame._details.pins).toEqual(9);
    });
  });

});
