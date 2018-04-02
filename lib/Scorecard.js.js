const Frame = require("./Frame.js");

function Scorecard() {
	this.frame = new Frame();
	this.score = [];
}

Scorecard.prototype.newFrame = function() {
	this.frame = new Frame();
};

Scorecard.prototype.addToScorecard = function() {
	this.score.push(this.frame.rolls[0] + this.frame.rolls[1]);
};
module.exports = Scorecard;
