describe('score logic', function() {
  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
  });

    it('can add new row to table', function() {
        scoreboard.addScore(2);
        expect(scoreboard.totalscore).toEqual(2);
        });
    });
