'use strict';

class Bowling {
  constructor () {
    this.total = 0;
    this.frames = [];
    this.framesTotalAcc = [];
    this.framesTotal = [];
    this.state = [];
    this.frameCounter = 0;
  }

  frame (bowl1, bowl2 = 0) {
    if (bowl1 === 10) {
      this.state.push('strike');
    } else if (bowl1 + bowl2 === 10) {
      this.state.push('spare');
    } else {
      this.state.push('open frame');
    }
    this.frames.push([bowl1, bowl2]);
    this.frameEnds();
  }

  tenthFrameExtra (bowl1, bowl2 = 0) {
    if (this.state[this.state.length - 1] === 'spare' && this.frameCounter === 10) {
      this.frame(bowl1, bowl2);
    }
    if (this.state[this.state.length - 1] === 'strike' && this.frameCounter === 11) {
      this.frame(bowl1);
    }
    if (this.state[this.state.length - 1] === 'strike' && this.frameCounter === 10) {
      this.frame(bowl1);
    }
  }

  frameEnds () {
    switch (this.state[this.state.length - 1]) {
      case 'strike':
        this.strike();
        break;
      case 'spare':
        this.spare();
        break;
      case 'open frame':
        if (this.frameCounter >= 10) {
          this.tenthOpenFrame();
        } else {
          this.openFrame();
        }
        break;
    }
    this.frameCounter++;
    this.totalUpdate();
  }

  strike () {
    switch (this.prevCondition()) {
      case 'x2_strike':
        this.framesTotal.push(30);
        break;
      case 'spare':
        this.framesTotal.push(20);
        break;
    }
  }

  spare () {
    switch (this.prevCondition()) {
      case 'x2_strike':
        this.framesTotal.push(20 + this.currentFrame(0), 20);
        break;
      case 'x1_strike':
        this.framesTotal.push(20);
        break;
      case 'spare':
        if (this.frameCounter !== 0) {
          this.framesTotal.push(10 + this.currentFrame(0));
        }
        break;
    }
  }

  openFrame () {
    switch (this.prevCondition()) {
      case 'x2_strike':
        this.framesTotal.push(20 + this.currentFrame(0), 10 + this.currentOpenFrame(), this.currentOpenFrame());
        break;
      case 'x1_strike':
        this.framesTotal.push(10 + this.currentOpenFrame(), this.currentOpenFrame());
        break;
      case 'spare':
        this.framesTotal.push(10 + this.currentFrame(0), this.currentOpenFrame());
        break;
      default:
        this.openFrameScore();
    }
  }

  tenthOpenFrame () {
    switch (this.prevCondition()) {
      case 'x2_strike':
        this.framesTotal.push(20 + this.currentFrame(0));
        break;
      case 'spare':
        this.framesTotal.push(10 + this.currentFrame(0));
        break;
    }
  }

  prevCondition () {
    if (this.state[this.frameCounter - 1] === 'strike' && this.state[this.frameCounter - 2] === 'strike') {
      if (this.frameCounter > 1) {
        return 'x2_strike';
      }
    }
    if (this.state[this.frameCounter - 1] === 'strike') {
      return 'x1_strike';
    }
    if (this.state[this.frameCounter - 1] === 'spare') {
      return 'spare';
    }
  }

  currentFrame (bowl) {
    return this.frames[this.frameCounter][bowl];
  }

  currentOpenFrame () {
    return this.currentFrame(0) + this.currentFrame(1);
  }

  totalUpdate () {
    this.total = 0;
    // eslint-disable-next-line no-return-assign
    this.framesTotal.forEach(frame => this.total += frame,
      this.framesTotalAcc.push(this.total));
    // eslint-disable-next-line no-return-assign
    this.updateTotalAccumulative();
  }

  openFrameScore () {
    this.framesTotal.push(this.currentOpenFrame());
  }

  updateTotalAccumulative () {
    this.framesTotalAcc = [];
    for (let i = 0; i < this.framesTotal.length; i++) {
      if (this.framesTotalAcc.length === 0) {
        this.framesTotalAcc.push(this.framesTotal[i]);
      } else {
        this.framesTotalAcc.push(this.framesTotalAcc[i - 1] + this.framesTotal[i]);
      }
    }
  }
}
