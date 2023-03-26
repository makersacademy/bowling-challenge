const Game = require('./game');

describe('game', () => {
    let game;

    beforeEach(() =>{
     game = new Game();
    }),

    it('should add the number of knoced pins', () => {
        game.roll(5);
        expect(game.rolls).toEqual([5]);
    })
    it('has a gutter game', () => {
        for (let i = 0; i < 20; i++){
         game.roll(0);
        }
        expect(game.scored()).toBe(0)
    });
    it('each throw knocks only one pin', () => {
        for (let i = 0; i < 20; i++){
         game.roll(1);
        }
        expect(game.scored()).toEqual(20);
    });
    it('has a strike', () => {
        game.roll(10);
        game.roll(1);
        game.roll(2);
        for (let i = 0; i < 16; i++){
         game.roll(0);
        };
        expect(game.scored()).toEqual(16);
    });
    it('has a spare', () =>{
        game.roll(3);
        game.roll(7);
        game.roll(7);
        game.roll(2);
        for (let i = 0; i < 16; i ++){
            game.roll(0);
        };
        expect(game.scored()).toEqual(26)
    });
    it('has a frame without spare or strike', () => {
        game.roll(2)
        game.roll(3)
        for (let i = 0; i < 18; i ++){
            game.roll(0);
        };
        expect(game.scored()).toEqual(5);
    });
    it('has a perfect game', () => {
        for ( let i = 0; i < 12; i++){
            game.roll(10);
        };
        expect(game.scored()).toEqual(300);
    });
});