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
            expect(game.frame.length).toEqual(20)
        })
    })
    describe("score()", () => {
        it("is been defined", () => {
            expect(game.score).toBeDefined()
        })
        it("gets 20 when roll all ones", () => {
            for (var i = 1; i <= 20; i++)
                game.roll(1)
            expect(game.frame.length).toEqual(20)
            expect(game.score()).toEqual(20)
        })
        it("a perfect game", () => {
            for (var i = 1; i <= 12; i++)
                game.roll(10)
            expect(game.score()).toEqual(300)
        })
    })
    describe("isSpare()", () => {
        it("is been defined", () => {
            expect(game.isSpare).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "isSpare")
            game.isSpare("frm_indx")
            expect(game.isSpare).toHaveBeenCalled()
            expect(game.isSpare).toHaveBeenCalledWith("frm_indx")
        })
        it("rolls a spare", () => {
            game.roll(5)
            game.roll(5)
            game.roll(3)
            for (var i = 1; i <= 17; i++)
                game.roll(0)
            expect(game.score()).toEqual(16)
        })
        it("true", () => {
            for (var i = 1; i <= 21; i++)
                game.roll(5)
            expect(game.score()).toEqual(150)
        })
    })
    describe("isStrike()", () => {
        it("is been defined", () => {
            expect(game.isStrike).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "isStrike")
            game.isStrike("frm_indx")
            expect(game.isStrike).toHaveBeenCalled()
            expect(game.isStrike).toHaveBeenCalledWith("frm_indx")
        })
        it("true", () => {
            game.roll(10)
            game.roll(3)
            game.roll(4)
            for (var i = 1; i <= 16; i++)
                game.roll(0)
            expect(game.score()).toEqual(24)
        })
    })
    describe("spareScore()", () => {
        it("is been defined", () => {
            expect(game.spareScore).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "spareScore")
            game.spareScore("frm_indx")
            expect(game.spareScore).toHaveBeenCalled()
            expect(game.spareScore).toHaveBeenCalledWith("frm_indx")
        })
    })
    describe("strikeScore()", () => {
        it("is been defined", () => {
            expect(game.strikeScore).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "strikeScore")
            game.strikeScore("frm_indx")
            expect(game.strikeScore).toHaveBeenCalled()
            expect(game.strikeScore).toHaveBeenCalledWith("frm_indx")
        })
    })
    describe("frameScore()", () => {
        it("is been defined", () => {
            expect(game.frameScore).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "frameScore")
            game.frameScore("frm_indx")
            expect(game.frameScore).toHaveBeenCalled()
            expect(game.frameScore).toHaveBeenCalledWith("frm_indx")
        })
    })

})