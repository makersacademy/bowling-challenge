'use strict';

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
       table.calculateRoll(5);
      });

      it("gets 5 points, and has another roll",function() {
        expect(table.totalPoints).toEqual(5);
        expect(table.rollNumber).toEqual(2);
      });

      describe("rolls again and knocks 5 pins again",function() {
        beforeEach(function() {
          table.calculateRoll(5);
        });

        it("starts another frame with 10 points",function() {
          expect(table.frameNumber).toEqual(2);
          expect(table.rollNumber).toEqual(1);
          expect(table.totalPoints).toEqual(10);
        });

        it("gives player double points for next roll",function() {
          table.calculateRoll(5);
          expect(table.totalPoints).toEqual(20);
        });
      });
    });

    describe("a strike",function() {
      beforeEach(function() {
        table.calculateRoll(10);
      });

      it("gives player double points for next 2 rolls",function() {
        table.calculateRoll(3);
        table.calculateRoll(6);
        expect(table.totalPoints).toEqual(28);
      });
    });
  });

  describe("when Player reaches the last frame",function() {
    it("can roll a perfect game",function() {
      for (var i = 0; i < 10; i++) {
        table.calculateRoll(10);
      }
      //expect(table.frameNumber).toEqual(10);
      expect(table.totalPoints).toEqual(280);
      table.calculateRoll(10);
      expect(table.totalPoints).toEqual(300);
    });
  });
});
