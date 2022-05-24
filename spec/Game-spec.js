describe("bowlingGame", () => {
    it("rolls a 1 and a 2, the total score equals 3", () => {
        let Game = new bowlingGame();
        Game.rollPin(1);
        Game.rollPin(2);
        expect(Game.calculateTotalScore()).toBe(3);
    })
})