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
    describe("_isSpare()", () => {
        it("is been defined", () => {
            expect(game._isSpare).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "_isSpare")
            game._isSpare("frm_indx")
            expect(game._isSpare).toHaveBeenCalled()
            expect(game._isSpare).toHaveBeenCalledWith("frm_indx")
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
    describe("_isStrike()", () => {
        it("is been defined", () => {
            expect(game._isStrike).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "_isStrike")
            game._isStrike("frm_indx")
            expect(game._isStrike).toHaveBeenCalled()
            expect(game._isStrike).toHaveBeenCalledWith("frm_indx")
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
    describe("_spareScore()", () => {
        it("is been defined", () => {
            expect(game._spareScore).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "_spareScore")
            game._spareScore("frm_indx")
            expect(game._spareScore).toHaveBeenCalled()
            expect(game._spareScore).toHaveBeenCalledWith("frm_indx")
        })
    })
    describe("_strikeScore()", () => {
        it("is been defined", () => {
            expect(game._strikeScore).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "_strikeScore")
            game._strikeScore("frm_indx")
            expect(game._strikeScore).toHaveBeenCalled()
            expect(game._strikeScore).toHaveBeenCalledWith("frm_indx")
        })
    })
    describe("_frameScore()", () => {
        it("is been defined", () => {
            expect(game._frameScore).toBeDefined()
        })
        it("has an frm_indx as an argument", () => {
            spyOn(game, "_frameScore")
            game._frameScore("frm_indx")
            expect(game._frameScore).toHaveBeenCalled()
            expect(game._frameScore).toHaveBeenCalledWith("frm_indx")
        })
    })

})