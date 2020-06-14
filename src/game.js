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

  _gameOver(){
    return this.gameFrames().length === this.MAX_FRAMES;
  }
}
