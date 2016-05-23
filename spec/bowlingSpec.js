describe('Bowling', function() {
  var bowling;
  beforeEach(function() {
    bowling = new Bowling();
  });
  describe('#score', function() {
    it('starts with a score of 0', function() {
      expect(bowling.score()).toEqual(0);
    });

    it('can store the score for the first ball of the first frame', function() {
      bowling.hit(5);
      bowling.hit(4);
      expect(bowling.scoreSheet()).toEqual({ frame1: [ 5, 4 ] });
    });

    it('can track the total score', function() {
      bowling.hit(5);
      bowling.hit(4);
      expect(bowling.score()).toEqual(9);
    })
  });

  describe('#turn tracking', function() {
    it('can return the current frame', function() {
      expect(bowling.currentTurn()).toEqual(1);
    });

    it('can return the current ball', function() {
      expect(bowling.currentBall()).toEqual(0);
    });
  });

  describe('#ballCheck', function() {
    it('sets the ball to 0 after the 2nd non strike', function() {
      bowling.hit(5);
      bowling.hit(4);
      expect(bowling.currentBall()).toEqual(0);
    });
    it('sets the turn to 2 after the 2nd non strike', function() {
      bowling.hit(5);
      bowling.hit(4);
      expect(bowling.currentTurn()).toEqual(2);
    });
  })

  describe('#strikeCheck', function() {
    it('sets to new turn after a strike on first ball', function() {
      bowling.hit(10);
      expect(bowling.currentTurn()).toEqual(2);
    })
    it('sets to new turn after a strike on 1st ball, 2nd turn', function() {
      bowling.hit(10);
      bowling.hit(10);
      expect(bowling.currentTurn()).toEqual(3);
    })
    it('sets to new turn after a spare on 2nd ball, 2nd turn', function() {
      bowling.hit(10);
      bowling.hit(5)
      bowling.hit(5);
      expect(bowling.currentTurn()).toEqual(3);
    })
  })

  describe('#strikes and spares', function() {
    it('gotStrike returns true when you get a strike', function() {
      bowling.hit(10);
      expect(bowling.gotStrike()).toBeTruthy();
    })
    it('gotStrike returns false when you don\'t get a strike', function() {
      bowling.hit(9);
      bowling.hit(1);
      expect(bowling.gotStrike()).toBeFalsy();
    })
    it('gotSpare returns true when you get a spare', function() {
      bowling.hit(9);
      bowling.hit(1);
      expect(bowling.gotSpare()).toBeTruthy();
    })
    it('gotSpare returns false when you don\'t get a spare', function() {
      bowling.hit(8);
      bowling.hit(1);
      expect(bowling.gotSpare()).toBeFalsy();
    })
    it('gotSpare doesn\'t return true for strikes', function() {
      bowling.hit(10);
      expect(bowling.gotSpare()).toBeFalsy();
    })
  })

  it('can play 3 strikes in the 10th frame', function(){
    for (var i = 1; i <= 18; i++) {
      bowling.hit(1);
    }
    bowling.hit(10);
    bowling.hit(10);
    bowling.hit(10);
    expect(bowling.score()).toEqual(48);
  });

  it('allows 3 strikes in the 10th frame', function() {
    for (var i = 1; i <= 18; i++) {
      bowling.hit(1);
    }
    bowling.hit(10);
    bowling.hit(10);
    expect(bowling.currentTurn()).toEqual(10);
  })
})
