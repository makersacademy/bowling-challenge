describe('Card', function() {

  function roundDouble() {}

  beforeEach(function(){
    card = new Card();
    frame1 = new Frame();
    frame2 = new Frame();
  });

  it('stores a frames score', function() {
    frame1.bowl(6)
    frame1.bowl(0)
    card.store(frame1)
    expect(card.frames).toContain(frame1.bowls)
  });

  it('cannot hold more than 10 frames', function() {
    frame1.bowl(1)
    frame1.bowl(1)
    for (i = 0; i < 10; i ++) {
      card.store(frame1)
    }
    expect(card.frames.length).toEqual(10)
    console.log(card.frames.length)
    console.log(card.bonuses)
    console.log(card.isEnd())
    card.store(frame1)
    console.log(card.frames)
    expect(card.frames.length).toEqual(10)
  });

  describe('when a spare or strike frame is stored', function() {
    it('knows to add the next two rolls for a strike', function() {
      frame1.bowl(10)
      card.store(frame1)
      expect(card.bonuses).toEqual([0, 2])
    });

    it('knows to add the next one roll for a spare', function() {
      frame1.bowl(5)
      frame1.bowl(5)
      card.store(frame1)
      expect(card.bonuses).toEqual([0, 1])
    });
  });

  describe('when the previous frame was a spare', function() {
    it('changes the bonuses array', function() {
      frame1.bowl(5)
      frame1.bowl(5)
      card.store(frame1)
      expect(card.bonuses[1]).toEqual(1)
    });
  });

  describe('when the previous frame was a strike', function() {
    it('changes the bonuses array', function() {
      frame1.bowl(10)
      card.store(frame1)
      expect(card.bonuses[1]).toEqual(2)
    });
    
    describe('and the next frame is a strike', function() {
      it('changes the bonuses array', function() {
        frame1.bowl(10)
        card.store(frame1)
        frame2.bowl(10)
        card.store(frame2)
        expect(card.bonuses[0]).toEqual(1)
      });
    });
  });
});
