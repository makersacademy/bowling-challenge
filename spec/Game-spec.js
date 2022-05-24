describe("bowlingGame", () => {
    it("rolls a 1 and a 2, the total score should equals 3", () => {
        let Game = new bowlingGame();
        Game.rollPin(1);
        Game.rollPin(2);
        expect(Game.calculateTotalScore()).toBe(3);
    })

    it("rolls a 2 four times, the total score should equals 8", () => {
        let Game = new bowlingGame();
        Game.rollPin(2);
        Game.rollPin(2);
        Game.rollPin(2);
        Game.rollPin(2);
        expect(Game.calculateTotalScore()).toBe(8);
    })
})