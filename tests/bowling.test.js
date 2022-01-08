
import BowlingGame from "../main/bowling";

describe("BowlingGame", ()=>{
	let game;
	
	beforeEach(() => {
		game = new BowlingGame()
	});

	it("creates an instance of itself", ()=>{
		expect(game).toBeInstanceOf(BowlingGame);
	});

	it("starts with an empty score array", ()=>{
		expect(game.score.length).toEqual(10)
	});

	it('has a roll() method which takes number of pins', ()=>{
		expect(typeof game.roll).toBe("function")
	});

	it("In the 1st frame, roll() method will push the # of pins into the score's empty 2D array's 0th subArray", ()=>{
		Array.from({length: 2}, (x, i)=>{
			game.roll(4)
		})
		expect(game.score[0]).toEqual([4, 4])
	});

	it("In any frame, when roll() if 10 pins are hit, it will automatically advance to a next frame", ()=>{
		game.roll(10)
		expect(game.score[0]).toEqual([10])
		expect(game.frameNum).toEqual(2)
	});

	it('has an isStrike() method', ()=>{
		expect(typeof game.isStrike).toBe("function")
	});

	it("isStrike() method returns true if the current frame score contains a 10", ()=>{
		game.roll(10)
		let frameScore = game.score[0];
		expect(game.isStrike(frameScore)).toBe(true)
	})

	it('has an isSpare() method', ()=>{
		expect(typeof game.isSpare).toBe("function")
	});

	it("isSpare() method returns true if the current frame's combined score equals to 10", ()=>{
		game.roll(4) // first roll
		game.roll(6) // second roll
		let frameScore = game.score[0];
		expect(game.isSpare(frameScore)).toBe(true)
	})

	it("has a calculateScore method()", ()=>{
		expect(typeof game.calculateScore).toBe("function")
	})

})