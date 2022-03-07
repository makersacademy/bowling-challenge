
//export default class Roll{
class Roll{  
  
  constructor(id, frameId, score){
    this.id = id; 
    this.frameId = frameId;
    this.score = score; 
  }

  getId(){
    return this.id;
  } 

  getFrameId(){
      return this.frameId;
  }

  getScore(){
      return this.score;
  }

  setId(id){
    this.id = id;
  }

  setFrameId(id){
    this.frameId = id;
  }

  setScore(score){
    this.score = score;
  }
  
}

module.exports = Roll;
