function Game() {

  var  framenumber = 0;

  var  framelist  = [];

  this.framenumber = function() {
    return framenumber;
  }

  this.add_frame = function() {

    if (framenumber < 10) {
    frame = new Frame(framenumber)
    framelist.push(frame)
    framenumber += 1
    }
  }

  this.framelist = function() {
    return framelist
  }

  this.total_score = function() {
    var score = 0;
    var arrayLength = framelist.length;
    for (var i = 0; i < arrayLength; i++) {
      if (i > 0) {
        if(framelist[i-1].scoreroll1() == 10) {
          score += 2*framelist[i].scoreroll1() + 2*framelist[i].scoreroll2();
        }
        else if(framelist[i-1].scoreroll1() + framelist[i-1].scoreroll2()== 10) {
          score += 2*framelist[i].scoreroll1() + framelist[i].scoreroll2();
        }
        else {
          score += framelist[i].scoreroll1() + framelist[i].scoreroll2() +  framelist[i].scoreroll3();
        }
      }
      else {
        score += framelist[i].scoreroll1() + framelist[i].scoreroll2();
      }
      if (i>1) {
        if(framelist[i-1].scoreroll1() == 10 && framelist[i-2].scoreroll1() == 10)  {
          score += framelist[i].scoreroll1()
        }
      }
    }
    return score
  }
}
