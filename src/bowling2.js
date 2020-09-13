class Bowling {

    constructor(){
        
        this.scoreCard = []
    
        }

    getCurrentScore(){
        return this.score
    }

    roll(Roll) {
       
        this.scoreCard.push(Roll)
      
    } 

    calculateScore(rolls) {
        var rollCount = 0 
        let score = 0
        
        for( let frameCount = 0; frameCount < 10; frameCount++) {
           
          if (this.scoreCard[rollCount] === 10) {
            
            score += this.scoreCard[rollCount] + this.scoreCard[rollCount + 1] + this.scoreCard[rollCount + 2] 
            rollCount ++
            console.log(score)
          }  
          else if (this.scoreCard[rollCount] + this.scoreCard[rollCount + 1] === 10) {
              console.log('js')
              score += this.scoreCard[rollCount] + this.scoreCard[rollCount + 1] + this.scoreCard[rollCount + 2] 
              
              rollCount += 2
          } else {
              
            score += this.scoreCard[rollCount] + this.scoreCard[rollCount + 1]
            rollCount += 2
          }
       
         
        }
       
       return score
    };
      
   
       


    

   
}