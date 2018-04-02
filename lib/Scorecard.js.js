const Frame = require("./Frame.js");

function Scorecard() {
	this.frame = new Frame();
}

Scorecard.prototype.newFrame = function() {
	this.frame = new Frame();
};

module.exports = Scorecard;
