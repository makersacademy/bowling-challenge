
class Bowling{
    constructor() {
        this.score = 0;
        this.frame_no = 1;
        this.frame = [];
        this.max_frame = 11
        this.spare = false
        this.strike = false
        this.results = [];
    };

    newRoll(pins) {
        if(this.frame_no === this.max_frame) {
            return 'The game is over';
        } else {
            this.results.push(pins);
            this.frameType();
        };
    };

    frameType() {
        if(this.spare === true){
            this.spareBonusCalc(); 
        } else {
            this.strikeChecker();
        };
    };

    strikeChecker() {
        let last = (this.results.length - 1);
        if(this.results[last] === 10){
            this.strikeSwitch();
        } else {
            this.frame.push(this.results[last]);
            this.frameCompleteChecker();
        };
    };

    frameCompleteChecker() {
        let flength = this.frame.length
        if(flength === 2) {
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
   
    strikeSwitch() {
        this.strike = true;
        this.frameFinisher();
    };

    spareSwitch() {
        this.spare = true;
        this.frameFinisher();
    };

    spareBonusCalc() {
        let spare_bonus = 10 + (this.results[this.results.length - 1]);
        this.score += spare_bonus;
        this.spare = false;
        this.strikeChecker();
    };

    frameFinisher() {
        this.frame_no++;
        this.frame = [];
    };

    getScore() {
        return this.score;
    };

};

module.exports = Bowling;