describe("In order to play a bowling game we need:", function() {

	describe("To set up the playing area", function() {

		var bowlingGame,
      player,
			pin,
			frame;

			beforeEach(function() {
				bowlingGame = new BowlingGame
        player = new Player
				pin = new Pin
				frame = new Frame
			})

		it("game should be defined", function() {
			expect(bowlingGame).toBeDefined()
		})

		it("should have pins", function() {
			expect(pin).toBeDefined()
		})

		it("a pin won't be knocked down when initialized", function() {
			expect(pin.isKnocked).toBeDefined()
		})

		it("should have a player", function() {
			expect(player).toBeDefined()
		})

		it("should be able to accept a player", function() {
			bowlingGame.addPlayer(player)
			expect(bowlingGame.player).toEqual(player)
		})

		it ("should have frames", function() {
			expect(frame).toBeDefined()
		})

		it ("all pins should be standing at the begining of each frame", function() {
			expect(frame.pinsDown).toEqual(0)
		})

		it("initial number of rolls per frame should be two", function() {
			expect(frame.remainingRolls).toEqual(2)
		})

		it("the number of frames per game by default is 10", function() {
			expect(bowlingGame.frames.length).toEqual(10)
		})

		it("the number of initial pins at the begining of a frame is 10", function() {
			expect(frame.pins.length).toEqual(10)
		})

		it("the player should be able to accept a name", function() {
			player.name = "Agata Golebiewska"
			bowlingGame.player = player
			expect(bowlingGame.player.name).toEqual("Agata Golebiewska")
		})

	})

	describe("some rules: ", function() {

		var bowlingGame,
    player,
		pin,
		frame;

		beforeEach(function() {
			bowlingGame = new BowlingGame
      player = new Player
			pin = new Pin
			frame = new Frame
		})

		function strikeAndChangeFrame(times) {
			for( var i = 0; i < times; i++) {
			bowlingGame.rollTheBall(10)
			bowlingGame.changeFrame() }
		}

		function moveToFrameTen() {
			for( var i = 0; i < 9; i++) {
				bowlingGame.changeFrame() }
		}

		function spareAndChangeFrame() {
			bowlingGame.rollTheBall(5)
			bowlingGame.rollTheBall(5)
			bowlingGame.changeFrame()
		}

		function spare() {
			bowlingGame.rollTheBall(6)
			bowlingGame.rollTheBall(4)
		}

		it("the game should start with the initial/first frame", function() {
			expect(bowlingGame.currentFrame).toEqual(bowlingGame.frames[0])
		})

		it("the game should know the number of the current frame", function() {
			expect(bowlingGame.frameNumber()).toEqual(1)
		})

		it("a pin can be knocked down", function() {
			pin.down()
			expect(pin.isKnocked).toEqual(true)
		})

		it("when we knock down pins the current frame knows number of knocked down pins", function() {
			bowlingGame.rollTheBall(4)
			expect(bowlingGame.currentFrame.numberPinsKnockOver()).toEqual(4)
		})

		it("when we knock down pins the current frame knows number of remaining pins", function() {
			bowlingGame.rollTheBall(4)
			expect(bowlingGame.currentFrame.numberRemainingPins()).toEqual(6)
		})

		it("should keep the count of the remaining pins after 2 rolls", function() {
			bowlingGame.rollTheBall(4)
			bowlingGame.rollTheBall(5)
			expect(bowlingGame.currentFrame.numberRemainingPins()).toEqual(1)
		})

		it("should keep the count of remaining rolls in the frame", function() {
			expect(bowlingGame.currentFrame.remainingRolls).toEqual(2)
			bowlingGame.rollTheBall(7)
			expect(bowlingGame.currentFrame.remainingRolls).toEqual(1)
		})

		it("should change the frame after a strike, even with one roll left", function() {
			bowlingGame.remainingRolls = 2
			bowlingGame.rollTheBall(10)
			expect(bowlingGame.currentFrame).not.toEqual(frame)
		})

		it("should be able to detect a spare", function() {
		  bowlingGame.rollTheBall(7)
			bowlingGame.rollTheBall(3)
			expect(bowlingGame.isSpare()).toBeTruthy()
		})

		it("should be able to detect a strike", function() {
			bowlingGame.rollTheBall(10)
			expect(bowlingGame.isStrike()).toBeTruthy()
		})

		it("should not assign a bonus if there are pins left at the end of the frame", function() {
			bowlingGame.rollTheBall(5)
			bowlingGame.rollTheBall(3)
			expect(bowlingGame.bonus).toEqual([1])
		})

		it("should assign a double bonus after a strike", function() {
			bowlingGame.rollTheBall(10)
			expect(bowlingGame.bonus).toEqual([2,2])
		})

		it("should assign a bonus after a spare", function() {
			spare()
			expect(bowlingGame.bonus).toEqual([2])
		})

		it("should update the score of the player after each roll", function() {
			bowlingGame.player = player
			bowlingGame.rollTheBall(7)
			expect(bowlingGame.player.score).toEqual(7)
		})

		it("should double the points after a strike", function() {
			bowlingGame.player = player
			strikeAndChangeFrame(1)
			bowlingGame.rollTheBall(5)
			expect(bowlingGame.player.score).toEqual(20)
		})

		it("should double the points after a spare", function() {
			bowlingGame.player = player
			spareAndChangeFrame()
			bowlingGame.rollTheBall(3)
			expect(bowlingGame.player.score).toEqual(16)
		})

		it("the maximum number of bonus rolls in a frame is 3", function() {
			strikeAndChangeFrame(5)
			expect(bowlingGame.player.score).toEqual(80)
		})

		it("knows it is the 10th frame", function() {
			moveToFrameTen()
			expect(bowlingGame.isFrameTen()).toBeTruthy()
		})

		it("knows it is a Perfect Game", function() {
			moveToFrameTen()
			bowlingGame.player.score = 300
			expect(bowlingGame.isPerfectGame()).toBeTruthy()
		})

		it("knows it is a Gutter Game", function() {
			moveToFrameTen()
			bowlingGame.player.score = 0
			expect(bowlingGame.isGutterGame()).toBeTruthy()
		})

	})
});
