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

    it ("can roll a gutter game, zero 20 times should equal 0", () => {
        let Game = new bowlingGame();
        rollPins(Game, 0, 20);
        expect(Game.calculateTotalScore()).toEqual(0)
    })

    it("rolls a spare game, when i roll 1 4 and 6, then a 2 and 3 should equal 17", () => {
        let Game = new bowlingGame();
        Game.rollPin(4);
        Game.rollPin(6);
        Game.rollPin(2);
        Game.rollPin(3);
        expect(Game.calculateTotalScore()).toEqual(17)
    })
    function rollPins(Game, number, times)  {
        for(let i = 0; i < times; i++){
            Game.rollPin(number)
        }

    }
})