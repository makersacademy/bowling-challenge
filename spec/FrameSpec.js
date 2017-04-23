describe('Frame', function() {
  var frame;
  var pins;

  beforeEach(function() {
    pins = jasmine.createSpyObj('pins', ['get', 'update', 'reset'])
    frame = new Frame(pins);
  });

  it('initializes with an empty array', function() {
    expect(frame.scores).toEqual([]);
  });
  it('stores the pins', function() {
    expect(frame.pins).toEqual(pins);
  });
  // it('does not have an initial strike', function() {
  //   expect(frame.strike).toEqual(false);
  // });

  describe('saveScore', function() {
    it('saves the score of the first round', function() {
      frame.saveScore(5);
      expect(frame.scores).toContain(5);
    });
    it('updates the count of the remaining pins', function() {
      frame.saveScore(4);
      expect(pins.update).toHaveBeenCalledWith(4);
    });
  });

  describe('isComplete', function() {
    it('returns false if no scores were added', function() {
      expect(frame.isComplete()).toEqual(false);
    });
    it('returns false if there is only one score not equal to 10', function() {
      frame.saveScore(5);
      expect(frame.isComplete()).toEqual(false);
    });
    it('returns true if there is only one score equal to 10', function() {
      frame.saveScore(10);
      expect(frame.isComplete()).toEqual(true);
    });
    it('returns true if two scores were added', function() {
      frame.saveScore(5);
      frame.saveScore(3);
      expect(frame.isComplete()).toEqual(true);
    });
  });
  describe('hasBonus', function() {
    it('returns strike if first score is 10', function() {
      frame.saveScore(10);
      expect(frame.hasBonus()).toEqual('strike');
    });
    it('returns spare if second score is 10', function() {
      frame.saveScore(0);
      frame.saveScore(10);
      expect(frame.hasBonus()).toEqual('spare');
    });
    it('returns spare if the combined score is 10', function() {
      frame.saveScore(5);
      frame.saveScore(5);
      expect(frame.hasBonus()).toEqual('spare');
    });
  });
});
