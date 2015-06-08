describe('Ball', function() {

  var ball

  beforeEach(function() {
    ball = new Ball();
  });

  describe('when initialised is', function() {
    it('set at 0', function() {
      expect(ball.downedPins).toEqual(0);
      expect(ball.remainingPins).toEqual(10);
    });
  });

  describe('when one ball is bowled on its own', function() {
    it('sets score to 3', function() {
      ball.bowl(3);
      expect(ball.downedPins).toEqual(3);
      expect(ball.remainingPins).toEqual(7);
    });
  });

    describe('when one ball is bowled on its own', function() {
    it('sets score to 10', function() {
      ball.bowl(10);
      expect(ball.downedPins).toEqual(10);
      expect(ball.remainingPins).toEqual(0);
    });
  });

});

describe('Stream', function() {

  var stream

  beforeEach(function() {
    stream = new Stream();
  });

  describe('when initialised is', function() {
    it('set at 0', function() {
      expect(stream.totalScore).toEqual(0);
    });
  });

  describe('when a ball is bowled in a game the score is', function() {
    it('set at 0', function() {
      stream.nextball(4);
      expect(stream.totalScore).toEqual(0);
    });
  });

  describe('when two ball is bowled in a game the score is', function() {
    it('set at 9', function() {
      stream.nextball(5);
      stream.nextball(4);
      expect(stream.totalScore).toEqual(9);
    });
  });

  describe('when 4 balls are bowled in a game the score is', function() {
    it('set at 14', function() {
      stream.nextball(5);
      stream.nextball(4);
      stream.nextball(3);
      stream.nextball(2);
      expect(stream.totalScore).toEqual(14);
    });
  });

  describe('when you get a spare, you get no score untill next time', function() {
    it('set at 0', function() {
      stream.nextball(5);
      stream.nextball(5);
      expect(stream.totalScore).toEqual(0);
    });
  });

  describe('when you get a spare, you get no score untill next time', function() {
    it('set at 0', function() {
      stream.nextball(5);
      stream.nextball(5);
      stream.nextball(5);
      stream.nextball(2);
      expect(stream.totalScore).toEqual(22);
    });
  });

  describe('when you get a strike, you get no score untill next time', function() {
    it('set at 0', function() {
      stream.nextball(10);
      expect(stream.totalScore).toEqual(0);
    });
  });

  describe('when you get a strike, you get more ', function() {
    it('set at 24', function() {
      stream.nextball(10);
      stream.nextball(5);
      stream.nextball(2);
      expect(stream.totalScore).toEqual(24);
    });
  });

  describe('when you get a strike, you get more ', function() {
    it('set at 78', function() {
      stream.nextball(10);
      stream.nextball(10);
      stream.nextball(10);
      stream.nextball(4);
      stream.nextball(3);
      expect(stream.totalScore).toEqual(78);
    });
  });

  describe('when you get a strike, you get more ', function() {
    it('set at 300', function() {
      for(var i = 0; i < 12; i++) {
        stream.nextball(10);
      }
      expect(stream.totalScore).toEqual(300);
    });
  });

  describe('when you get a score the score is displayed', function() {
    it('sets to X- 7/ 42', function() {
      stream.nextball(10);
      stream.nextball(7);
      stream.nextball(3);
      stream.nextball(4);
      stream.nextball(2);
      expect(stream.display(1,1)).toEqual("X");
      expect(stream.display(1,2)).toEqual("-");
      expect(stream.display(2,1)).toEqual("7");
      expect(stream.display(2,2)).toEqual("/");
      expect(stream.display(3,1)).toEqual("4");
      expect(stream.display(3,2)).toEqual("2");
    });
  });

});