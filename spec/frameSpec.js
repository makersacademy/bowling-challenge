describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('new game', function() {
    it('can start a new game with an empty arrays for the score', function() {
      expect(frame.score).toEqual([]);
    }); 
  });

  describe('Adding to array', function() {
    it('adds to the array', function() {
      frame.roll(4);
      expect(frame.score.length).toEqual(1);
    });
  });

  describe('Frame 1 testing', function() {
    it('runs frame1 and outputs scores', function() {
      frame.roll(4);
      frame.roll(5);
      expect(frame.frame1()).toEqual(9);
    });
    it('testing spare function', function() {
      frame.roll(5);
      frame.roll(5);
      frame.roll(5);
      expect(frame.frame1()).toEqual(15);
    });
  });

  describe('Frame 2 testing', function() {
    it('runs frame2 and outputs scores', function() {
      for (var i = 0; i < 3; i++) {
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame2()).toEqual(18);
    });
    it('testing spare function', function() {
      for (var i = 0; i < 3; i++) {
        frame.roll(5);
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame2()).toEqual(28);
    });
  });

  describe('Frame 3 testing', function() {
    it('runs frame3 and outputs scores', function() {
      for (var i = 0; i < 4; i++) {
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame3()).toEqual(27);
    });
    it('testing spare function', function() {
      for (var i = 0; i < 4; i++) {
        frame.roll(5);
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame3()).toEqual(42);
    });
  });

  describe('Frame 4 testing', function() {
    it('runs frame4 and outputs scores', function() {
      for (var i = 0; i < 6; i++) {
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame4()).toEqual(36);
    });
    it('testing spare function', function() {
      for (var i = 0; i < 5; i++) {
        frame.roll(5);
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame4()).toEqual(56);
    });
  });

  describe('Frame 5 testing', function() {
    it('runs frame5 and outputs scores', function() {
      for (var i = 0; i < 7; i++) {
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame5()).toEqual(45);
    });
    it('testing spare function', function() {
      for (var i = 0; i < 6; i++) {
        frame.roll(5);
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame5()).toEqual(70);
    });
  });

  describe('Frame 6 testing', function() {
    it('runs frame6 and outputs scores', function() {
      for (var i = 0; i < 9; i++) {
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame6()).toEqual(54);
    });
    it('testing spare function', function() {
      for (var i = 0; i < 8; i++) {
        frame.roll(5);
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame6()).toEqual(84);
    });
  });

  describe('Frame 7 testing', function() {
    it('runs frame7 and outputs scores', function() {
      for (var i = 0; i < 10; i++) {
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame7()).toEqual(63);
    });
    it('testing spare function', function() {
      for (var i = 0; i < 9; i++) {
        frame.roll(5);
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame7()).toEqual(98);
    });
  });

  describe('Frame 8 testing', function() {
    it('runs frame8 and outputs scores', function() {
      for (var i = 0; i < 12; i++) {
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame8()).toEqual(72);
    });
    it('testing spare function', function() {
      for (var i = 0; i < 11; i++) {
        frame.roll(5);
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame8()).toEqual(112);
    });
  });

  describe('Frame 9 testing', function() {
    it('runs frame9 and outputs scores', function() {
      for (var i = 0; i < 13; i++) {
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame9()).toEqual(81);
    });
    it('testing spare function', function() {
      for (var i = 0; i < 12; i++) {
        frame.roll(5);
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame9()).toEqual(126);
    });
  });

  describe('Frame 10 testing', function() {
    it('runs frame10 and outputs scores', function() {
      for (var i = 0; i < 15; i++) {
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame10()).toEqual(90);
    });
    it('testing spare function', function() {
      for (var i = 0; i < 13; i++) {
        frame.roll(5);
        frame.roll(5);
        frame.roll(4);
      };
      expect(frame.frame10()).toEqual(140);
    });
  });
});