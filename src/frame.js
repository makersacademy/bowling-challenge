function Frame() {
    this.first;
    this.second;
    this.total = 0;
}

Frame.prototype.score = function(){
   if ((typeof this.getFirstScore()) != 'undefined'){
       this.setSecondScore(this.randomScore());
   }else {
        this.setFirstScore(this.randomScore()); 
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

Frame.prototype.randomScore = function(){
    return Math.floor(Math.random() * 6) + 1
}

Frame.prototype.isStrike = function(){
    return ((this.getFirstScore() == 10 || this.getSecondScore() == 10) ? true : false);
}

Frame.prototype.isSpare = function(){
    return ((this.isStrike() == false && this.isMiss() == false) ? true : false);
}

Frame.prototype.isMiss = function(){
    return ((this.getFirstScore() == 0 || this.getSecondScore() == 0) ? true : false);
}

Frame.prototype.totalScore = function(){
    this.total += isNaN(this.getFirstScore()) ? 0 : this.getFirstScore();
    this.total += isNaN(this.getSecondScore()) ? 0 : this.getSecondScore();
    
    return this.total;
}

