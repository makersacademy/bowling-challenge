'use strict';

function FinalFrame(firstroll, secondroll, thirdroll){
  this.firstroll = firstroll
  this.secondroll = secondroll
  if (isNaN(thirdroll)) {
    thirdroll = 0;
  }
  this.thirdroll = thirdroll
}

FinalFrame.prototype.getRawScore = function(){
  output = this.firstroll + this.secondroll + this.thirdroll;
  return (output);
};
