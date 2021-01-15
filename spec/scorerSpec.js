describe ('Scorer', function() {

  var scorer, frame;

  class DoubleFrame {

    constructor() {
      this.pins = [4, 3];
    }

    result() {
      return this.pins[0] + this.pins[1]
    }

    _isaSpare() {
      return false;
    }

    _isaStrike() {
      return false;
    }
  }

  class DoubleStrike {
    constructor() {
      this.pins = [10];
    }

    _isaSpare() {
      return false;
    }

    _isaStrike() {
      return true;
    }
  }

  class DoubleSpare {
    constructor() {
      this.pins = [6, 4];
    }

    _isaSpare() {
      return true;
    }

    _isaStrike() {
      return false;
    }
  }

  beforeEach(function () {
    scorer = new Scorer();
    frame = new DoubleFrame();
  });

  describe('addFrame', function() {
    it('stores the frame in an array', function() {
      scorer.addFrame(frame);
      expect(scorer.frames).toEqual([frame]);
    });
  });


  describe('calculate', function() {
    it('puts result of standard frame into scores array', function() {
      scorer.calculate(frame);
      expect(scorer.scores).toEqual([7]);
    });

    it('adds total to scores list for multiple rolls', function() {
      scorer.calculate(frame);
      scorer.calculate(frame);
      expect(scorer.scores).toEqual([7, 7]);
    });

    it('identifies spare and inserts / into scores', function() {
      spare = new DoubleSpare();
      scorer.calculate(spare);
      expect(scorer.scores).toEqual(['/']);
    });

    it('identifies strike and inserts X into scores', function() {
      strike = new DoubleStrike();
      scorer.calculate(strike);
      expect(scorer.scores).toEqual(['X']);
    });

  });

  describe('_lastFrame', function() {
    it('returns last frame in the array', function() {
      spare = new DoubleSpare();
      scorer.addFrame(spare);
      scorer.addFrame(frame);
      expect(scorer._lastFrame()).toBe(spare);
    });
  });

  describe('_isConsecutiveStrikeInProgress', function() {
    it('returns true for consecutive strikes', function() {
      strike = new DoubleStrike();
      scorer.addFrame(strike);
      scorer.addFrame(strike);
      scorer.addFrame(frame);
      expect(scorer._isConsecutiveStrikeInProgress()).toBe(true)
    });
  });

  describe('total', function() {
    it('returns total of all scores', function() {
      scorer.scores = [3, 7]
      expect(scorer.total()).toEqual(10)
    });
  });

  describe('_sparebonus', function() {
    it('calculates bonus of spare as first roll of next frame', function() {
      spare = new DoubleSpare();
      scorer.addFrame(spare);
      scorer.addFrame(frame);
      expect(scorer.scores).toEqual([14, 7]);
    });
  });

  describe('_strikebonus', function() {
    it('calculates bonus of strike as sum of next frame', function() {
      strike = new DoubleStrike();
      scorer.addFrame(strike);
      scorer.addFrame(frame);
      expect(scorer.scores).toEqual([17, 7]);
    });
  });
});
