
class Bowling{
    constructor() {
        this.score = 0;
        this.frameNo = 1;
        this.frame = [];
        this.maxFrame = 11;
        this.spare = false
        this.results = [];
        this.extraRolls = 0;
        this.gameOver = false
    };


    newRoll(pins) {
        if(this.gameOver === true){
            return 'GAME OVER';
        };
        
        this.results.push(pins);
        if(this.extraRolls === 1){
            this.gameOver = true
            this.finalFrameCalc();
        } else if (this.frameNo >= this.maxFrame) {
            return this.extraRoll();
        } else {
           this.frameType();
        };
    };

    extraRoll() {
        let strikeInd = (this.results.length - 3);
        if(this.spare === true){
            this.gameOver = true;
            this.finalFrameCalc(); 
        } else if(this.results[strikeInd] === 10){
            this.extraRolls = 3;
            this.finalFrameCalc();
        } else if(this.extraRolls === 0){
            this.gameOver = true;
            return this.newRoll(0);
        };
    };

    frameType() {
        let strikeInd = (this.results.length - 3);
        if(this.spare === true){
           this.spareBonusCalc(); 
        } else if((this.results[strikeInd] === 10) && (this.results.length >= 3)){
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
        let frLength = this.frame.length
        if(frLength === 2) {
            this.spareChecker();
        };
    };

    spareChecker() {
        let frameScore = this.frame[0] + this.frame[1];
        if( frameScore === 10 ){
            this.spareSwitch();
        } else {
            this.score += frameScore;
            this.frameFinisher();
        };
    };

    strikeBonusCalc() {
        let firstLast = (this.results.length - 1);
        let secondLast = (this.results.length - 2);
        this.score += (10 + this.results[firstLast] + this.results[secondLast]);
        this.strikeChecker();
    }

    spareSwitch() {
        this.spare = true;
        this.frameFinisher();
    };

    spareBonusCalc() {
        let spareBonus = 10 + (this.results[this.results.length - 1]);
        this.score += spareBonus;
        this.spare = false;
        if(this.frameNo < this.maxFrame) {
            this.strikeChecker();
        };
    };

    finalFrameCalc() {
        let strikeInd = (this.results.length - 3);
        let spareBonus = 10 + (this.results[this.results.length - 1]);
        this.extraRolls -= 2;

        if (this.spare === true) {
            this.score += spareBonus;
            this.spare = false;
        } else if (this.results[strikeInd] === 10) {
            this.score += (10 + this.results[strikeInd + 1] + this.results[strikeInd + 2]);
        };
    };

    frameFinisher() {
        this.frameNo++;
        this.frame = [];
    };

    getScore() {
        return this.score;
    };

};

module.exports = Bowling;