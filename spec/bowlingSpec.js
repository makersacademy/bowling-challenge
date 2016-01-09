describe ('Bowling', function() {
  var bowling;
});

beforeEach(function() {
  bowling = new Bowling();
  spyOn(Math, 'random').and.returnValue(0.4);
});

describe('Sets up default settings', function() {
  it("saves player's name", function() {
    bowling.setPlayerName('William');
    expect(bowling.getPlayerName()).toEqual('William');
  });

  it('starts a frame with 10 pins', function() {
    bowling.startFrame(1);
    expect(bowling.getRemainingPins()).toBe(10);
  });
});

describe('Playing one frame', function() {
  it('returns number of pins knocked-down', function() {
    bowling.startFrame(1);
    bowling.rollBall();
    expect(bowling.getKnockedPins()).toBe(4);
    expect(bowling.getRemainingPins()).toBe(6);
  });
});
