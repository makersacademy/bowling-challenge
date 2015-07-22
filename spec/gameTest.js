describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ("starts with at a score of zero", function() {
    expect(game.score).toBe(0);
  });

  it ("should have ten pins", function() {
    expect(game.pins).toBe(10);
  });

  it ("should be on roll one", function() {
    expect(game.roll).toBe(1);
  });

  it ("should be on frame one", function() {
    expect(game.frame).toBe(1);
  });

  describe("the 1st bowl of the frame", function() {
    it("should bowl a number between 0 and 10", function() {
      game.bowl(10);
      expect(game.score).toBeLessThan(11);
      expect(game.score).toBeGreaterThan(-1);
    });

    describe("0 bowled", function() {

      beforeEach(function() {
        spyOn(Math, 'floor').and.returnValue(0);
        game.bowl();
      });

      it("should leave 10 pins standing", function() {
        expect(game.pins).toBe(10);
      });

      it("should have a score of zero", function() {
        expect(game.score).toBe(0);
        expect(game.scorecard[0][0]).toBe(0);
      });

      it("should record the score", function() {
        expect(game.scorecard[0][0]).toBe(0);
      });

      it("should move to roll two", function() {
        expect(game.roll).toBe(2);
      });
    });

    describe("10 is bowled", function() {
      beforeEach(function() {
        spyOn(Math, 'floor').and.returnValue(10);
        game.bowl();
      });

      it("should have a score of 10", function() {
        expect(game.score).toBe(10);
      });

      it("should record a strike", function() {
        expect(game.scorecard[0][0]).toBe('X');
      });

      it("should move onto the next frame", function() {
        expect(game.frame).toBe(2);
      });

      it("should keep the roll number as one", function() {
        expect(game.roll).toBe(1);
      });

      it("should put 10 pins as back up", function() {
        expect(game.pins).toBe(10);
      });
    });
  });

  describe("second bowl of frame", function() {
    beforeEach(function() {
      spyOn(Math, 'floor').and.returnValue(4);
      game.bowl();
    });
    it ("should start with at a score of less than 10", function() {
      expect(game.score).toBeLessThan(10);
    });

    it ("should have more than 0 pins", function() {
      expect(game.pins).toBeGreaterThan(0);
    });

    it ("should be on roll 2", function() {
      expect(game.roll).toBe(2);
    });

      describe("spare", function() {
        beforeEach(function() {
          game.score = 6;
          game.pins = 4;
          game.scorecard = [[6,],[]];
          game.frame = 1;
          game.roll = 2;
          game.bowl();
        });

        it("should have a score of 10", function() {
          expect(game.score).toBe(10);
        });

        it("should record a spare", function() {
          expect(game.scorecard[0][1]).toBe('/');
        });

        it("should take us to the next frame", function() {
          expect(game.frame).toBe(2);
        });

        it("should change the roll number to one", function() {
          expect(game.roll).toBe(1);
        });

        it("should put ten pins back up", function() {
          expect(game.pins).toBe(10);
        });        
      });

      describe("frame score 8", function() {
        beforeEach(function() {
          game.score = 3;
          game.pins = 7;
          game.scorecard = [[3,],[]];
          game.frame = 1;
          game.roll = 2;
          game.bowl();
        });

        it("should move onto the next frame", function() {
          expect(game.frame).toBe(2);
        });

        it("should change the roll number to one", function() {
          expect(game.roll).toBe(1);
        });

        it("should put ten pins back up", function() {
          expect(game.pins).toBe(10);
        });

        it("should record the score", function() {
          expect(game.scorecard[0][1]).toBe(4);
        });
      });
    });

  describe("frame after a spare", function() {
    
    beforeEach(function() {
        spyOn(Math, 'floor').and.returnValue(5);
        game.bowl();
        game.bowl();
    });

    describe("rolls 5", function() {
      it("should have a score of 20", function() {
        game.bowl();
        expect(game.score).toBe(20);
      });
    });
    describe("rolls another spare frame then five", function() {
      it("should have a score of 35", function() {
        game.bowl();
        game.bowl();
        game.bowl();
        expect(game.score).toBe(35);
      });
    });
  });

  describe("frame after a strike", function() {
    
    describe("rolls 4 then 4", function() {
      it("should have a score of 26", function() {
        game.score = 10;
        game.pins = 10;
        game.scorecard = [['X'],[]];
        game.frame = 2;
        game.roll = 1;
        spyOn(Math, 'floor').and.returnValue(4);
        game.bowl();
        game.bowl();
        expect(game.score).toBe(26);
      });
    });
  });

  describe("after a strike", function() {
    
    describe("another strike", function() {
      it("should have a score of 30", function() {
        game.score = 10;
        game.pins = 10;
        game.scorecard = [['X'],[]];
        game.frame = 2;
        game.roll = 1;
        spyOn(Math, 'floor').and.returnValue(10);
        game.bowl();
        expect(game.score).toBe(30);
      });
    });
    describe("another two strikes", function() {
      it("should have a score of 60", function() {
        spyOn(Math, 'floor').and.returnValue(10);
        game.bowl();
        game.bowl();
        game.bowl();
        expect(game.score).toBe(60);
      });
    });
  });

  describe("perfect game", function() {
    
    it("should have a score of 300", function() {
      spyOn(Math, 'floor').and.returnValue(10);
      for (i = 0; i < 13; i++) {
        game.bowl();
      }
      expect(game.score).toBe(300);
    });
  });

  describe("all 3s", function() {
    
    it("should have a score of 60", function() {
      spyOn(Math, 'floor').and.returnValue(3);
      for (i = 0; i < 20; i++) {
        game.bowl();
      }
      expect(game.score).toBe(60);
    });

    it("should exit after 10th frame", function() {
      spyOn(Math, 'floor').and.returnValue(3);
      for (i = 0; i < 22; i++) {
        game.bowl();
      }
      expect(game.score).toBe(60);
    });
  });

  describe("spare in 10th round", function() {

    it("should exit after 11th frame", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      for (i = 0; i < 23; i= i + 1) {
        game.bowl();
      }
      expect(game.score).toBe(155);
    });
  });
});