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
        game.roll(5);
        for (let i = 0; i < 17; i++){
            game.roll(1);
            }
            expect(game.score).toEqual(37); 
    })

    it("adds bonus when strike", () => {
        const game = new Game();
        game.roll(10);
        game.roll(5);
        game.roll(4);
        for (let i = 0; i < 16; i++){
            game.roll(1);
            }
            expect(game.score).toEqual(44);
    })

    it(" score for 2 strikes", () => {
        const game = new Game();
        game.roll(10);
        game.roll(10);
        game.roll(5);
        game.roll(4);
        for (let i = 0; i < 14; i++){
            game.roll(1);
            }
            expect(game.score).toEqual(67);
    })

    it(" score for spares and strikes", () => {
        const game = new Game();
        game.roll(10);
        game.roll(5);
        game.roll(5);
        game.roll(4);
        for (let i = 0; i < 15; i++){
            game.roll(1);
            }
            expect(game.score).toEqual(53);
    });

    it(" Perfect game", () => {
    const game = new Game();
    for (let i = 0; i < 12; i++){
        game.roll(10);
        }
        expect(game.score).toEqual(300);
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