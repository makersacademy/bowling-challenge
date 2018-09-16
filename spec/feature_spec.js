describe('In a game of bowling', function() {
  beforeEach(function() {
    card = new Card()
  })

  beforeEach(function() {
    spare_frame = new Frame()
    spare_frame.bowl(5)
    spare_frame.bowl(5)
    frame = new Frame()
    frame.bowl(3)
    frame.bowl(3)
  });
  describe('when the previous frame is a strike', function() {
    it('adds the next roll to its score', function() {
      card.store(spare_frame)
      card.store(frame)
      expect(card.frames[0][3]).toEqual(3)
    });
  });
});


