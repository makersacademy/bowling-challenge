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
        let sumOfFrames = this.frames.map(frame => this.#sum(frame))
        let score = this.#sum(sumOfFrames)

        const bonus = this.#bonus(0)
        return score + bonus;
    }


    #bonus(frameIndex){
        // if on end frame no bonus
        if (frameIndex >= this.frames.length - 1) {
            return 0;
        }
        const currentFrame = this.frames[frameIndex];
        const nextFrame = this.frames[frameIndex + 1];

        if(frameIndex >= this.frames.length - 2) {
            return this.#finalFrame(currentFrame, nextFrame);
        }

        // Is current frame a double
        if (currentFrame[0] === 10 && nextFrame[0] === 10){
            const sumOfBonusFrame = this.frames[frameIndex+2][0]
            // streak
            if(frameIndex >= this.frames.length - 1){
                return 10 + this.#bonus(frameIndex + 1)
            }
            else {
                return 10 + sumOfBonusFrame + this.#bonus(frameIndex + 1)
            }
        }

        // Is current frame a strike ?
        if (currentFrame[0] === 10) {
            const bonus = nextFrame[0] + nextFrame[1];

            return bonus + this.#bonus(frameIndex + 1);
        }
        // if current frame is a spare
        if (currentFrame[0] + currentFrame[1] === 10) {
            const bonus = nextFrame[0];
            return bonus + this.#bonus(frameIndex + 1);
        }
        return this.#bonus(frameIndex + 1);
    }

    #sum(frame){
        return frame.reduce((a, b) => a + b, 0)
    }

    #finalFrame(currentFrame, nextFrame) {
        // turkey or streak
        if (currentFrame[0] === 10 && nextFrame[0] === 10 && nextFrame[1] === 10){
            console.log(`Turkey for frame ${currentFrame}`)
            return 20;
        }
        // double
        if (currentFrame[0] === 10 && nextFrame[0] === 10){
            console.log(`Double for frame ${currentFrame}`)
            return 10 + nextFrame[1];
        }
        // strike
        if(currentFrame[0] === 10){
            return nextFrame[0] + nextFrame[1]
        }
        // spare
        if (currentFrame[0] + currentFrame[1] === 10) {
            return nextFrame[0]
        }

        return 0;
    }
}
