describe("Score table",function() {
  var table;
  beforeEach(function() {
    table = new ScoreTable();
  });

  describe("before first roll ",function() {
    it("is set to first roll",function() {
      expect(table.rollNumber).toEqual(1);
    });

    it("has 10 pins",function() {
      expect(table.pinsLeft).toEqual(10);
    });

    it("shows that player has 0 points",function() {
      expect(table.totalPoints).toEqual(0);
    });
  });

  describe("when Player rolls",function() {

    describe("and knocks 5 pins",function() {
      beforeEach(function() {
       table.receiveScore(5);
      });

      it("displays 5 points, and sets another roll",function() {
        expect(table.totalPoints).toEqual(5);
        expect(table.rollNumber).toEqual(2);
      });

      describe("rolls again and knocks 5 pins again",function() {
        beforeEach(function() {
          table.receiveScore(5);
        });

        it("starts another frame with 10 points",function() {
          expect(table.frameNumber).toEqual(2);
          expect(table.rollNumber).toEqual(1);
          expect(table.totalPoints).toEqual(10);
        });

        it("gives player double points for next roll",function() {
          table.receiveScore(5);
          expect(table.totalPoints).toEqual(20);
        });
      });
    });

    describe("a strike",function() {
      beforeEach(function() {
        table.receiveScore(10);
      });

      it("gives player double points for next 2 rolls",function() {
        table.receiveScore(6);
        table.receiveScore(6);
        expect(table.totalPoints).toEqual(34);
      });
    });

  });
});
