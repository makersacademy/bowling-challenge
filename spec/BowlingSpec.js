describe('Bowling', function (){
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts at 0 points', function() {
    expect(bowling.score).toBe(0);
  });

  it('starts at 0 frames', function() {
    expect(bowling.bowlingFrames[0][0]).toBe(null);
  });

  it('increases the total score for a roll by the roll amount', function() {
    bowling.roll(6);
    expect(bowling.score).toBe(6);
  });

  it('adds a frame after the first roll', function() {
    bowling.roll(6);
    expect(bowling.bowlingFrames[0][0]).toBe(6);
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

  it('accounts for spares', function() {
    bowling.roll(4);
    bowling.roll(6);
    bowling.roll(2);
    expect(bowling.score).toBe(14);
  });

  it('accounts for strikes', function() {
    bowling.roll(10);
    bowling.roll(3);
    bowling.roll(2);
    bowling.roll(1);
    expect(bowling.score).toBe(21);
  });

  it('if a spare is thrown in the tenth frame, the user gets another roll', function() {
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(3);
    bowling.roll(7);
    bowling.roll(1);
    expect(bowling.score).toBe(264);
  });

  it('if a strike is thrown in the tenth frame, they get another roll', function() {
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(4);
    expect(bowling.score).toBe(274);
  });

  it('if two strikes are thrown in the tenth frame, they get a final roll', function() {
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    expect(bowling.score).toBe(300);
  });

});
