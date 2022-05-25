describe("bowlingGame", () => {
    it("rolls a 1 and a 2, the total score should equals 3", () => {
        let Game = new bowlingGame();
        Game.rollPin(1);
        Game.rollPin(2);
        expect(Game.calculateTotalScore()).toBe(3);
    })

    it("rolls a 2 four times, the total score should equals 8", () => {
        let Game = new bowlingGame();
        rollPins(Game, 2, 4)
        expect(Game.calculateTotalScore()).toBe(8);
    })

    it ("can roll a gutter game, zero 20 times", () => {
        let Game = new bowlingGame();
        rollPins(Game, 0, 20);
        expect(Game.calculateTotalScore()).toEqual(0)
    })

    function rollPins(Game, number, times)  {
        for(let i = 0; i < times; i++){
            Game.rollPin(number)
        }

    }
})