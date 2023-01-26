class Game {

    constructor(){
        this.rolls = [];
        this.score = 0;
        this.throwIndex = 0;
    }

    roll(pins){
        this.rolls.push(pins);
    }

    scored(){
        this.score = 0
        this.throwIndex = 0
        for (let i = 0; i < 10; i++){
            if (this.strike(this.throwIndex)) {
                this.score += 10 + this.strike_bonus(this.throwIndex)
                this.throwIndex += 1
            } else if (this.spare(this.throwIndex)){
                this.score += 10 + this.spare_bonus(this.throwIndex)
                this.throwIndex += 2
            } else {
                this.score += this.rolls[this.throwIndex] + this.rolls[this.throwIndex + 1]
                this.throwIndex += 2
            }
        }
        return this.score
    }
    

    strike(throwIndex){
       return this.rolls[this.throwIndex] === 10
    }

    spare(throwIndex){
       return this.rolls[this.throwIndex] + this.rolls[this.throwIndex + 1] === 10
    }

    strike_bonus(throwIndex){
        return this.rolls[this.throwIndex + 1] + this.rolls[this.throwIndex + 2]
     }

    spare_bonus(throwIndex){
       return this.rolls[this.throwIndex + 2]
    }

}

module.exports = Game;