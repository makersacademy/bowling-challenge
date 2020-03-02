describe('Bowling', function(){
    var bowlingGame 
    beforeEach(function(){
        bowlingGame = new BowlingGame
    });
    it('start a game at 0 points', function(){
        expect(bowlingGame.score).toEqual([]);
    });

    it('adds 2 numbers of knockedown pins per frame, to the table score', function(){
        bowlingGame.roll(3, 4);
        expect(bowlingGame.scoreTable).toEqual([3, 4])
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

    it('calculates the score for spares', function(){
        bowlingGame.roll(4, 6);
        for (var i = 0; i < 9; i++){
            bowlingGame.roll(1, 2)
        };
        expect(bowlingGame.showScore()).toEqual(38)
    });

    it('calculates the score for strikes', function(){
        bowlingGame.roll(10, 0);
        for (var i = 0; i < 9; i++){
            bowlingGame.roll(1, 2)
        };
        expect(bowlingGame.showScore()).toEqual(40)
    });

    it('calculates the score when the 10th frame is a strike', function(){
        for (var i = 0; i < 9; i++){
            bowlingGame.roll(1, 2)
        };
        bowlingGame.roll(10, 0);
        bowlingGame.roll(3, 4);
        expect(bowlingGame.showScore()).toEqual(44)
    });

    it('calculates the score for a perfect game', function(){
        for (var i = 0; i < 12; i++){
            bowlingGame.roll(10, 0)
        };
        expect(bowlingGame.showScore()).toEqual(300)
    });

});