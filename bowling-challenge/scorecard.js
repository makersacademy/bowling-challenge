class Scorecard {

    constructor(player) {
        this.player = player;
        this.record = [];
        this.score = 0;
        this.gameComplete = false;
        this.bonus = 0;
    }

    get getRecord() {
        return this.record;
    }

    frame(roll_one, roll_two, roll_three) {
        if (this.record.length != 9) {
            this.record.push([roll_one, roll_two]);
        } else {
            this.record.push([roll_one, roll_two, roll_three]);
            this.gameComplete = true;
        }
    }

    calculateScore() {
        let frames = 0;
        this.score = 0;
        if (this.gameComplete == true) {
            frames = 9;
        } else {
            frames = this.record.length;
        }

        // total frames 1-9
        this.bonus = 0
        for (let i = 0; i < frames; i++) {
            this.addScore(this.record[i]);
        }

        if (this.record.length < 10) {
            return this.score;
        }
        
        this.tallyTenthFrame(this.record[9]);
        console.log(this.player + ", your final score is: " + this.score);
        
        return this.score;
    }

    addScore(roll) {
        
        let multiplier = this.getBonus();
        if(roll[0] == 'X') {
            
            this.score += 10 * multiplier;
            this.bonus += 2;
        } else if (roll[1] == '/') {
            if (multiplier == 2) {
                this.score += roll[0];
            }
            
            multiplier = this.getBonus();
            this.score += 10 * multiplier;
            this.bonus += 1;
        } else {
            this.score += roll[0] * multiplier;
            
            multiplier = this.getBonus();
            this.score += roll[1] * multiplier;
        }
    }

    getBonus() {
        
        if (this.bonus == 3) {
            this.bonus -= 2;
            return 3;
        } else if (this.bonus > 0) {
            this.bonus--;
            return 2;
        } else {
            return 1;
        }
    }

    tallyTenthFrame(roll) {
        
        let multiplier = 0;
        for (let j = 0; j < roll.length; j++) {
            if (j != 2) {
                multiplier = this.getBonus();
            } else {
                multiplier = 1;
            }

            if  (this.checkPefectFinalFrame(roll) && multiplier > 1) {
                this.score += 10 * multiplier + 30;
                return ;
            } else if (this.checkPefectFinalFrame(roll)) {
                this.score += 30;
                return;
            }

            if(roll[j] == 'X') {
                this.score += 10 * multiplier;
            } else if (roll[j] == '/') {
                this.score += (10 - roll[j-1]) * multiplier;
                this.bonus += 1;
            } else if (roll[j] != undefined) {
                this.score += roll[j] * multiplier;
            }
        }
    }

    checkPefectFinalFrame(roll) {
        if (JSON.stringify(roll) == JSON.stringify(['X', 'X', 'X'])) {
            return true;
        }

        return false;
    }


}

module.exports = Scorecard