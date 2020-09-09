export class Frame {
    constructor() {
        this.pins = 10;
        this.shots = 0;
        this.firstshot = null;
        this.secondshot = null;
        this.score = 0;
    }

    getShot(hitpins) {
        this._updateFrames(hitpins);
        this.shots++;
    }

    _updateFrames(hitpins) {
        this.pins -= hitpins;
        this.score += hitpins;
        if (this.firstshot === null) {
            this.firstshot = hitpins;
        } else {
            this.secondshot = hitpins;
        }
    }

    isSpare() {
        if (((this.firstShot + this.secondShot) === 10) && this.secondShot !== null) { return true; }
    }

    isStrike() {
        if (this.firstShot === 10) { return true; }
    }
}

//module.exports = Frame;

export default Frame;