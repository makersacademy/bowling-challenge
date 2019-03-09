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
  var counter;
  var score = 0 ;
  for(counter =0; counter < this.array.length ;counter++){
    score = score + this.normal_score(this.array[counter]);
    if(this.array[counter]._isSpare() === true){score = score +this.array[counter+1].first_role};
  }
  return(score)
}
