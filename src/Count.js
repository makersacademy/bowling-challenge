function Count(){
  this.array = []
};

Count.prototype.add = function(frame){
  this.array.push(frame);
};
Count.prototype.normal_score = function(frame){
  return(frame.showFirst()+frame.showSecond());
}

Count.prototype.scoreCounting = function(){
  var score = 0 ;
  for(var counter =0; counter < this.array.length ;counter++){
    score = score + this.normal_score(this.array[counter]);
    if(this.array[counter]._isSpare() === true){score = score +this.array[counter+1].showFirst()};
    if(this.array[counter]._isStrike()=== true)
    {if(this.array[counter+1]._isStrike() === true){
      score = score + this.normal_score(this.array[counter+1]) + this.array[counter+2].showFirst();
    }else{score = score + this.array[counter+1].showFirst() + this.array[counter+1].showSecond()};
  };
  };
  return(score);
}

Count.prototype._isFull = function(){
  if(this.array.length === 10){
    return true;
  }else{
    return false;
  }
}
