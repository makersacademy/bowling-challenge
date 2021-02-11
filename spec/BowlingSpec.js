describe("Bowling Game", function(){
    var bowlingGame;

    beforeEach(function(){
        bowlingGame = new BowlingGame();
    });


    it("initializes a BowlingGame", function(){
        expect(bowlingGame).toBeInstanceOf(BowlingGame);
    });


    it("adds throws to a frame", function(){
        bowlingGame.roll(4);
        bowlingGame.roll(3);
        expect(bowlingGame.runningScore).toEqual([[4,3]]);
    });

    it("has a running total", function(){
        bowlingGame.roll(1);
        bowlingGame.roll(1);
        bowlingGame.roll(2);
        bowlingGame.roll(2);
        bowlingGame.roll(3);
        bowlingGame.roll(3);
        bowlingGame.roll(4);
        bowlingGame.roll(4);
        expect(bowlingGame.runningScore).toEqual([[1, 1], [2, 2], [3, 3], [4, 4]]);
    });

    it("can roll a strike", function(){
        bowlingGame.roll(10)
        expect(bowlingGame.runningScore).toEqual([[10, 0]]);
    })

    it("can output a total score", function(){
        bowlingGame.roll(1);
        bowlingGame.roll(1);
        bowlingGame.roll(2);
        bowlingGame.roll(2);
        bowlingGame.roll(3);
        bowlingGame.roll(3);
        bowlingGame.roll(4);
        bowlingGame.roll(4);
        bowlingGame.roll(5);
        bowlingGame.roll(5);
        bowlingGame.roll(6);
        bowlingGame.roll(6);
        bowlingGame.roll(7);
        bowlingGame.roll(7);
        bowlingGame.roll(8);
        bowlingGame.roll(8);
        bowlingGame.roll(9);
        bowlingGame.roll(9);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        expect(bowlingGame.totalScore()).toEqual(90);
    });

    it("can end a game after 10 frames", function(){
        bowlingGame.roll(1);
        bowlingGame.roll(1);
        bowlingGame.roll(2);
        bowlingGame.roll(2);
        bowlingGame.roll(3);
        bowlingGame.roll(3);
        bowlingGame.roll(4);
        bowlingGame.roll(4);
        bowlingGame.roll(5);
        bowlingGame.roll(5);
        bowlingGame.roll(6);
        bowlingGame.roll(6);
        bowlingGame.roll(7);
        bowlingGame.roll(7);
        bowlingGame.roll(8);
        bowlingGame.roll(8);
        bowlingGame.roll(9);
        bowlingGame.roll(9);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        expect(bowlingGame.gameOver).toEqual(true);
    });
});