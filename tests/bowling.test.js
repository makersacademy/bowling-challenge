
import BowlingGame from "../main/bowling";

describe("BowlingGame", ()=>{
	let game;
	
	beforeEach(() => {
		game = new BowlingGame()
	});

	it("creates an instance of itself", ()=>{
		expect(game).toBeInstanceOf(BowlingGame);
	})

	it("starts with an empty score array", ()=>{
		expect(game.score.length).toEqual(0)
	})
})