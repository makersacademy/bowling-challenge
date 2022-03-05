const Game = require('./game');
describe("Game", () => {
    it("returns 0 for 20 Gutter games", () => {
        const game = new Game();
        for (let i = 0; i < 20; i++){
        game.roll(0);
        }
        console.log(game.score);
       expect(game.score).toEqual(0); 
    
    });


//   it("max score for perfect game ", () => {
//       const game = new Game;
//       expect(game.getMaxscore()).toEqual(300)
//   });

//   it("Frame contains 10 pins", () => {
//       const game = new Game;
//       expect(game.frame()).to
//   })

});