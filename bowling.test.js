const Game = require('./bowling')

describe('Game', ()=> {
    it("should start game with 0 score", () => {
        const game = new Game()
        expect(game.totalScore).toEqual(0)
        expect(game.rollNumber).toEqual(1)
        expect(game.frame).toEqual(1)
    })

    it("One frame - should roll a 4 and add roll score to total score, add to the roll number and keep the same frame", () => {
        const game = new Game()
        game.roll(4)
        expect(game.frame).toEqual(1)
        expect(game.rollNumber).toEqual(2)
        expect(game.totalScore).toEqual(4)
    });

    it("One frame - should roll a 10 and add to total score, skip over to the next frame", () => {
        const game = new Game()
        game.roll(10)
        expect(game.frame).toEqual(2)
        expect(game.rollNumber).toEqual(1)
        expect(game.totalScore).toEqual(10)
    });
    
    it("One frame - should return 10 after two rolls with a frame change", () => {
        const game = new Game()
        game.roll(6)
        expect(game.frame).toEqual(1)
        expect(game.rollNumber).toEqual(2)
        expect(game.totalScore).toEqual(6)
        game.roll(4)
        expect(game.frame).toEqual(2)
        expect(game.rollNumber).toEqual(1)
        expect(game.totalScore).toEqual(10)
    });

    it("Eight frames - should return 90 with board below", () => {
        const game = new Game()
        game.board = [[7,3],[5,2],[10,0],[5,4],[6,0],[4,4],[8,2],[7,0],[0,0],[0,0,0]]
        game.rollNumber = 2
        game.frame = 8
        game.roll(2)
        expect(game.totalScore).toEqual(90)
        expect(game.frame).toEqual(9)
        expect(game.rollNumber).toEqual(1)
    });

    it("Last frame - should return 114 with no spare or strike at end after a strike in the 9th frame", () => {
        const game = new Game()
        game.board = [[7,3],[5,2],[10,0],[5,4],[6,0],[4,4],[8,2],[7,2],[10,0],[4,0,0]]
        game.rollNumber = 2
        game.frame = 10
        game.roll(3)
        expect(game.totalScore).toEqual(114)
        expect(game.frame).toEqual(10)
        expect(game.rollNumber).toEqual(3)
    });
    

    it("Last frame - should return 111 with no spare or strike at end", () => {
        const game = new Game()
        game.board = [[7,3],[5,2],[10,0],[5,4],[6,0],[4,4],[8,2],[7,2],[9,1],[4,0,0]]
        game.rollNumber = 2
        game.frame = 10
        game.roll(3)
        expect(game.totalScore).toEqual(111)
        expect(game.frame).toEqual(10)
        expect(game.rollNumber).toEqual(3)
    });
        

    it("Last frame - should return 111 with a spare at end", () => {
        const game = new Game()
        game.board = [[7,3],[5,2],[10,0],[5,4],[6,0],[4,4],[8,2],[7,2],[9,1],[1,9,0]]
        game.rollNumber = 3
        game.frame = 10
        game.roll(5)
        expect(game.totalScore).toEqual(116)
        expect(game.frame).toEqual(10)
        expect(game.rollNumber).toEqual(4)
    });

    it("Last frame - should return 140 with 3 strikes at the end", () => {
        const game = new Game()
        game.board = [[7,3],[5,2],[10,0],[5,4],[6,0],[4,4],[8,2],[7,2],[9,1],[10,10,0]]
        game.rollNumber = 3
        game.frame = 10
        game.roll(10)
        expect(game.totalScore).toEqual(140)
        expect(game.frame).toEqual(10)
        expect(game.rollNumber).toEqual(4)
    });

    it("Last frame - should return 129 with a spare and 1 strike at the end", () => {
        const game = new Game()
        game.board = [[7,3],[5,2],[10,0],[5,4],[6,0],[4,4],[8,2],[7,2],[9,1],[9,1,0]]
        game.rollNumber = 3
        game.frame = 10
        game.roll(10)
        expect(game.totalScore).toEqual(129)
        expect(game.frame).toEqual(10)
        expect(game.rollNumber).toEqual(4)
    });

    it("Last frame - should return 100 with all gutterballs at the end", () => {
        const game = new Game()
        game.board = [[7,3],[5,2],[10,0],[5,4],[6,0],[4,4],[8,2],[7,2],[9,1],[0,0,0]]
        game.rollNumber = 2
        game.frame = 10
        game.roll(0)
        expect(game.totalScore).toEqual(100)
        expect(game.frame).toEqual(10)
        expect(game.rollNumber).toEqual(3)
    });

    it("Last frame - should return finished = true if trying to roll a third time after the game is done", () => {
        const game = new Game()
        game.board = [[7,3],[5,2],[10,0],[5,4],[6,0],[4,4],[8,2],[7,2],[9,1],[0,0,0]]
        game.rollNumber = 3
        game.frame = 10
        game.roll(5)
        expect(game.finished).toEqual(true)
    });
});