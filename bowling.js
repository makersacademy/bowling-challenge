
class Bowling{
    constructor() {
        this.score = 0;
        this.frame_no = 1;
        this.frame = [];

    };


    frameDecider() {
        let frame_score = this.frame[0] + this.frame[1];
            this.score += frame_score;
            this.frame_no++;
            this.frame = [];

    };

    newRoll(pins) {
        this.frame.push(pins);
        if(this.frame.length === 2) {
            let frame_score = this.frame[0] + this.frame[1];
            this.frameDecider();
        };
    };
    
    
    getScore() {
        return this.score;
    }

};

module.exports = Bowling;