// If the player rolls a strike or spare in the 10th frame
// they can roll the additional balls for the bonus.
// But they can never roll more than 3 balls in the 10th
// frame. The additional rolls only count for the bonus
// not for the regular frame count.
//
//     10, 10, 10 in the 10th frame gives 30 points (10
//       points for the regular first strike and 20
//       points for the bonus).
//     1, 9, 10 in the 10th frame gives 20 points (10
//       points for the regular spare and 10 points
//       for the bonus).

describe('Tenth Frame', function() {

    var scoreCard;

    beforeEach(function() {
        scoreCard = new ScoreCard();
        game = scoreCard._game
    });

    describe('#IsTenthFrame', function() {
        it('tells whether it is the last frame', function() {
            expect(scoreCard.allFrames()[8].IsTenthFrame()).toBe(false)
            expect(scoreCard.allFrames()[9].IsTenthFrame()).toBe(true)
        });
    });

    it('Tenth frame becomes 3 _numberOfRolls if a strike happens', function() {
        expect(scoreCard.allFrames()[9]._numberOfRolls).toEqual(2)
        var gameUpToStrikeOnTenthFrame = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 10]
        game.run(gameUpToStrikeOnTenthFrame)
        expect(scoreCard.allFrames()[9]._numberOfRolls).toEqual(3)
    });

    it('Tenth frame becomes 3 _numberOfRolls if a spare happens', function() {
        expect(scoreCard.allFrames()[9]._numberOfRolls).toEqual(2)
        var gameUpToSpareOnTenthFrame = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 5]
        game.run(gameUpToSpareOnTenthFrame)
        expect(scoreCard.allFrames()[9]._numberOfRolls).toEqual(3)
    });

    it('Tenth frame stays at 2 _numberOfRolls if no strike or spare happens', function() {
        expect(scoreCard.allFrames()[9]._numberOfRolls).toEqual(2)
        doOneGameWithoutStrikesOrSpares(game)
        expect(scoreCard.allFrames()[9]._numberOfRolls).toEqual(2)
    });

    it('ScoreCard calculates correct game score if the tenth frame has a strike', function() {
        var allRolls = [1, 1, 2, 2, 3, 3, 4, 4, 1, 1, 2, 2, 3, 3, 4, 4, 1, 1, 10, 5, 5]
        game.run(allRolls)
        expect(scoreCard.total()).toEqual(1+1+2+2+3+3+4+4+1+1+2+2+3+3+4+4+1+1+10+5+5)
    });

    it('ScoreCard calculates correct game score if the tenth frame has a strike', function() {
        var allRolls = [1, 1, 2, 2, 3, 3, 4, 4, 1, 1, 2, 2, 3, 3, 4, 4, 1, 1, 5, 5, 5]
        game.run(allRolls)
        expect(scoreCard.total()).toEqual(1+1+2+2+3+3+4+4+1+1+2+2+3+3+4+4+1+1+5+5+5)
    });

    it('returns the total score for a game with strikes and spares and a spare in the tenth frame', function() {
        var complexGame = [1, 9, 2, 8, 3, 7, 10, 10, 10, 0, 0, 0, 10, 6, 4, 9, 1, 3]
        scoreCard._game.run(complexGame)
        expect(scoreCard.total()).toEqual(1+9+2+8+3+7+10+10+10+0+0+0+10+6+4+9+1+3+2+3+10+10+10+10+0+0+0+6+9)
    });
});
