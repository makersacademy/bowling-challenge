// frame.test.js

const Frame = require('./frame');

describe('Frame', () => {
    //declare the variable frame which we will use in the tests
    let frame;

    beforeEach(() => {
        //before each test, create a new frame
        frame = new Frame();
    });
    //test the addRoll method
    test('adds a roll to the frame', () => {
        frame.addRoll(5);
        expect(frame.getScore()).toBe(5);
    });
    //test the isStrike method
    test('identifies a strike', () => {
        frame.addRoll(10);
        expect(frame.isStrike()).toBe(true);
    });
    //test the isSpare method
    test('identifies a spare', () => {
        frame.addRoll(5);
        frame.addRoll(5);
        expect(frame.isSpare()).toBe(true);
    });
    //test the getScore method with bonus
    test('calculates score with bonus', () => {
        //adds a roll of 5 pins and add anther roll of 5 pins
        frame.addRoll(5);
        frame.addRoll(5);
        //sets a bonus of 10 points
        frame.setBonus(10);
        expect(frame.getScore()).toBe(20);
    });
});