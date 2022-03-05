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
        expect(game.getScore()).toBe(6);
    });
});