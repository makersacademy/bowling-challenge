function Game() {

  var  framenumber = 0;

  var  framelist  = [];

  this.framenumber = function() {
    return framenumber;
  }

  this.add_frame = function() {
    frame = new Frame(framenumber)
    framelist.push(frame)
    framenumber += 1
  }

  this.framelist = function() {
    return framelist
  }
}
