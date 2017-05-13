
describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('#startGame; when called it', function() {
    it('changes the in game boolean to true', function(){
      bowling.startGame()
      expect(bowling.isInGame).toBe(true);
    });
  });

  describe('#bowlBall; when called it', function() {
    it('returns the bowls had so far', function(){
      bowling.incrementGameThrows();
      bowling.incrementFrameThrows();
      expect(bowling.numOfThrows).toBeGreaterThan(0);
      expect(bowling.numOfFrameThrows).toBeGreaterThan(0);
    });
  });


  describe('#firstThrow; when called it', function() {
    it('returns the pins knocked over in the first throw', function(){
      bowling.firstThrow();
      expect(bowling.numOfPins).toBeGreaterThan(0);
      expect(bowling.numOfPins).toBeLessThan(11);
      expect(bowling.numOfPinsLeftStanding).toBe(10 - bowling.numOfPins);
    });
  });

  describe('#secondThrow; when called it', function() {
    it('returns the pins knocked over in the first throw', function(){
      bowling.secondThrow();
      expect(bowling.numOfPins).toBeGreaterThan(0);
      expect(bowling.numOfPins).toBeLessThan(10);
    });
  });

  describe('#scoreFrame', function() {
    it('returns the score of the throw when scoring a strike', function() {
      bowling.numOfPins = 10
      bowling.scoreFrame();
      expect(bowling.frameScore).toBe(0);
      expect(bowling.frameNum).toBe(2);
      expect(bowling.previousStrike).toBe(true);
      expect(bowling.numOfThrows).toBe(1);
      });
    });

    it('returns the score of a normal throw', function() {
      bowling.numOfPins = 3
      bowling.scoreFrame();
      expect(bowling.frameScore).toBe(bowling.numOfPins);
      expect(bowling.frameNum).toBe(1);
      expect(bowling.previousStrike).toBe(false);
      expect(bowling.numOfThrows).toBe(1);
  });

  it('returns the score of a normal first throw when the previous frame throw a strike', function() {
    bowling.numOfPins = 3
    bowling.previousStrike = true;
    bowling.scoreFrame();
    expect(bowling.frameScore).toBe(bowling.numOfPins *2);
    expect(bowling.frameNum).toBe(1);
    expect(bowling.previousStrike).toBe(true);
    expect(bowling.numOfThrows).toBe(1);
});

it('returns the score of a normal second throw when the previous frame throw a strike', function() {
  bowling.numOfPins = 3
  bowling.previousStrike = true;
  bowling.scoreFrame();
  bowling.scoreFrame();
  expect(bowling.currentGameScore).toBe(this.frameScore + this.numOfPins*2 + 10);
  expect(bowling.frameNum).toBe(1);
  expect(bowling.previousStrike).toBe(true);
  expect(bowling.numOfThrows).toBe(2);
});
});
