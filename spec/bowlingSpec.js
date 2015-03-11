describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts with 10 pins standing', function() {
    expect(bowling.pins).toEqual(10);
  });

  it('pins can be knocked down', function() {
    bowling.pinsHit(2);
    expect(bowling.pins).toEqual(8);
  });

  it('can have a strike', function() {
    bowling.pinsHit(10);
    expect(bowling.strike).toBe(1);
  });

  it('can have one player', function() {
    expect(bowling.player).toEqual(1);
  });

  it('player can start a frame', function() {
    expect(bowling.rollNumber).toBe(bowling.player);
  });

  it('player can have two rolls in one frame', function() {
    expect(bowling.rollNumber).toEqual(1);
    bowling.pinsHit(9);
    expect(bowling.rollNumber).toEqual(2);
  });

  it('player can move to the next frame after roll 2', function() {
    expect(bowling.rollNumber).toEqual(1);
    bowling.pinsHit(9);
    expect(bowling.rollNumber).toEqual(2);
    bowling.pinsHit(1);
    expect(bowling.frameNumber).toEqual(2);
  });

  it('player can move to the next frame when hitting a strike', function() {
    expect(bowling.rollNumber).toEqual(1);
    bowling.pinsHit(10);
    expect(bowling.rollNumber).toEqual(2);
  });

});