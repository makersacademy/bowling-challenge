const ScoreCard = require('./model/scoreCard.js');
const ScoreCardView = require('./scoreCardView.js');

const model = new ScoreCard;
const view = new ScoreCardView(model);

console.log('Hello')