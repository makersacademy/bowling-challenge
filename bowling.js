class Bowling {
  constructor() {
    this.score = 0
    this.frameNum = []
    this.spare = 0
    this.strike = 0
  };

  getScore(){
    if(this.strike+this.spare === 1){
      return `${this.score} + 1 roll`
    }
    else if(this.strike > 0 || this.spare >0){
      return `${this.score} + ${this.strike+this.spare} rolls`
    }

    return this.score
  }

  addScores(num1, num2){
    
    if (this.frameNum.length >9){
      return this.extraRoll(num1,num2)
    } 
    if (this.strike === 3){
      this.frameNum[this.frameNum.length-2][2] = num1;
      this.strike--;
      this.score += num1

    }
    if (this.spare === 1) {
      this.frameNum[this.frameNum.length-1][2] = num1;
      this.spare--;
      this.score += num1
    }
  
    if(this.strike === 2 && num1 === 10 ){
      this.frameNum[this.frameNum.length-1][1] = num1;
      this.strike--;
      this.score += num1
     
    }
    if (this.strike === 2 ) { 
      this.frameNum[this.frameNum.length-1][1] = num1;
      this.frameNum[this.frameNum.length-1][2] = num2;
      this.strike--;
      this.strike--;
      this.score += num1
      this.score += num2
    }
    if(num1 === 10) {
      this.score += 10
      this.frameNum.push([num1])
      this.strike +=2
      this.frameNum[this.frameNum.length-1].push('roll')
      this.frameNum[this.frameNum.length-1].push('roll')
    }  
    else if (num1+num2 === 10) {
      this.score += num1+num2
     this.frameNum.push([num1, num2])
        this.spare++
        this.frameNum[this.frameNum.length-1].push('roll')
     }
     else {
      this.score += num1+num2
      this.frameNum.push([num1, num2])
     }
     if(this.frameNum.length === 10 && this.spare+this.strike >0){

      return 'extra roll'

     }
     if (this.frameNum.length >=10 ){
        return `Well done your final score is ${this.score}`
     }
  }

  extraRoll(num1,num2){
    if (this.spare === 1) {
      this.frameNum[this.frameNum.length-1][2] = num1;
      this.spare--;
      this.score += num1
    }
    if (this.strike === 3){
      this.frameNum[this.frameNum.length-2][2] = num1;
      this.strike--;
      this.score += num1

    }
    if (this.strike === 2 ) { 
      this.frameNum[this.frameNum.length-1][1] = num1;
      this.frameNum[this.frameNum.length-1][2] = num2;
      this.strike--;
      this.strike--;
      this.score += num1
      this.score += num2
    }
    if (this.frameNum.length >=10 ){
      return `Well done your final score is ${this.score}`
   }
  }
  getFrame(num){
    
    return this.frameNum[num-1]
    
    }
  reset() {
    this.score = 0
    this.frameNum = []
    this.spare = 0
    this.strike = 0
  }
  }


module.exports = Bowling