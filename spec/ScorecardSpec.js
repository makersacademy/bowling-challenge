describe('ScoreCard', function () {
    'use strict';
    var scorecard;
    var game;
    beforeEach(function () {
        scorecard = new ScoreCard();
        game = new Game();
    })
    describe('addScore', function(){
        it('adds score from round to array as hash', function () {
            scorecard.addScore(1, 1, 4);
            expect(scorecard.scoreboard).toEqual([{frame: 1, roll: 1, knocked: 4}]);
        });
    });
});
