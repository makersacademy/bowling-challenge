//when all else fails, write code like this!
var Bowling = function(){
  this.roll1 = 0;
  this.roll2 = 0;
  this.roll3 = 0;
  this.roll4 = 0;
  this.roll5 = 0;
  this.roll6 = 0;
  this.roll7 = 0;
  this.roll8 = 0;
  this.roll9 = 0;
  this.roll10 = 0;
  this.roll11 = 0;
  this.roll12 = 0;
  this.roll13 = 0;
  this.roll14 = 0;
  this.roll15 = 0;
  this.roll16 = 0;
  this.roll17 = 0;
  this.roll18 = 0;
  this.roll19 = 0;
  this.roll20 = 0;
  this.roll21 = 0;
  this.frameOneTotal = 0;
  this.frameTwoTotal = 0;
  this.frameThreeTotal = 0;
  this.frameFourTotal = 0;
  this.frameFiveTotal = 0;
  this.frameSixTotal = 0;
  this.frameSevenTotal = 0;
  this.frameEightTotal = 0;
  this.frameNineTotal = 0;
  this.frameTenTotal = 0;
  this.totalStrikeBonus1 = 0;
  this.totalStrikeBonus2 = 0;
  this.totalStrikeBonus3 = 0;
  this.totalStrikeBonus4 = 0;
  this.totalStrikeBonus5 = 0;
  this.totalStrikeBonus6 = 0;
  this.totalStrikeBonus7 = 0;
  this.totalStrikeBonus8 = 0;
  this.totalStrikeBonus9 = 0;
  this.totalSpareBonus1 = 0;
  this.totalSpareBonus2 = 0;
  this.totalSpareBonus3 = 0;
  this.totalSpareBonus4 = 0;
  this.totalSpareBonus5 = 0;
  this.totalSpareBonus6 = 0;
  this.totalSpareBonus7 = 0;
  this.totalSpareBonus8 = 0;
  this.totalSpareBonus9 = 0;
  this.maxTotal = 0;
};

Bowling.prototype.frameOneFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll1 = value1,
  this.frameOneTotal += value1,
  this.maxTotal += value1}
};

Bowling.prototype.frameOneSecondRoll = function(value){
  var value1 = Number(value)
  if (value1 + this.roll1 > 10 || this.roll1 === 10) {alert("it's not even possible to knockdown more than 10 pins in one frame, silly")}
  else {this.roll2 = value1,
  this.frameOneTotal += value1,
  this.maxTotal += value1}
};


Bowling.prototype.frameTwoFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll3 = value1,
  this.frameTwoTotal += value1,
  this.maxTotal += value1
  if (this.roll1 === 10 && this.roll2 === 0) {this.totalStrikeBonus1 += this.roll3, this.frameOneTotal += value1, this.maxTotal += value1}
  if ((this.roll1 + this.roll2) === 10 && this.roll1 < 10) {this.totalSpareBonus1 = this.roll3, this.frameOneTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameTwoSecondRoll = function(value){
  var value1 = Number(value)
  if (value1 + this.roll3 > 10 || this.roll3 === 10) {alert("it's not even possible to knockdown more than 10 pins in one frame, silly")}
  else {this.roll4 = value1,
  this.frameTwoTotal += value1,
  this.maxTotal += value1
  if (this.roll1 === 10) {this.totalStrikeBonus1 += this.roll4, this.frameOneTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameThreeFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll5 = value1,
  this.frameThreeTotal += value1,
  this.maxTotal += value1
  if (this.roll1 === 10 && this.roll3 === 10) {this.totalStrikeBonus1 += this.roll5, this.frameOneTotal += value1, this.maxTotal += value1}
  if (this.roll3 === 10 && this.roll4 === 0) {this.totalStrikeBonus2 += this.roll5, this.frameTwoTotal += value1, this.maxTotal += value1}
  if ((this.roll3 + this.roll4) === 10 && this.roll3 < 10) {this.totalSpareBonus2 = this.roll5, this.frameTwoTotal += value1, this.maxTotal += value1}}

};

Bowling.prototype.frameThreeSecondRoll = function(value){
  var value1 = Number(value)
  if (value1 + this.roll5 > 10 || this.roll5 === 10) {alert("it's not even possible to knockdown more than 10 pins in one frame, silly")}
  else {this.roll6 = value1,
  this.frameThreeTotal += value1,
  this.maxTotal += value1
  if (this.roll3 === 10) {this.totalStrikeBonus2 += this.roll6, this.frameTwoTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameFourFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll7 = value1,
  this.frameFourTotal += value1,
  this.maxTotal += value1
  if (this.roll3 === 10 && this.roll5 === 10) {this.totalStrikeBonus2 += this.roll7, this.frameTwoTotal += value1, this.maxTotal += value1}
  if (this.roll5 === 10 && this.roll6 === 0) {this.totalStrikeBonus3 += this.roll7, this.frameThreeTotal += value1, this.maxTotal += value1}
  if ((this.roll5 + this.roll6) === 10 && this.roll5 < 10) {this.totalSpareBonus3 = this.roll7, this.frameThreeTotal += value1, this.maxTotal += value1}}


};

Bowling.prototype.frameFourSecondRoll = function(value){
  var value1 = Number(value)
  if (value1 + this.roll7 > 10 || this.roll7 === 10) {alert("it's not even possible to knockdown more than 10 pins in one frame, silly")}
  else {this.roll8 = value1,
  this.frameFourTotal += value1,
  this.maxTotal += value1
  if (this.roll5 === 10) {this.totalStrikeBonus3 += this.roll8, this.frameThreeTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameFiveFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll9 = value1,
  this.frameFiveTotal += value1,
  this.maxTotal += value1
  if (this.roll5 === 10 && this.roll7 === 10) {this.totalStrikeBonus3 += this.roll9, this.frameThreeTotal += value1, this.maxTotal += value1}
  if (this.roll7 === 10 && this.roll8 === 0) {this.totalStrikeBonus4 += this.roll9, this.frameFourTotal += value1, this.maxTotal += value1}
  if ((this.roll7 + this.roll8) === 10 && this.roll7 < 10) {this.totalSpareBonus4 = this.roll9, this.frameFourTotal += value1, this.maxTotal += value1}}

};

Bowling.prototype.frameFiveSecondRoll = function(value){
  var value1 = Number(value)
  if (value1 + this.roll9 > 10 || this.roll9 === 10) {alert("it's not even possible to knockdown more than 10 pins in one frame, silly")}
  else {this.roll10 = value1,
  this.frameFiveTotal += value1,
  this.maxTotal += value1
  if (this.roll3 === 10) {this.totalStrikeBonus4 += this.roll10, this.frameFourTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameSixFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll11 = value1,
  this.frameSixTotal += value1,
  this.maxTotal += value1
  if (this.roll7 === 10 && this.roll9 === 10) {this.totalStrikeBonus4 += this.roll11, this.frameFourTotal += value1, this.maxTotal += value1}
  if (this.roll9 === 10 && this.roll10 === 0) {this.totalStrikeBonus5 += this.roll11, this.frameFiveTotal += value1, this.maxTotal += value1}
  if ((this.roll9 + this.roll10) === 10 && this.roll9 < 10) {this.totalSpareBonus5 = this.roll11, this.frameFiveTotal += value1, this.maxTotal += value1}}

};

Bowling.prototype.frameSixSecondRoll = function(value){
  var value1 = Number(value)
  if (value1 + this.roll11 > 10 || this.roll11 === 10) {alert("it's not even possible to knockdown more than 10 pins in one frame, silly")}
  else {this.roll12 = value1,
  this.frameSixTotal += value1,
  this.maxTotal += value1
  if (this.roll3 === 10) {this.totalStrikeBonus5 += this.roll12, this.frameFiveTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameSevenFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll13 = value1,
  this.frameSevenTotal += value1,
  this.maxTotal += value1
  if (this.roll9 === 10 && this.roll11 === 10) {this.totalStrikeBonus5 += this.roll13, this.frameFiveTotal += value1, this.maxTotal += value1}
  if (this.roll11 === 10 && this.roll12 === 0) {this.totalStrikeBonus6 += this.roll13, this.frameSixTotal += value1, this.maxTotal += value1}
  if ((this.roll11 + this.roll12) === 10 && this.roll11 < 10) {this.totalSpareBonus6 = this.roll13, this.frameSixTotal += value1, this.maxTotal += value1}}

};

Bowling.prototype.frameSevenSecondRoll = function(value){
  var value1 = Number(value)
  if (value1 + this.roll13 > 10 || this.roll3 === 10) {alert("it's not even possible to knockdown more than 10 pins in one frame, silly")}
  else {this.roll14 = value1,
  this.frameSevenTotal += value1,
  this.maxTotal += value1
  if (this.roll3 === 10) {this.totalStrikeBonus6 += this.roll14, this.frameSixTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameEightFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll15 = value1,
  this.frameEightTotal += value1,
  this.maxTotal += value1
  if (this.roll11 === 10 && this.roll13 === 10) {this.totalStrikeBonus6 += this.roll15, this.frameSixTotal += value1, this.maxTotal += value1}
  if (this.roll13 === 10 && this.roll14 === 0) {this.totalStrikeBonus7 += this.roll15, this.frameSevenTotal += value1, this.maxTotal += value1}
  if ((this.roll13 + this.roll14) === 10 && this.roll13 < 10) {this.totalSpareBonus7 = this.roll15, this.frameSevenTotal += value1, this.maxTotal += value1}}

};

Bowling.prototype.frameEightSecondRoll = function(value){
  var value1 = Number(value)
  if (value1 + this.roll5 > 10 || this.roll15 === 10) {alert("it's not even possible to knockdown more than 10 pins in one frame, silly")}
  else {this.roll16 = value1,
  this.frameEightTotal += value1,
  this.maxTotal += value1
  if (this.roll3 === 10) {this.totalStrikeBonus7 += this.roll16, this.frameSevenTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameNineFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll17 = value1,
  this.frameNineTotal += value1,
  this.maxTotal += value1
  if (this.roll13 === 10 && this.roll15 === 10) {this.totalStrikeBonus7 += this.roll17, this.frameSevenTotal += value1, this.maxTotal += value1}
  if (this.roll15 === 10 && this.roll16 === 0) {this.totalStrikeBonus8 += this.roll17, this.frameEightTotal += value1, this.maxTotal += value1}
  if ((this.roll15 + this.roll16) === 10 && this.roll15 < 10) {this.totalSpareBonus8 = this.roll17, this.frameEightTotal += value1, this.maxTotal += value1}}

};

Bowling.prototype.frameNineSecondRoll = function(value){
  var value1 = Number(value)
  if (value1 + this.roll7 > 10 || this.roll17 === 10) {alert("it's not even possible to knockdown more than 10 pins in one frame, silly")}
  else {this.roll18 = value1,
  this.frameNineTotal += value1,
  this.maxTotal += value1
  if (this.roll3 === 10) {this.totalStrikeBonus8 += this.roll18, this.frameEightTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameTenFirstRoll = function(value){
  var value1 = Number(value)
  if (value1 > 10) {alert("You can't score more than 10, silly")}
  else {this.roll19 = value1,
  this.frameTenTotal += value1,
  this.maxTotal += value1
  if (this.roll15 === 10 && this.roll17 === 10) {this.totalStrikeBonus8 += this.roll19, this.frameEightTotal += value1, this.maxTotal += value1}
  if (this.roll17 === 10 && this.roll18 === 0) {this.totalStrikeBonus9 += this.roll19, this.frameNineTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameTenSecondRoll = function(value){
  var value1 = Number(value)
  if (this.roll19 === 10 && value1 > 10) {alert("You can't score more than 10, silly")}
  if (this.roll19 !== 10 && this.roll19 + value1 > 10) {alert("You cant do that")}
  else {this.roll20 = value1,
  this.frameTenTotal += value1,
  this.maxTotal += value1
  if (this.roll17 === 10) {this.totalStrikeBonus9 += this.roll20, this.frameNineTotal += value1, this.maxTotal += value1}}
};

Bowling.prototype.frameTenThirdRoll = function(value){
  var value1 = Number(value)
  if (this.roll20 === 10 && value1 > 10) {alert("You can't score more than 10, silly")}
  if (this.roll19 + this.roll20 < 10) {alert("Sorry, you don't have any extra balls to throw")}
  if (this.roll19 === 10 && this.roll20 !== 10 && this.roll20 + value1 > 10) {alert("insufficent pins remaining")}
  else {this.roll21 = value1,
  this.frameTenTotal += value1,
  this.maxTotal += value1}
};
