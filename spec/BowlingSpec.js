describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling(Frame);
  });

  it('should have ten frames', function() {
    expect(bowling.frames.length).toEqual(10);
  })

  it('updates the frame when a ball is bowled', function() {
    bowling.bowl(7);
    expect(bowling.frames[0].firstBowl).toEqual(7);
  });

  it('knows at which frame the game is', function() {
    bowling.bowl(7);
    bowling.bowl(1);
    expect(bowling.currentFrame).toEqual(1);
  });

  it('stores the score of each frame when there are no spares or strikes', function() {
    for(var i=0; i < 10; i++){
      bowling.bowl(7);
      bowling.bowl(1);
    };
    expect(bowling.totals).toEqual([8, 8, 8, 8, 8, 8, 8, 8, 8, 8]);
  });

  it('stores the total when there are no spares or strikes', function() {
    for(var i=0; i < 10; i++){
      bowling.bowl(7);
      bowling.bowl(1);
    };
    expect(bowling.currentTotal()).toEqual(80);
  });

  it('can have a perfect game', function() {
    for(var i=0; i < 12; i++){
      bowling.bowl(10);
    };
    expect(bowling.currentTotal()).toEqual(300);
  });
});