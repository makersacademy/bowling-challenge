class Frame{

    constructor(){
      this.frame = [];
      this.rollCount = 0;
      this.frameSum = 0;
    }

    roll(pins){
      this.frame.push(pins); 
      this.strike() ? (this.rollCount = 0) : (this.rollCount += 1);
    };

    strike(){ 
      return this.frame[0] === 10;
    }

    standard(){
      let total  = this.frame[0] + this.frame[1]
      return total < 10 && this.rollCount > 1;
    } 
 
    spare(){
      let total  = this.frame[0] + this.frame[1]
      return (total === 10 && this.frame[0] != 10);
     }
     
    sumFrame(){
      let count = 0;
      for(let i = 0; i < this.frame.length; i++)
        {
          this.frameSum = this.frameSum + this.frame[i];
        };
      return this.frameSum;
    };

    complete(){
      return this.rollCount > 1 || this.frame[0] === 10;
    }

}
module.exports = Frame;
