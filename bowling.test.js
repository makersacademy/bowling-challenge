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
        expect(game.frameNo).toEqual(2);
    });

    it('has a method that can return score, after each frame', () => {
        const game = new Bowling;
        game.newRoll(1);
        game.newRoll(2);
        game.newRoll(3);
        game.newRoll(0);
        expect(game.getScore()).toEqual(6);
    });
    
    it('returns a  string after when rolls after game is over', () => {
        const game = new Bowling;
        for(i = 1; i < 21; i++){ 
            game.newRoll(0);
        };
       
        expect(game.newRoll(1)).toEqual('GAME OVER');
    });

    it('recognises a spare', () =>{
        const game = new Bowling;
        game.newRoll(5);
        game.newRoll(5);
        expect(game.spare).toEqual(true);
    });

    it('a strike only has one roll in frame', () => {
        const game = new Bowling;
        game.newRoll(10);
        game.newRoll(1);
        expect(game.frameNo).toEqual(2);
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

    it('it calculates the strike bonus', () => {
        const game = new Bowling;
        game.newRoll(10);
        game.newRoll(1);
        game.newRoll(1);
        expect(game.getScore()).toEqual(14);
    });

    it('allows an extra roll, when spare in 10th frame', () => {
        const game = new Bowling;
        for(i = 0; i < 18; i++){ 
           game.newRoll(0)
        };
        game.newRoll(5);
        game.newRoll(5);
        game.newRoll(5);
        expect(game.getScore()).toEqual(15);
    });

    it('takes a perfect game', () => {
        const game = new Bowling;
        for(i = 1; i < 13; i++){ 
            game.newRoll(10);
        };
    expect(game.getScore()).toEqual(300);
    });

    it('takes a perfect game, and will not accept any further rolls', () => {
        const game = new Bowling;
        for(i = 1; i < 13; i++){ 
            game.newRoll(10);
        };
        console.log(game.newRoll(1));
    expect(game.getScore()).toEqual(300);
    });
});