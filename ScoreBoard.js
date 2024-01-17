// import random just to play around

class ScoreBoard {
    constructor() {
        this.frames = 0
        this.rolls = 0
        this.totalScore = 0
        this.notes = ""

    }
    game_logict(play) {
        this.frame += 1
        this.rolls += 1
        this.totalScore = 0
    }
    
    calculateScore() {
       return this.totalScore
    }
}