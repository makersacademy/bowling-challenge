
const Frame = require('./frame');

describe ("Testing the Frame class", () => {
    it ("Can return the score of a single Frame", () => {
        const frameOne = new Frame()
        frameOne.roll(6)
        frameOne.roll(2)
        expect(frameOne.returnFrameScore()).toBe(8);
    })

    it ("Does not allow you to enter a score of higher than 10", () => {
        const frameOne = new Frame()
        frameOne.roll(6)
        frameOne.roll(6)
        expect(frameOne.returnFrameScore()).toBe(6);
    })

    it ("Recognises a Strike", () => {
        const frameOne = new Frame()
        frameOne.roll(10)
        expect(frameOne.checkForStrike()).toBeTruthy()
    })

    it ("Recognises a Spare", () => {
        const frameOne = new Frame()
        frameOne.roll(7)
        frameOne.roll(3)
        expect(frameOne.checkForSpare()).toBeTruthy()
    })

    it ("Will return false for spare and strike if neither are scored", () => {
        const frameOne = new Frame()
        frameOne.roll(7)
        frameOne.roll(2)
        expect(frameOne.checkForStrike()).toBeFalsy()
        expect(frameOne.checkForSpare()).toBeFalsy()
    })

    it ("Can add a bonus score after a Strike", () => {
        const frameOne = new Frame()
        frameOne.roll(10)
        frameOne.addBonus(9)
        expect(frameOne.returnFrameScore()).toBe(19)
    })

    it ("Cannot add a bonus score after a score of less than 10", () => {
        const frameOne = new Frame()
        frameOne.roll(5)
        frameOne.addBonus(9)
        expect(frameOne.returnFrameScore()).toBe(5)
    })

    it ("Can return rollOne and rollTwo scores", () => {
        const frameOne = new Frame()
        frameOne.roll(5)
        frameOne.roll(4)
        expect(frameOne.returnRollOne()).toBe(5)
        expect(frameOne.returnRollTwo()).toBe(4)
    })


})