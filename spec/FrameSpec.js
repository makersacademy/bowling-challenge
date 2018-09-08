describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  it('scores a round correctly', function() {
    frame.add_score(0)
    frame.add_score(0)
    expect(frame.scores).toEqual([0,0])
  });

  it('scores a round correctly', function() {
    frame.add_score(5)
    frame.add_score(4)
    expect(frame.scores).toEqual([5,4])
  });

  it('knows a frame is not over', function() {
    frame.add_score(5)
    expect(frame.isOver).toEqual(false);
  })

  describe('When a split is scored', function() {
    beforeEach(function() {
      frame.add_score(5)
      frame.add_score(5)
    });
    it('scores a round correctly', function() {
      expect(frame.scores).toEqual([5,5])
    });
    it('knows the number of bonus balls', function() {
      expect(frame.bonusBalls).toEqual(1)
    });
    it('knows frame is over', function() {
      expect(frame.isOver).toEqual(true);
    });
  });
  describe('When a strike is scored', function() {
    beforeEach(function() {
      frame.add_score(10)
    });
    it('scores a round correctly', function() {
      expect(frame.scores).toEqual([10,0])
    });
    it('knows the number of bonus balls', function() {
      expect(frame.bonusBalls).toEqual(2)
    });
    it('knows frame is over', function() {
      expect(frame.isOver).toEqual(true);
    });
  });
  describe('Knows when frame is over', function() {
    it('knows not over after 1 ball', function() {
      frame.add_score(5)
      expect(frame.isOver).toEqual(false)
    });
    it('knows is over after 2 balls', function() {
      frame.add_score(5)
      frame.add_score(4)
      expect(frame.isOver).toEqual(true)
    })
  });
});
