class BowlingGame {
    constructor() {
        this.frames = [];
    }

    addFrame(frame) {
        this.frames.push(frame);
    }

    calculateBonusForSpares(frameIndex = 0) {
        if (frameIndex >= this.frames.length - 1) {
            // Base case: No more frames or last frame (no bonus possible)
            return 0;
        }

        const currentFrame = this.frames[frameIndex];
        const nextFrame = this.frames[frameIndex + 1];

        // Check if the current frame is a spare
        if (currentFrame[0] + currentFrame[1] === 10) {
            // Calculate the bonus by adding the first roll of the next frame
            const bonus = nextFrame[0];
            // Recursively calculate the bonus for the subsequent spares
            return bonus + this.calculateBonusForSpares(frameIndex + 1);
        } else {
            // No spare, bonus is 0
            return 0;
        }
    }

    getTotalScore() {
        let totalScore = 0;
        for (let i = 0; i < this.frames.length; i++) {
            const frame = this.frames[i];
            totalScore += frame[0] + frame[1];
        }
        return totalScore;
    }
}

// Example usage:
const game = new BowlingGame();
game.addFrame([3, 7]);  // Spare, bonus = 5
game.addFrame([5, 2]);  // Not a spare, bonus = 0
game.addFrame([8, 2]);  // Spare, bonus = 4
game.addFrame([4, 6]);  // Spare, bonus = 1
game.addFrame([1, 9]);  // Spare, bonus = 6
game.addFrame([6, 1]);  // Not a spare, bonus = 0
game.addFrame([2, 3]);  // Not a spare, bonus = 0
game.addFrame([7, 1]);  // Not a spare, bonus = 0
game.addFrame([9, 0]);  // Not a spare, bonus = 0
game.addFrame([8, 2, 5]);  // Spare, bonus = 5

const totalBonusForSpares = game.calculateBonusForSpares();
console.log("Total bonus for spares:", totalBonusForSpares);

const totalScore = game.getTotalScore();
console.log("Total score:", totalScore);
