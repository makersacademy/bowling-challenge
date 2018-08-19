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
  this.roll1 = value
  this.frameOneTotal += value
  this.maxTotal += value
};

Bowling.prototype.frameOneSecondRoll = function(value){
  this.roll2 = value
  this.frameOneTotal += value
  this.maxTotal += value
};

///////////////////////////////////////---------------------------------///////////////////////////////////////////////////////////

Bowling.prototype.frameTwoFirstRoll = function(value){
  this.roll3 = value
  this.frameTwoTotal += value
  this.maxTotal += value
  if (this.roll1 === 10 && this.roll2 === 0) {this.totalStrikeBonus1 += this.roll3, this.frameOneTotal += value, this.maxTotal += value}
  if ((this.roll1 + this.roll2) === 10 && this.roll1 < 10) {this.totalSpareBonus1 = this.roll3, this.frameOneTotal += value, this.maxTotal += value}
};

Bowling.prototype.frameTwoSecondRoll = function(value){
  this.roll4 = value
  this.frameTwoTotal += value
  this.maxTotal += value
  if (this.roll1 === 10) {this.totalStrikeBonus1 += this.roll4, this.frameOneTotal += value, this.maxTotal += value}
};

///////////////////////////////////////---------------------------------///////////////////////////////////////////////////////////

Bowling.prototype.frameThreeFirstRoll = function(value){
  this.roll5 = value
  this.frameThreeTotal += value
  this.maxTotal += value
  if (this.roll1 === 10 && this.roll3 === 10) {this.totalStrikeBonus1 += this.roll5, this.frameOneTotal += value, this.maxTotal += value}
  if (this.roll3 === 10 && this.roll4 === 0) {this.totalStrikeBonus2 += this.roll5, this.frameTwoTotal += value, this.maxTotal += value}
  if ((this.roll3 + this.roll4) === 10 && this.roll3 < 10) {this.totalSpareBonus2 = this.roll5, this.frameTwoTotal += value, this.maxTotal += value}

};

Bowling.prototype.frameThreeSecondRoll = function(value){
  this.roll6 = value
  this.frameThreeTotal += value
  this.maxTotal += value
  if (this.roll3 === 10) {this.totalStrikeBonus2 += this.roll6, this.frameTwoTotal += value, this.maxTotal += value}
};

////////////////////////////////////////----------------------------------//////////////////////////////////////////////////////////

Bowling.prototype.frameFourFirstRoll = function(value){
  this.roll7 = value
  this.frameFourTotal += value
  this.maxTotal += value
  if (this.roll3 === 10 && this.roll5 === 10) {this.totalStrikeBonus2 += this.roll7, this.frameTwoTotal += value, this.maxTotal += value}
  if (this.roll5 === 10 && this.roll6 === 0) {this.totalStrikeBonus3 += this.roll7, this.frameThreeTotal += value, this.maxTotal += value}
  if ((this.roll5 + this.roll6) === 10 && this.roll5 < 10) {this.totalSpareBonus3 = this.roll7, this.frameThreeTotal += value, this.maxTotal += value}


};

Bowling.prototype.frameFourSecondRoll = function(value){
  this.roll8 = value
  this.frameFourTotal += value
  this.maxTotal += value
  if (this.roll5 === 10) {this.totalStrikeBonus3 += this.roll8, this.frameThreeTotal += value, this.maxTotal += value}
};

///////////////////////////////////////---------------------------------///////////////////////////////////////////////////////////

Bowling.prototype.frameFiveFirstRoll = function(value){
  this.roll9 = value
  this.frameFiveTotal += value
  this.maxTotal += value
  if (this.roll5 === 10 && this.roll7 === 10) {this.totalStrikeBonus3 += this.roll9, this.frameThreeTotal += value, this.maxTotal += value}
  if (this.roll7 === 10 && this.roll8 === 0) {this.totalStrikeBonus4 += this.roll9, this.frameFourTotal += value, this.maxTotal += value}
  if ((this.roll7 + this.roll8) === 10 && this.roll7 < 10) {this.totalSpareBonus4 = this.roll9, this.frameFourTotal += value, this.maxTotal += value}

};

Bowling.prototype.frameFiveSecondRoll = function(value){
  this.roll10 = value
  this.frameFiveTotal += value
  this.maxTotal += value
  if (this.roll3 === 10) {this.totalStrikeBonus4 += this.roll10, this.frameFourTotal += value, this.maxTotal += value}
};

///////////////////////////////////////---------------------------------///////////////////////////////////////////////////////////

Bowling.prototype.frameSixFirstRoll = function(value){
  this.roll11 = value
  this.frameSixTotal += value
  this.maxTotal += value
  if (this.roll7 === 10 && this.roll9 === 10) {this.totalStrikeBonus4 += this.roll11, this.frameFourTotal += value, this.maxTotal += value}
  if (this.roll9 === 10 && this.roll10 === 0) {this.totalStrikeBonus5 += this.roll11, this.frameFiveTotal += value, this.maxTotal += value}
  if ((this.roll9 + this.roll10) === 10 && this.roll9 < 10) {this.totalSpareBonus5 = this.roll11, this.frameFiveTotal += value, this.maxTotal += value}

};

Bowling.prototype.frameSixSecondRoll = function(value){
  this.roll12 = value
  this.frameSixTotal += value
  this.maxTotal += value
  if (this.roll3 === 10) {this.totalStrikeBonus5 += this.roll12, this.frameFiveTotal += value, this.maxTotal += value}
};

///////////////////////////////////////---------------------------------///////////////////////////////////////////////////////////

Bowling.prototype.frameSevenFirstRoll = function(value){
  this.roll13 = value
  this.frameSevenTotal += value
  this.maxTotal += value
  if (this.roll9 === 10 && this.roll11 === 10) {this.totalStrikeBonus5 += this.roll13, this.frameFiveTotal += value, this.maxTotal += value}
  if (this.roll11 === 10 && this.roll12 === 0) {this.totalStrikeBonus6 += this.roll13, this.frameSixTotal += value, this.maxTotal += value}
  if ((this.roll11 + this.roll12) === 10 && this.roll11 < 10) {this.totalSpareBonus6 = this.roll13, this.frameSixTotal += value, this.maxTotal += value}

};

Bowling.prototype.frameSevenSecondRoll = function(value){
  this.roll14 = value
  this.frameSevenTotal += value
  this.maxTotal += value
  if (this.roll3 === 10) {this.totalStrikeBonus6 += this.roll14, this.frameSixTotal += value, this.maxTotal += value}
};

///////////////////////////////////////---------------------------------///////////////////////////////////////////////////////////

Bowling.prototype.frameEightFirstRoll = function(value){
  this.roll15 = value
  this.frameEightTotal += value
  this.maxTotal += value
  if (this.roll11 === 10 && this.roll13 === 10) {this.totalStrikeBonus6 += this.roll15, this.frameSixTotal += value, this.maxTotal += value}
  if (this.roll13 === 10 && this.roll14 === 0) {this.totalStrikeBonus7 += this.roll15, this.frameSevenTotal += value, this.maxTotal += value}
  if ((this.roll13 + this.roll14) === 10 && this.roll13 < 10) {this.totalSpareBonus7 = this.roll15, this.frameSevenTotal += value, this.maxTotal += value}

};

Bowling.prototype.frameEightSecondRoll = function(value){
  this.roll16 = value
  this.frameEightTotal += value
  this.maxTotal += value
  if (this.roll3 === 10) {this.totalStrikeBonus7 += this.roll16, this.frameSevenTotal += value, this.maxTotal += value}
};

///////////////////////////////////////---------------------------------///////////////////////////////////////////////////////////

Bowling.prototype.frameNineFirstRoll = function(value){
  this.roll17 = value
  this.frameNineTotal += value
  this.maxTotal += value
  if (this.roll13 === 10 && this.roll15 === 10) {this.totalStrikeBonus7 += this.roll17, this.frameSevenTotal += value, this.maxTotal += value}
  if (this.roll15 === 10 && this.roll16 === 0) {this.totalStrikeBonus8 += this.roll17, this.frameEightTotal += value, this.maxTotal += value}
  if ((this.roll15 + this.roll16) === 10 && this.roll15 < 10) {this.totalSpareBonus8 = this.roll17, this.frameEightTotal += value, this.maxTotal += value}

};

Bowling.prototype.frameNineSecondRoll = function(value){
  this.roll18 = value
  this.frameNineTotal += value
  this.maxTotal += value
  if (this.roll3 === 10) {this.totalStrikeBonus8 += this.roll18, this.frameEightTotal += value, this.maxTotal += value}
};

///////////////////////////////////////---------------------------------///////////////////////////////////////////////////////////

Bowling.prototype.frameTenFirstRoll = function(value){
  this.roll19 = value
  this.frameTenTotal += value
  this.maxTotal += value
  if (this.roll15 === 10 && this.roll17 === 10) {this.totalStrikeBonus8 += this.roll19, this.frameEightTotal += value, this.maxTotal += value}
  if (this.roll17 === 10 && this.roll18 === 0) {this.totalStrikeBonus9 += this.roll19, this.frameNineTotal += value, this.maxTotal += value}
  if ((this.roll17 + this.roll18) === 10 && this.roll15 < 10) {this.totalSpareBonus9 = this.roll19, this.frameNineTotal += value, this.maxTotal += value}
};

Bowling.prototype.frameTenSecondRoll = function(value){
  this.roll20 = value
  this.frameTenTotal += value
  this.maxTotal += value
  if (this.roll17 === 10) {this.totalStrikeBonus9 += this.roll20, this.frameNineTotal += value, this.maxTotal += value}
};

Bowling.prototype.frameTenThirdRoll = function(value){
  this.roll21 = value
  this.frameTenTotal += value
  this.maxTotal += value
};
