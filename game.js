const Frame = require('./frame');

class Game {
    constructor() {
        this.frame = new Frame
        this.all_rolls = []
        this.score = []
        this.score = 0
    }

    roll(pins) {
        this.frame.input_roll(pins)
            if(this.frame.complete() === true && this.frame.bonus() === false) {
                this.add_complete_frame_to_score()
            }    
            
            if(this.frame.complete() === true) {
                    this.push_complete_frame_to_all_rolls()
                    this.frame = new Frame
                }
    }

    push_complete_frame_to_all_rolls() {
        this.all_rolls.push(this.frame.rolls)
    }

    add_complete_frame_to_score() {
        this.score += (this.frame.sum_it(this.frame.rolls))
    }

    game_over() {
        if(this.all_rolls.length === 10) {
            return true
        }
        else {
            return false
        }
    }

    calulate_final_score() {
        // if(this.game_over() === true) {
            //iterate through the array and if an element is a 
            //strike add the next two rolls to it and if it's a spare
            //add the next roll to it
            //how????
        // }

    }

}

module.exports = Game 