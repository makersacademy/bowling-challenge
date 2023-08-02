module.exports = class Scorecard {
    constructor(frames) {
        this.frames = frames;
    }

    addFrame(frame){
        if (this.frames.length == 10) {
            throw new Error("You can only have ten frames on a scorecard")
        }
        this.frames.push(frame)
    }

    total() {
        let sumOfFrames = this.frames.map(frame => this.#sum(frame))
        let score = this.#sum(sumOfFrames)

        const bonus = this.#bonus(0)
        return score + bonus;
    }


    #bonus(frameIndex){
        if (frameIndex >= this.frames.length - 1) {
            return 0;
        }
        const currentFrame = this.frames[frameIndex];
        const nextFrame = this.frames[frameIndex + 1];

        if(frameIndex >= this.frames.length - 2) {
            return this.#finalFrame(currentFrame, nextFrame);
        }

        if (this.#isStreak(currentFrame, nextFrame)){
                const frameBonus = this.frames[frameIndex+2][0]
                return 10 + frameBonus + this.#bonus(frameIndex + 1)
        }
        if (this.#isStrike(currentFrame)) {
            const bonus = nextFrame[0] + nextFrame[1];
            return bonus + this.#bonus(frameIndex + 1);
        }
        if (this.#isSpare(currentFrame)) {
            const bonus = nextFrame[0];
            return bonus + this.#bonus(frameIndex + 1);
        }
        return this.#bonus(frameIndex + 1);
    }

    #finalFrame(currentFrame, nextFrame) {
        if (this.#isStreak(currentFrame, nextFrame)){
            return 10 + nextFrame[1];
        }
        if(this.#isStrike(currentFrame, nextFrame)){
            return nextFrame[0] + nextFrame[1]
        }
        if (this.#isSpare(currentFrame)) {
            return nextFrame[0]
        }
        return 0;
    }

    #sum(frame){return frame.reduce((a, b) => a + b, 0)}

    #isStreak(currentFrame, nextFrame){return currentFrame[0] === 10 && nextFrame[0] === 10;}

    #isStrike(currentFrame){return currentFrame[0] === 10;}

    #isSpare(currentFrame){return currentFrame[0] + currentFrame[1] === 10;}
}

