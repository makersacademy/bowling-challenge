
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
		expect(game.score.length).toEqual(10)
	})

	it('has a roll() method which takes number of pins', ()=>{
		expect(typeof game.roll).toBe("function")
	})

	it("In the 1st frame, roll() method will push the # of pins into the score's empty 2D array's 0th subArray", ()=>{
		Array.from({length: 2}, (x, i)=>{
			game.roll(4)
		})
		expect(game.score[0]).toEqual([4, 4])
	})


})