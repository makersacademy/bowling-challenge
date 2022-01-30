const R = require('ramda');
class BowlingGame{
    constructor(){
        this.rolls = [];
        // this.score = score;
    }

    getRolls(){
        return this.rolls;
    }

    roll(roll){
        this.rolls += roll;
    }

    getScore(){
        let res = 0;
        let rollIndex = 0;
        
        for (let frameIndex=0; frameIndex<10; frameIndex++){
            let frameScore = (parseInt(this.rolls[rollIndex]) + parseInt(this.rolls[rollIndex+1]));
            

            if(frameScore ===10){
              res += 10 + parseInt(this.rolls[rollIndex+2]);
            }
            else if (frameScore ===20){
                return res === 300;
                abort = true;
            }

            else{
              res += frameScore;
            }
            rollIndex+=2;
        }
        return res;
    }
    

}

module.exports = BowlingGame;