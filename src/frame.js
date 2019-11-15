class Frame{
  constructor(){
    this.score = 0;
    this.rollOne = 0;
    this.rollTwo = 0;
    this.rollCounter = [];
  }

  setScore(){
    if(this.rollCounter.length == 2){
      
      this.rollOne = this.rollCounter[0];
      this.rollTwo = this.rollCounter[1];
      this.score = this.rollOne + this.rollTwo;

    } else if (this.rollCounter.length == 1){

      this.rollOne = this.rollCounter[0];
      this.rollTwo = 0;
      this.score = this.rollOne + this.rollTwo;
    }
  }


  getRoll(score){
    if (this.rollCounter.length < 2) {
      if(score < 10){
        this.rollCounter.push(score);
        this.setScore();
      } else{
        throw new Error('Score of over 10 is not possible')
      }  
    } else {
      throw new Error('Can only accept 2 rolls')
    }
  }

  
}