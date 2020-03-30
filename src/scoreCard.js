function ScoreCard(){
    this.score = []
    this.consecutiveStrikes = 0;
    this.spareBonus = false;
    this.spareBonusValue = 0;
    this.roll1Value = 0;
    this.roll2Value = 0;
    this.roll3Value = 0;
};

ScoreCard.prototype.roll1 = function (pins) {
    if(this.spareBonus == true){
        this.spareBonusValue = pins;
    };
    
    if(this.score.length == 9){
        this.roll1Value = pins;
    }

    if(pins == 10){
        this.consecutiveStrikes ++;
        this.roll1Value = "X";
        this.addFrame();
    } else{
        this.roll1Value = pins;
    };
};

ScoreCard.prototype.roll2 = function(pins){
   
    if(this.score.length == 9){
        this.roll2Value = pins;
    }
    if(pins + this.roll1Value == 10){
        this.spareBonus = true;
    }
    this.roll2Value = pins;
    this.addFrame();
};

ScoreCard.prototype.roll3 = function(pins){
    this.roll3Value = pins;
    this.addFrame;
}

ScoreCard.prototype.addFrame = function(){
    
    var total;
    
    if(this.roll1Value == "X"){
        total = (10 * this.consecutiveStrikes) + this.spareBonusValue;
    } else {
        rollTotal = this.roll1Value + this.roll2Value + this.roll3Value
        console.log(rollTotal);
        total = rollTotal + (10 * this.consecutiveStrikes) + this.spareBonusValue;
    }
    
    frame = new Frame(this.roll1Value, this.roll2Value, this.roll3Value, total);

    this.score.push(frame);
  
};

