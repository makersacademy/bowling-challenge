describe("BowlingScorer", function() {
  var bowlingscorer;
  beforeEach(function() {
    bowlingscorer = new BowlingScorer();
  });
  describe("Adding up scores", function() {
    describe("keeps a record of total score,", function() {
      it("total score starts at 0", function() {
        expect(bowlingscorer.total).toEqual(0);
      });
      it("adds to the total score after both shots of a frame", function() {
        bowlingscorer.bowl(2);
        bowlingscorer.bowl(4);
        expect(bowlingscorer.total).toEqual(6);
      });
      it("won't add to the score until both shots of a frame are taken", function() {
        bowlingscorer.bowl(8);
        expect(bowlingscorer.total).toEqual(0);
      });
    }); 
  });
  describe("Bowling", function() {
    describe("normal shots", function() {
      it("accepts when shots are made", function() {
        expect(bowlingscorer.bowl(3)).toEqual(3);
      });
      it("doesn't accept when not fed an integer number between 0 and 10", function() {
        expect(bowlingscorer.bowl("A")).toBeFalsy();
        expect(bowlingscorer.bowl(-1)).toBeFalsy();
        expect(bowlingscorer.bowl(11)).toBeFalsy();
        expect(bowlingscorer.bowl(5.5)).toBeFalsy();
      });
      it("won't accept if the total of a frame exceeds 10", function() {
        bowlingscorer.bowl(5);
        expect(bowlingscorer.bowl(7)).toBeFalsy();
      });
    });
    describe("spares", function() {
      it("add the score of the next shot", function() {
        bowlingscorer.bowl(9);
        bowlingscorer.bowl(1);
        bowlingscorer.bowl(6);
        expect(bowlingscorer.total).toEqual(16);
      });
    });
    describe("strikes", function() {
      it("doesn't need a second shot in the frame", function() {
        bowlingscorer.bowl(10);
        expect(bowlingscorer.strike).toEqual(true)
      });
      it("adds the score of the next frame", function() {
        bowlingscorer.bowl(10);
        bowlingscorer.bowl(8);
        bowlingscorer.bowl(1);
        expect(bowlingscorer.total).toEqual(28)
      });
    });
    it("can score a perfect game", function() {
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      expect(bowlingscorer.total).toEqual(300)
    })
    it("can score a full game properly", function() {
      bowlingscorer.bowl(9);
      bowlingscorer.bowl(0);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(6);
      bowlingscorer.bowl(1);
      bowlingscorer.bowl(7);
      bowlingscorer.bowl(3);
      bowlingscorer.bowl(4);
      bowlingscorer.bowl(5);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(9);
      bowlingscorer.bowl(1);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(6);
      bowlingscorer.bowl(4);
      bowlingscorer.bowl(10);
      expect(bowlingscorer.total).toEqual(162)
    });
    it("will not add anything to the total after the last frame", function() {
      bowlingscorer.bowl(9);
      bowlingscorer.bowl(0);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(6);
      bowlingscorer.bowl(1);
      bowlingscorer.bowl(7);
      bowlingscorer.bowl(3);
      bowlingscorer.bowl(4);
      bowlingscorer.bowl(5);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(9);
      bowlingscorer.bowl(1);
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(6);
      bowlingscorer.bowl(4);
      bowlingscorer.bowl(10);
      expect(bowlingscorer.total).toEqual(162)
      bowlingscorer.bowl(10);
      bowlingscorer.bowl(6);
      bowlingscorer.bowl(4);
      bowlingscorer.bowl(10);
      expect(bowlingscorer.total).toEqual(162)
    });
  });
});