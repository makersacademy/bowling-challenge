function ScoreCard(){
    this.score = []
    this.consecutiveStrikes = 0;
    this.spareBonus = false;
    this.spareBonusValue = 0;
    this.roll1Value;
    this.roll2Value;
    this.roll3Value;
};

ScoreCard.prototype.roll1 = function (pins) {
    if(this.spareBonus == true){
        this.spareBonusValue = pins;
    };
    
    if(pins == 10){
        this.consecutiveStrikes ++;
        this.roll1Value = "X";
        this.addFrame();
    } else{
        this.roll1Value = pins;
    };
};

ScoreCard.prototype.roll2 = function(pins){
    if(pins + this.roll1Value == 10){
        this.spareBonus = true;
    }
    this.roll2Value = pins;
    this.addFrame();
};

ScoreCard.prototype.addFrame = function(){
    
    var total;
    total = (this.roll1Value + this.roll2Value + this.roll3Value) + (10 * this.consecutiveStrikes) + this.spareBonusValue;

    this.score.push(new Frame(this.roll1Value, this.roll2Value, this.roll3Value, total));
};

