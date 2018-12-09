function Frame() {
    this.first;
    this.second;
    this.total = 0;
}

Frame.prototype.score = function(){
    
   if ((typeof this.getFirstScore()) != 'undefined'){
       // second score is based off of how many pins are left over from the first roll
       this.setSecondScore(this.randomScore((10 - this.getFirstScore())));
   }else {
        this.setFirstScore(this.randomScore(10)); 
   }
}

Frame.prototype.setFirstScore = function(value){
    this.first = value;
}

Frame.prototype.getFirstScore = function(){
    return this.first;
}

Frame.prototype.setSecondScore = function(value){
    this.second = value;
}

Frame.prototype.getSecondScore = function(){
    return this.second;
}
Frame.prototype.getTotal = function(){
    return this.total;
}

Frame.prototype.randomScore = function(max){
    return Math.floor(Math.random() * max) + 1
}

Frame.prototype.isStrike = function(){
    return ((this.getFirstScore() == 10 || this.getSecondScore() == 10) ? true : false);
}

Frame.prototype.isSpare = function(){
    if (this.isStrike() == false && this.isMiss() == false && (this.getFirstScore() + this.getSecondScore()) == 10){
        return true;
    }
    else{
        return false;
    }
}

Frame.prototype.isMiss = function(){
    return ((this.getFirstScore() == 0 || this.getSecondScore() == 0) ? true : false);
}

Frame.prototype.complete = function(){
    if(this.isStrike() == true || !isNaN(this.getSecondScore())){
        return true;
    }else{
        return false;
    }
}

Frame.prototype.totalScore = function(){
    this.total = (isNaN(this.getFirstScore()) ? null : this.getFirstScore()) + (isNaN(this.getSecondScore()) ? null : this.getSecondScore());
    return this.total;
}
