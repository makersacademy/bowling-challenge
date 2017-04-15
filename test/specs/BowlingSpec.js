describe('Bowling', function() {

  var bowling;
  beforeEach(function() {
    bowling = new Bowling();
  });

  xit('is 0 if no pins are given', function() {
    expect(bowling.getScore()).toEqual(0);
  });

  it('is a gutter game', function() {
    ballsPins(20,0);
    expect(bowling.getScore()).toEqual(0);
  });

  it('hits one pin every turn', function() {
    ballsPins(20, 1);
    expect(bowling.getScore()).toEqual(20);
  });

  it('hits one spare', function() {
    spare();
    bowling.pinsInCurrentBall(9);
    ballsPins(17,0);
    expect(bowling.getScore()).toEqual(28);
  });

  it('hits one strike', function() {
    strike();
    bowling.pinsInCurrentBall(5);
    bowling.pinsInCurrentBall(4);
    ballsPins(16,0);
    expect(bowling.getScore()).toEqual(28);
  });

  it('hits a perfect game', function() {
    ballsPins(12,10);
    expect(bowling.getScore()).toEqual(300);
  });

  it('do not add points for more than a full game', function() {
    ballsPins(30,1);
    expect(bowling.getScore()).toEqual(20);
  });

  describe('10th frame', function() {
    it('hits a strike', function() {
      ballsPins(18,0);
      strike();
      ballsPins(2,10);
      expect(bowling.getScore()).toEqual(30);
    });

    it('hits a spare', function() {
      ballsPins(18,0);
      spare();
      bowling.pinsInCurrentBall(10);
      expect(bowling.getScore()).toEqual(20);
    });
  });

// helpers:
  function ballsPins(nBalls, pins) {
    for(var i = 0; i < nBalls; i++) {
      bowling.pinsInCurrentBall(pins);
    }
  }

  function spare() {
    bowling.pinsInCurrentBall(9);
    bowling.pinsInCurrentBall(1);
  }

  function strike() {
    bowling.pinsInCurrentBall(10);
  }
})
