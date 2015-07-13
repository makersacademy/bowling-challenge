describe('Bowling', function (){
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts at 0 points', function() {
    expect(bowling.score).toBe(0);
  });

  it('starts at 0 frames', function() {
    expect(bowling.turns).toBe(0);
  });

  it('increases the total score for a roll by the roll amount', function() {
    bowling.roll(6);
    expect(bowling.score).toBe(6);
  });

  it('adds a frame after the first roll', function() {
    bowling.roll(6);
    expect(bowling.turns).toBe(1);
  });

  it('only allows a maximum roll of a strike', function() {
    expect( function(){ bowling.roll("11"); } ).toThrow(new Error("invalid roll"));
  });

  it('only allows a minimum roll of a gutter ball', function() {
    expect( function(){ bowling.roll("-1"); } ).toThrow(new Error("invalid roll"));
  });

  it('only allows two turns in one frame to add up to 10', function() {
    bowling.roll(5);
    expect( function(){ bowling.roll("6"); } ).toThrow(new Error("invalid roll"));
  });
});
