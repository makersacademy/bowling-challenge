const Game = require('./game');


describe ('Game', () => {
    it('#addBowl will accept a score which takes is placed in a frame', () => {
        game = new Game;
        game.addBowl(6)
        expect(game.frame.bowls[0]).toEqual(6)
    })

    it('#addBowl will close the frame after two add scores and push it to the game', () => {
        game = new Game;
        game.addBowl(6)
        game.addBowl(2)
        game.addBowl(4)
        expect(game.scorecard.scorecard[0]).toEqual([6,2])
        expect(game.frame.bowls[0]).toEqual(4)
    })

    it('#addBowl will return the total score', () =>{
        game = new Game
        game.addBowl(6)
        game.addBowl(2)
        game.addBowl(4)
        expect(game.addBowl(4)).toEqual(16)
    })

    it('there is a maximum of 10 rounds on the game', () => {
        game = new Game;
        game.addBowl(6)
        game.addBowl(2)
        game.addBowl(4)
        game.addBowl(6)
        game.addBowl(2)
        game.addBowl(4)
        game.addBowl(6)
        game.addBowl(2)
        game.addBowl(4)
        game.addBowl(6)
        game.addBowl(2)
        game.addBowl(4)
        game.addBowl(6)
        game.addBowl(2)
        game.addBowl(4)
        game.addBowl(6)
        game.addBowl(2)
        game.addBowl(4)
        game.addBowl(2)
        game.addBowl(4)
        expect(game.scorecard.scorecard.length).toEqual(10)
    })

    // it('a strike should automatically close the frame (10,0)')
})