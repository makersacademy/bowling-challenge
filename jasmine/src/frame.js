function Frame(){
  this.gameFrames = [
    {frame: []},
    {frame: []},
    {frame: []},
    {frame: []},
    {frame: []},
    {frame: []},
    {frame: []},
    {frame: []},
    {frame: []},
    {frame: []},
    {frame: []}
  ]
  this.frameNumber = 0
  this.currentFrame = ''
  };

Frame.prototype.frameSet = function(value){
 this.currentFrame = this.gameFrames[value].frame
};

Frame.prototype.statusChecker = function(){
  if(this.currentFrame.length >= 2 ||
    this.currentFrame[0] === 10) {
    this.frameNumber++
  };
};
