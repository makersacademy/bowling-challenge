describe("Bowling Game", () => {
    var game
    beforeEach(() => {
        game = new BowlingGame
    })
    describe("roll()", () => {
        it("is been defined", () => {
            expect(game.roll).toBeDefined()
        })
        it("has pins as an argument", () => {
            spyOn(game, "roll")
            game.roll("pins")
            expect(game.roll).toHaveBeenCalled()
            expect(game.roll).toHaveBeenCalledWith("pins")
        })
        it("can add a roll to the rollStorage", () => {
            for (var i = 1; i <= 20; i++)
                game.roll(0)
            expect(game.array.length).toEqual(20)
        })
    })
    describe("score()", () => {
        it("is been defined", () => {
            expect(game.score).toBeDefined()
        })
        it("gets 20 when roll all ones", () => {
            for (var i = 1; i <= 20; i++)
                game.roll(1)
            expect(game.array.length).toEqual(20)
            expect(game.score()).toEqual(20)
        })

    })
    describe("isSpare()", () => {
        it("is been defined", () => {
            expect(game.isSpare).toBeDefined()
        })
        it("has an index as an argument", () => {
            spyOn(game, "isSpare")
            game.isSpare("index")
            expect(game.isSpare).toHaveBeenCalled()
            expect(game.isSpare).toHaveBeenCalledWith("index")
        })
        it("rolls a spare", () => {
            game.roll(5)
            game.roll(5)
            game.roll(3)
            for (var i = 1; i <= 17; i++)
                game.roll(0)
            expect(game.score()).toEqual(16)
        })
    })
})