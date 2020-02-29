describe('Bowling', function(){
    var bowlingGame 
    beforeEach(function(){
        bowlingGame = new BowlingGame
    });
    it('start a game at 0 points', function(){
        expect(bowlingGame.score).toEqual(0);
    });

    it('adds the knockedown pins in a frame to the table score', function(){
        bowlingGame.roll(3, 4);
        expect(bowlingGame.scoreTable).toEqual([3, 4])
    });

    it('calculates the score for one frame', function(){
        bowlingGame.roll(2, 3);
        expect(bowlingGame.showScore()).toEqual(5)
    });

    it('calculates the score for a regular game', function(){
        for (var i = 0; i < 10; i++){
            bowlingGame.roll(2, 4)
            };
        expect(bowlingGame.showScore()).toEqual(60)
    });

    it('calulates the score for a gutter game', function(){
        for (var i = 0; i < 10; i++){
            bowlingGame.roll(0, 0)
        };
        expect(bowlingGame.showScore()).toEqual(0)
    });

});