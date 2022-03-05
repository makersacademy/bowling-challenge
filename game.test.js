const Game = require('./game');
describe("Game", () => {
    it("returns 0 for 20 Gutter games", () => {
        const game = new Game();
        for (let i = 0; i < 20; i++){
        game.roll(0);
        }
    
       expect(game.score).toEqual(0); 
    
    });

    it("returns 20 for 20  games", () => {
        const game = new Game();
        for (let i = 0; i < 20; i++){
        game.roll(1);
        }
    
       expect(game.score).toEqual(20); 
    
    });

    it("returns score ", () => {
        const game = new Game();
        game.roll(5);
        game.roll(4);
        game.roll(5)
        for (let i = 0; i < 17; i++){
            game.roll(1);
            }
            expect(game.score).toEqual(31); 
    })

    it("adds bonus when spare", () => {
        const game = new Game();
        game.roll(5);
        game.roll(5);
        game.roll(5)
        for (let i = 0; i < 17; i++){
            game.roll(1);
            }
            expect(game.score).toEqual(37); 
    })

//   it("max score for perfect game ", () => {
//       const game = new Game;
//       expect(game.getMaxscore()).toEqual(300)
//   });

//   it("Frame contains 10 pins", () => {
//       const game = new Game;
//       expect(game.frame()).to
//   })

});