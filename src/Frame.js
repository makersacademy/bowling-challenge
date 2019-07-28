function Frame(){
  this._allFrames = []
};

  Frame.prototype.rollOneToNine = function(rollOne, rollTwo) {
    let arr = []
    arr.push(rollOne, rollTwo);
    // write an if else statement that says if there is a 10 in arr then remove the 0
    return this._allFrames.push(arr)
  };

  Frame.prototype.rollTen = function(rollOne, rollTwo, rollThree = 0) {
    let arr = []
    arr.push(rollOne, rollTwo, rollThree)
    return this._allFrames.push(arr)
  };

  Frame.prototype.allFrames = function(){
    return this._allFrames
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


