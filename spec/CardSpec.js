describe('Card', function() {

  function roundDouble() {}

  beforeEach(function(){
    card = new Card();
    frame = new Frame();
  });

  it('stores a frames score', function() {
    frame.bowl(6)
    frame.bowl(0)
    card.store(frame)
    expect(card.frames).toContain(frame.bowls)
  });

  describe('when a spare or strike frame is stored', function() {
    it('knows to add the next two rolls for a strike', function() {
      frame.bowl(10)
      card.store(frame)
      expect(card.bonuses).toContain(2)
    });

    it('knows to add the next one roll for a spare', function() {
      frame.bowl(5)
      frame.bowl(5)
      card.store(frame)
      expect(card.bonuses).toContain(1)
    });
  });
  
});
