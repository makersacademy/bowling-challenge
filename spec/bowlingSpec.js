describe('Ball', function() {
  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  describe('Intialized properties has', function() {
    it('measures first round score', function() {
      expect(ball.firstRollScore).toEqual(0);
    });
  });

  describe('First roll score', function() {
    it('takes an input number', function() {
      expect(ball.firstRoll(6)).toEqual(6)
    });
  });
});


describe('Pin', function() {
  var pin, ball;

  beforeEach(function() {
    pin = new Pin();
    ball = new Ball();
  });

  describe('each new frame initializes with', function() {
    it('10 pins to begin with', function() {
      expect(pin.number).toEqual(10)
    });
  });

  describe('each roll', function() {
    it('automatically updates the pins', function() {
      ball.firstRoll(6);
      spyOn(pin, 'firstUpdate').and.returnValue(4)
      expect(pin.number).toEqual(4);
    });
  });
});