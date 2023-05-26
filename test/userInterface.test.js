// userInterface.test.js

const UserInterface = require('./userInterface');

let userInterface;

beforeEach(() => {
    userInterface = new UserInterface();
});

test('adds a frame to the scorecard', () => {
    userInterface.addFrame(3, 5);
    expect(userInterface.viewScore()).toBe(8);
});

test('calculates the total score', () => {
    userInterface.addFrame(5, 5);
    userInterface.addFrame(3, 4);
    //total score = 20
    expect(userInterface.viewScore()).toBe(20);
});