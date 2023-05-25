const BowlingApp = require('../bowlingApp');
const BowlingScoreSheet = require('../lib/bowlingScoreSheet');

describe('BowlingApp', () => {
    it('asks the user to enter number of knocked down pins', () => {
        mockIo = {};
        game = new BowlingApp(mockIo, new BowlingScoreSheet());
        

    });
});