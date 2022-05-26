class bowlingGame {
    #rolls;

    constructor() {
        this.#rolls = [];
    }

    rollPin(pins) {
        this.#rolls.push(pins)
    }

    #calculateSpareBonus(){
        let numberOfFrames = Math.floor(this.#rolls.length / 2)
        let spareBonus = 0

        for (let i = 0; i < numberOfFrames; i++){
            let frameStartingIndex = i * 2;
            let frameRoll1 = this.#rolls[frameStartingIndex];
            let frameRoll2 = this.#rolls[frameStartingIndex + 1];

            if(frameRoll1 + frameRoll2 === 10){
                spareBonus += this.#rolls[frameStartingIndex + 2];
            }

        }
        
        return spareBonus;

    }

    #calculateStrikeBonus(){
        let numberOfFrames = Math.floor(this.#rolls.length / 2)
        let strikeBonus = 0

        for (let i = 0; i < numberOfFrames; i++){
            let frameStartingIndex = i * 2;
            let frameRoll1 = this.#rolls[frameStartingIndex];

            if(frameRoll1  === 10){
                strikeBonus += this.#rolls[frameStartingIndex + 1] + this.#rolls[frameStartingIndex + 2];
            }

        }
        
        return strikeBonus;
    }
    calculateTotalScore(){
        let totalScore = this.#rolls.reduce((acc, curr) => acc + curr)
         totalScore += this.#calculateSpareBonus() + this.#calculateStrikeBonus();
        return totalScore 
    }
}