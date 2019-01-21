class Game {
  constructor(){
  this.frames = []
  this.total = 0
  }

getGameTotal(){
  return this.total
}

loadNewFrame(pinsdown1, pinsdown2){
  let frame = new Frame(pinsdown1, pinsdown2)
}

}