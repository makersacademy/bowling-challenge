class Bowling {

    constructor() {
       this.score = [];
        this.frame = 0;
    }

    newFrame(roll_1,roll_2) {
        this.frame ++
    }

    getScore() {
        return this.score;
    }

    checkFrameCount() {
        return this.frame;
    }







}

