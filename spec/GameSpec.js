describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ("should start with at a score of zero", function() {
    expect(game.score).toBe(0);
  });

  it ("should have ten pins", function() {
    expect(game.pins).toBe(10);
  });

  it ("should be on roll 1", function() {
    expect(game.roll).toBe(1);
  });

  it ("should be on frame 1", function() {
    expect(game.frame).toBe(1);
  });

  describe("first bowl of frame", function() {
    it("should bowl a number between 0 and 10", function() {
      game.bowl(10);
      expect(game.score).toBeLessThan(11);
      expect(game.score).toBeGreaterThan(-1);
    });

    describe("0 is bowled", function() {

      beforeEach(function() {
        spyOn(Math, 'floor').and.returnValue(0);
        game.bowl(10);
      });

      it("should leave 10 pins standing", function() {
        expect(game.pins).toBe(10);
      });

      it("should have a score of 0", function() {
        expect(game.score).toBe(0);
        expect(game.scorecard[0][0]).toBe(0);
      });

      it("should record score", function() {
        expect(game.scorecard[0][0]).toBe(0);
      });

      it("should move to roll 2", function() {
        expect(game.roll).toBe(2);
      });
    });

    describe("10 is bowled", function() {
      beforeEach(function() {
        spyOn(Math, 'floor').and.returnValue(10);
        game.bowl(10);
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

      it("should keep the roll number as 1", function() {
        expect(game.roll).toBe(1);
      });

      it("should put 10 pins back up", function() {
        expect(game.pins).toBe(10);
      });
    });
  });

  describe("second bowl of frame", function() {
    it ("should start with at a score of less than 10", function() {
      game.bowl(9);
      expect(game.score).toBeLessThan(10);
    });

    it ("should have more than 0 pins", function() {
      game.bowl(9);
      expect(game.pins).toBeGreaterThan(0);
    });

    it ("should be on roll 2", function() {
      game.bowl(9);
      expect(game.roll).toBe(2);
    });

      describe("split", function() {
        beforeEach(function() {
          spyOn(Math, 'floor').and.returnValue(5);
          game.bowl(5);
          game.bowl(5);
        });

        it("should have a score of 10", function() {
          expect(game.score).toBe(10);
        });

        it("should record a split", function() {
          expect(game.scorecard[0][1]).toBe('/');
        });

        it("should move onto the next frame", function() {
          expect(game.frame).toBe(2);
        });

        it("should change the roll number to 1", function() {
          expect(game.roll).toBe(1);
        });

        it("should put 10 pins back up", function() {
          expect(game.pins).toBe(10);
        });        
      });

      describe("frame score 8 ", function() {
        beforeEach(function() {
          spyOn(Math, 'floor').and.returnValue(4);
          game.bowl(10);
          game.bowl(6);
        });

        it("should move onto the next frame", function() {
          expect(game.frame).toBe(2);
        });

        it("should change the roll number to 1", function() {
          expect(game.roll).toBe(1);
        });

        it("should put 10 pins back up", function() {
          expect(game.pins).toBe(10);
        });

        it("should record the score", function() {
          expect(game.scorecard[0][1]).toBe(4);
        });
      });
    });
});
