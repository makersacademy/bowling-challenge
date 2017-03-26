var Frame = function(rolls) {
  this.MAX_SCORE = 10;
  this.rolls = rolls;
}

Frame.prototype.rollScore = function() {
  return this.rolls.reduce(function(score, roll) {
    return score + roll;
  });
};

Frame.prototype.total = function(next_frame, next_and_next_frame) {
  return this.rollScore() + this.bonus(next_frame, next_and_next_frame);
};


Frame.prototype.bonus = function(next_frame, next_and_next_frame) {
  if (undefined === next_frame) {
    return 0;
  }
  if (this.isStrike()) {
    return next_frame.strikeBonus(next_and_next_frame);
  }
  if(this.isSpare()) {
    return next_frame.spareBonus();
  }
  return 0;
};

Frame.prototype.isSpare = function() {
  return this.rollScore() == this.MAX_SCORE;
};

Frame.prototype.isStrike = function() {
  return this.firstRoll() == this.MAX_SCORE;
};

Frame.prototype.spareBonus = function() {
  return this.firstRoll();
};

Frame.prototype.strikeBonus = function(next_frame) {
  if(this.isStrike() && next_frame !== undefined) {
    return this.rollScore() + next_frame.firstRoll();
  }
    return this.firstRoll() + this.rolls[1];
};

Frame.prototype.firstRoll = function() {
  return this.rolls[0];
};

describe("A frame of bowling", function(){

  it("calculates a total for two roles", function(){
    var frame = new Frame([1,3]);
    var next = new Frame([0,0]);
    expect(frame.total()).toEqual(4);
  });

  it("calculates a total for a spare", function(){
    var frame = new Frame([5,5]);
    var next = new Frame([5,2]);
    expect(frame.total(next)).toEqual(15);
  });

  it("calculates a total for a strike", function(){
    var frame = new Frame([10]);
    var next = new Frame([5,2]);
    expect(frame.total(next)).toEqual(17);
  });

  it("calculates a total for two strikes in a row", function(){
    var frame = new Frame([10]);
    var next = new Frame([10]);
    var next_but_next = new Frame([5, 2]);
    expect(frame.total(next, next_but_next)).toEqual(25);
  });

  it("calculates three strikes in a row", function(){
    var frame = new Frame([10]);
    var next = new Frame([10]);
    var next_but_next = new Frame([10]);
    expect(frame.total(next, next_but_next)).toEqual(30);
  });

  it ("calculates a strike in the final frame", function(){
    var frame = new Frame([10,10,10]);
    expect(frame.total()).toEqual(30);
  });

  it ("calculates a strike in the final frame but one", function(){
    var frame = new Frame([10]);
    var next = new Frame([10,10,10]);
    expect(frame.total(next)).toEqual(30);
  });
});