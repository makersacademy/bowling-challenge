class scoreBoard {

    constructor() {
        this.frames = { 'frame01': 0, 'frame02': 0}
        this.rolls = { 'roll01': 0, 'roll02': 0}
        this.totalScore = 0
        this.notes = ""
    }

    calculateScore() {
       return this.totalScore
    }

    game_01() {
        for (let i = 1; i <= 2; i++) {
            if (i == 1) {
                this.frames['frame01'] = i
                this.frames['frame02'] = i
                this.rolls['roll01'] = i
            } else {
                this.rolls['roll02'] = i
            }
        }
        return [this.frames, this.rolls]
    }   

    noted () {
        note01 = [`Spare: 10 pins plus bonus of 5 from next roll (roll 1 of frame 4)`]
        note02 = ['Strike']
        note03 = [`Strike:10 pins plus bonus of 1 from next frame (rolls 1 and 2) from frame 6`]
        note04 = ['Bad luck']
        note05 = ['Spare']
        note06 = ['Extra roll due to spare in the 10th frame']
    }
}

module.exports.scoreBoard = scoreBoard

