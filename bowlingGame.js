class BowlingGame{
    constructor(){
        this.rolls = []
    }

    roll(pins){
        this.rolls.push(pins)
    }

    score(){
        let curr_score = 0;
        let each_roll = 0;

        for(let i=0; i<10; i++){
            const frameScore = this.rolls[each_roll] + this.rolls[each_roll + 1];

            if(frameScore === 10){
                curr_score += 10 + this.rolls[each_roll + 2]
            } else {
                curr_score += frameScore
            }
            
            each_roll += 2;
            
        }
        return curr_score;
    }
}

module.exports = BowlingGame;