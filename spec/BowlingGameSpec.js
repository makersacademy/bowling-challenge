describe("Bowling Game", () => {
    var game
    beforeEach(() => {
        game = new BowlingGame
    })
    describe("roll", () => {
        it("is been defined", () => {
            expect(game.roll).toBeDefined();
        })
        it("can add a roll to the rollStorage", () => {
            for (var roll = 1; roll <= 20; roll++)
                game.roll(0)
            expect(game.rollStorage.length).toEqual(20)
        })
    })

})