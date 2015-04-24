var Game = function(arrayOfRolls){
  console.log('---')
  this.arrayOfRolls = arrayOfRolls
  this.allFrames = []
  this.rolls = []
  this.asignInputToFrames(this.arrayOfRolls);
};

Game.prototype.asignInputToFrames = function() {
  while(this.arrayOfRolls.length > 0){
    console.log(this.arrayOfRolls.length)
    var frame = new Frame();
    // console.log(frame)
    this.putRollIn(frame);
    if (!frame.is_over){
      this.putRollIn(frame);
    }
    this.allFrames.push(frame);
  };
};

// could extract into own class? if passed an array. might need to set a 
//var to the length of this.arrayOfRolls and deciment it for the while loop.
Game.prototype.putRollIn = function(frame) {
  var currRoll = this.arrayOfRolls.shift();
  frame.roll(currRoll)
  this.rolls << currRoll
};

Game.prototype.scoreForFrame = function(n) {
  var upToN = new Array(n);
  var cumulativeScore = 0;

  for(var i=0;i<upToN.length;i++){
    if (this.allFrames[i].spare){
      cumulativeScore += this.allFrames[i + 1].rolls[0]
    }
    cumulativeScore += this.allFrames[i].score
  }

  return cumulativeScore;
};


  // def score_for_frame(n)
  //   cumulative_score = 0
  //   (0..n - 1).each do |i|
  //     name_frames_in_english i
  //     cumulative_score += @next_frame.first_roll if @current_frame.spare
  //     cumulative_score += strike_bonus if @current_frame.strike
  //     cumulative_score += @current_frame.score
  //   end
  //   cumulative_score
  // end




