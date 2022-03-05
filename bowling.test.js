const Bowling = require('./bowling')

describe("Bowling", () => {
    it('can return the score of 0 before any rolls', () => {
        const game = new Bowling;
        expect(game.score).toEqual(0);
    });

    it('when its rolled, the pins knocked down are added to the score', () => {
        const game = new Bowling;
        game.newRoll(2);
        game.newRoll(2);
        expect(game.score).toEqual(4);
    });

    it('for rolls under 10, it groups the rolls into pairs - frames', () => {
        const game = new Bowling;
        game.newRoll(1);
        game.newRoll(2);
        game.newRoll(3);
        expect(game.frame_no).toEqual(2);
    });

    it('has a method that can return score, after each frame', () => {
        const game = new Bowling;
        game.newRoll(1);
        game.newRoll(2);
        game.newRoll(3);
        game.newRoll(0);
        console.log(game.results);
        expect(game.getScore()).toBe(6);
    });
    
    it('returns a string informing that the game had ended, after the 10th frames has been scored', () =>{
        const game = new Bowling;
        for(i = 0; i < 21; i++){ 
            game.newRoll(0);
        };
        expect(game.frame_no).toEqual(11);
        expect(game.newRoll(0)).toEqual('The game is over');
    });

    it('recognises a spare', () =>{
        const game = new Bowling;
        game.newRoll(5);
        game.newRoll(5);
        expect(game.spare).toEqual(true);
    });

    it('recognises a strike', () =>{
        const game = new Bowling;
        game.newRoll(10);
        expect(game.strike).toEqual(true)
    });

    it('a strike only has one roll in frame', () => {
        const game = new Bowling;
        game.newRoll(10);
        game.newRoll(1);
        expect(game.frame_no).toEqual(2);
        expect(game.frame).toEqual([1]);
    });

    it('it calculates the spare bonus', () => {
        const game = new Bowling;
        game.newRoll(5);
        game.newRoll(5);
        game.newRoll(5);
        game.newRoll(0);
        expect(game.getScore()).toEqual(20);
    });

});