
class Bowling{
    constructor() {
        this.score = 0;
        this.frame_no = 1;
        this.frame = [];
        this.max_frame = 11;
        this.spare = false
        this.results = [];
        this.extra_rolls = false;
    };


    newRoll(pins) {
        this.results.push(pins);
        if(this.extra_rolls === 1){
            this.finalFrameClac();
        } else if (this.frame_no >= this.max_frame) {
            this.extraRoll();
        } else {
            this.frameType();
        };
    };

    extraRoll() {
        let strike_ind = (this.results.length - 3);
        if(this.spare === true){
            this.finalFrameClac(); 
        } else if(this.extra_rolls < 0){
            this.finishGame();
        } else if(this.results[strike_ind] === 10){
            this.extra_rolls = 3;
            this.finalFrameClac();
        };
    };

    frameType() {
        let strike_ind = (this.results.length - 3);
        if(this.spare === true){
            this.spareBonusCalc(); 
        } else if((this.results[strike_ind] === 10) && (this.results.length >= 3)){
            this.strikeBonusCalc();
        } else {
            this.strikeChecker();
        };
    };

    strikeChecker() {
        let last = (this.results.length - 1);
        if(this.results[last] === 10){
            this.frameFinisher(); 
        } else {
            this.frame.push(this.results[last]);
            this.frameCompleteChecker();
        };
    };

    frameCompleteChecker() {
        let frlength = this.frame.length
        if(frlength === 2) {
            this.spareChecker();
        };
    };

    spareChecker() {
        let frame_score = this.frame[0] + this.frame[1];
        if( frame_score === 10 ){
            this.spareSwitch();
        } else {
            this.score += frame_score;
            this.frameFinisher();
        };
    };

    strikeBonusCalc() {
        let first_last = (this.results.length - 1);
        let second_last = (this.results.length - 2);
        this.score += (10 + this.results[first_last] + this.results[second_last]);
        this.strikeChecker();
    }

    spareSwitch() {
        this.spare = true;
        this.frameFinisher();
    };

    spareBonusCalc() {
        let spare_bonus = 10 + (this.results[this.results.length - 1]);
        this.score += spare_bonus;
        this.spare = false;
        if(this.frame_no < this.max_frame) {
            this.strikeChecker();
        };
    };

    finalFrameClac() {
        let strike_ind = (this.results.length - 3);
        let spare_bonus = 10 + (this.results[this.results.length - 1]);
        this.extra_rolls -= 2;

        if (this.spare === true) {
            this.score += spare_bonus;
            this.spare = false;
        } else if (this.results[strike_ind] === 10) {
            this.score += (10 + this.results[strike_ind + 1] + this.results[strike_ind + 2]);
        };
    };

    frameFinisher() {
        this.frame_no++;
        this.frame = [];
    };

    getScore() {
        return this.score;
    };

    finishGame() {
        this.results.pop();
        return "GAME OVER";
    };

};

module.exports = Bowling;