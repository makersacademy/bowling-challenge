class Game {
  constructor(){
    this.frames = [];
    this.MAX_FRAMES = 10;
  }

  gameFrames(){
    return this.frames;
  }

  addFrame(frame){
    if (this._gameOver()){
      return;
    }
    this.frames.push(frame);
  }

  sharingInfoWithFrames() {
    for (var i=0; i < this.frames.length; i++) {
      this.frames[i].getNextRoll(this.frames[i+1]);
      this.frames[i].getNextNextRoll(this.frames[i+2]);
    }

  }

  _gameOver(){
    return this.gameFrames().length === this.MAX_FRAMES;
  }
}
