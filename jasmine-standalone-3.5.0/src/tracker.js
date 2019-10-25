'use strict';

function Tracker(){
this.ROLLS = [];
};

Tracker.prototype.addroll = function(roll){
  this.ROLLS.push(roll);
};
