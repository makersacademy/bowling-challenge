const BowlingGame = require('./bowlingGame')
const Frame = require('./frame')

describe ("Tests for BowlingGame class", () => {
    it ("Bowling game returns the score of a single frame", () => {
        const game = new BowlingGame();
        const frame = new Frame();
        frame.roll(4)
        frame.roll(5)
        game.addFrame(frame)
        expect(game.returnGameScore()).toBe(9)
    })

    it ("Can add the score for 2 non strike or spare frames", () => {
        const game = new BowlingGame();
        const frame = new Frame();
        frame.roll(4)
        frame.roll(5)
        game.addFrame(frame)
        const frame2 = new Frame();
        frame2.roll(3)
        frame2.roll(4)
        game.addFrame(frame2)
        expect(game.returnGameScore()).toBe(16)
    })

    it ("Can add a bonus score after a Spare Frame", () => {
        const game = new BowlingGame();
        const frame = new Frame();
        frame.roll(5)
        frame.roll(5)
        game.addFrame(frame)
        const frame2 = new Frame();
        frame2.roll(3)
        frame2.roll(4)
        game.addFrame(frame2)
        expect(game.returnGameScore()).toBe(20)
    })
})