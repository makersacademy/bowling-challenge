var Game = function(){
  this.score = 0;

  this.getTotal = function(){
    if(this.score !== 0 ){
      this.score = 0;
    }
    return this.score;
  }
}
