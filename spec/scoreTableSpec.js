describe("Bowling game",function() {
  var table;
  beforeEach(function() {
    table = new ScoreTable();
  });

  describe("Before first roll, Player",function() {
    it("can have the first roll",function() {
      expect(table.rollNumber).toEqual(1);
    });

    it("has 10 pins to hit in first frame",function() {
      expect(table.pinsLeft).toEqual(10);
    });

    it("has 0 points",function() {
      expect(table.totalPoints).toEqual(0);
    });
  });

  describe("When Player rolls",function() {

    describe("and knocks 5 pins",function() {
      beforeEach(function() {
       table.receiveScore(5);
      });

      it("gets 5 points, and has another roll",function() {
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

        //it("gets bonus points for next roll",function() {
          //spyOn(Math,'random').and.returnValue(3);
          //game.roll();
          //expect(game.totalPoints).toEqual(16);
        //});
      });
    });

    //describe("a strike",function() {
      //beforeEach(function() {
        //spyOn(Math,'random').and.returnValue(10);
        //game.roll();
      //});
    //});

  });
});
