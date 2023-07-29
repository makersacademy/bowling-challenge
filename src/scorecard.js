module.exports = class Scorecard {
    constructor(frames) {
        this.frames = frames;
    }

    addFrame(frame){
        if (this.#sum(frame) > 10){
            throw new Error("Frame Invalid")
        }
        if (this.frames.length == 10) {
            throw new Error("You can only have ten frames on a scorecard")
        }
        this.frames.push(frame)
    }

    total() {
        let sumOfFrames = this.frames.flatMap(frame => this.#sum(frame))
        let score = this.#sum(sumOfFrames)
        return score;
        // responsibility: to calculate score of scorecard return integer
    }

    #sum(frame){
        return frame.reduce((a, b) => a + b, 0);
    }
}