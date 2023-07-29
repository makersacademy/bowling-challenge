const Scorecard = require('../src/scorecard');

const emptyScorecard = new Scorecard(([]))
const gutterGame = new Scorecard([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]])
const partialScorecard = new Scorecard([[1,3],[1,0],[0,1],[3,0],[4,0],[1,1]])
const gameWithSpare = new Scorecard([[6,4],[2,0],[0,1]])

module.exports = Object.freeze({
    EMPTY_SCORECARD: emptyScorecard,
    GUTTER_GAME: gutterGame,
    PARTIAL_GAME: partialScorecard,
    SPARE: gameWithSpare
});