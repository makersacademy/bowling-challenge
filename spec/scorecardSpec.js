'use strict';

describe("Scorecard", function() {
    var score;
    var testScorecard = Array(10).fill(0).map( x => Array(5).fill(0));

    beforeEach(function() {
        score = new Scorecard();
    });

    it("creates a blank scorecard", function() {
        expect(score.scores).toEqual(testScorecard);
        expect(score.scores.length).toEqual(10);
    });

    it("can be updated with a score", function() {
      console.log(this.scores);
        score.updateScore(1,1,10);
        score.updateScore(1,2,0);
        score.updateScore(2,1,3);
        score.updateScore(2,2,6);
        score.updateScore(3,1,5);
        score.updateScore(3,2,5);
        score.updateScore(9,1,7);
        score.updateScore(9,2,1);
        score.updateScore(10,1,10);
        score.updateScore(10,2,10);
        score.updateScore(10,3,5);
        expect(score.scores[0][1]).toEqual(10);
        expect(score.scores[0][2]).toEqual(0);
        expect(score.scores[1][1]).toEqual(3);
        expect(score.scores[1][2]).toEqual(6);
        expect(score.scores[2][1]).toEqual(5);
        expect(score.scores[2][2]).toEqual(5);
        expect(score.scores[8][1]).toEqual(7);
        expect(score.scores[8][2]).toEqual(1);
        expect(score.scores[9][1]).toEqual(10);
        expect(score.scores[9][2]).toEqual(10);
        expect(score.scores[9][3]).toEqual(5);

        console.log(JSON.stringify(score.scores));

    });

    it("can record frames between 1 and 10", function () {
        var i;
        for (i = 1; i < 11; i++) {
            score.frame = i;
            console.log(score.frame);
            expect(score.frame >= 1 && score.frame <= 10).toBeTruthy();
            }
    });

    it("can record rolls of a frame", function() {
        var i;
        for (i = 1; i < 3; i++) {
            score.roll = i;
            console.log(score.roll);
            expect(score.roll == 1 || score.roll == 2).toBeTruthy();
            }
    });

    it("knows when a Strike has been bowled", function () {
        score.updateScore(1,1,10);
        score.updateScore(1,2,0);
        score.updateScore(3,1,5);
        score.updateScore(3,2,5);
        score.updateScore(5,1,0);
        score.updateScore(5,2,10);
        score.updateScore(10,1,10);
        score.updateScore(10,2,10);
        score.updateScore(10,3,10);
        console.log(JSON.stringify(score.scores));
        expect(score.scores[0][0]).toEqual(1);
        expect(score.scores[2][0]).toEqual(0);
        expect(score.scores[4][0]).toEqual(0);
        expect(score.scores[9][0]).toEqual(1);
    });

    it("knows when a Spare has been bowled", function () {
      score.updateScore(1,1,10);
      score.updateScore(3,1,0);
      score.updateScore(3,2,10);
      score.updateScore(5,1,5);
      score.updateScore(5,2,5);
      score.updateScore(10,1,3);
      score.updateScore(10,2,7);
      score.updateScore(10,3,10);
      console.log(JSON.stringify(score.scores));
      expect(score.scores[0][4]).toEqual(0);
      expect(score.scores[2][4]).toEqual(1);
      expect(score.scores[4][4]).toEqual(1);
      expect(score.scores[9][4]).toEqual(1);
    })

    it("can display a total score", function () {
        var i;
        for (i = 1; i < 11; i++) {
            score.updateScore(i,1,10);
            }
            score.updateScore(10,2,10);
            score.updateScore(10,3,10);
            console.log(JSON.stringify(score.scores));
        expect(score.total).toEqual(300);
        score.totalScore ();
    })



});
