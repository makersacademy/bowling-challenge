describe('frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('should start with 0 for roll 1', function() {
    expect(frame.roll_1()).toEqual(0);
  })
  it('should start with 0 for roll 2', function() {
    expect(frame.roll_2()).toEqual(0);
  })
  it('should start with 0 for bonus roll', function() {
    expect(frame.bonus_Roll()).toEqual(0);
  })
  it('should start with 0 for frame score', function() {
    expect(frame.frame_Score()).toEqual(0);
  })
  it('should start with 1 for frame number', function() {
    expect(frame.Number()).toEqual(1);
  })

  it('goes to the next frame', function() {
    frame.Next();
    expect(frame.Number()).toEqual(2);
  })

  it('tells us if it is a strike', function() {
    frame.roll1 = 10;
    expect(frame.isStrike()).toEqual(true);
  })

  it('tells us if it is not a strike', function() {
    expect(frame.isStrike()).toEqual(false);
  })

  it('tells us if it is a spare', function() {
    frame.frame_score  = 10;
    expect(frame.isSpare()).toEqual(true);
  })
  it('tells us if it is not a strike', function() {
    expect(frame.isSpare()).toEqual(false);
  })

  it('adds your score to the roll1', function() {
    frame.AddRoll1(3);
    expect(frame.roll_1()).toEqual(3);
  })

  it('adds your score to the frame score', function() {
    frame.AddRoll1(3);
    expect(frame.frame_Score()).toEqual(3);
  })

  it('adds your score to the roll1', function() {
    frame.AddRoll2(4);
    expect(frame.roll_2()).toEqual(4);
  })

  it('adds your score to the frame score', function() {
    frame.AddRoll1(3);
    frame.AddRoll2(4);
    expect(frame.frame_Score()).toEqual(7);
  })
});
