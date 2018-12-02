function Frame() {
    this.first;
    this.second;
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
