class bowlingGame {
    #totalScore;

    constructor() {
        this.#totalScore = 0;
    }

    rollPin(pins) {
        this.#totalScore += pins
    }

    calculateTotalScore(){
       return this.#totalScore;
    }
}