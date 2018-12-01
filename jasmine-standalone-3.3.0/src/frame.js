'use strict';

  function Frame() {
    this.score = []
  };

  Frame.prototype.roll = function(n) {
    // var num = Math.floor(Math.random() * n + 1);
    // if this.score.length == 2;
    //   newFrame = new Frame;
    //     this.score.push(n);
    //       console.log(this.score);
    // else
    this.score.push(n);
    console.log(this.score)
  };
