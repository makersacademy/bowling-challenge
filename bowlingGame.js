class BowlingGame{
    constructor(){
        this.frames = []
    }

    addFrame(input){
        this.frames.push(input)
    }

    addStrikeScore(){
        if (this.frames[i + 1].checkForStrike()== true){
            this.frames[i].addBonus(this.frames[i + 1].returnRollOne())
            this.frames[i].addBonus(this.frames[i + 2].returnRollOne())
           return totalScore += this.frames[i].returnFrameScore() 
        }else{
            this.frames[i].addBonus(this.frames[i + 1].returnRollOne())
            this.frames[i].addBonus(this.frames[i + 1].returnRollTwo())
            return totalScore += this.frames[i].returnFrameScore()
        }
    }

    calculateBonus(){
        let totalScore = 0
        for (let i = 0; i < this.frames.length; i++){
            
            if ((this.frames[i].checkForSpare()) === true){
                this.frames[i].addBonus(this.frames[i + 1].returnRollOne())
               return totalScore += this.frames[i].returnFrameScore()

            }else if((this.frames[i].checkForStrike()) == true){
               return this.addStrikeScore()
                
            }else{
                return totalScore += this.frames[i].returnFrameScore()
            }
        }
    }

    returnGameScore(){
        let totalScore = 0
        // this.frames.map((score) => {
        //     totalScore += score
        // })

        // for (let i = 0; i < this.frames.length; i++){
            
        //     if ((this.frames[i].checkForSpare()) === true){
        //         this.frames[i].addBonus(this.frames[i + 1].returnRollOne())
        //         totalScore += this.frames[i].returnFrameScore()

        //     }else if((this.frames[i].checkForStrike()) == true){
        //         if (this.frames[i + 1].checkForStrike()== true){
        //             this.frames[i].addBonus(this.frames[i + 1].returnRollOne())
        //             this.frames[i].addBonus(this.frames[i + 2].returnRollOne())
        //             totalScore += this.frames[i].returnFrameScore() 
        //         }else{
        //             this.frames[i].addBonus(this.frames[i + 1].returnRollOne())
        //             this.frames[i].addBonus(this.frames[i + 1].returnRollTwo())
        //             totalScore += this.frames[i].returnFrameScore()
        //         }
                
        //     }else{
        //         totalScore += this.frames[i].returnFrameScore()
        //     }
        // }

            totalScore = this.calculateBonus()

        return totalScore;
    }

}

module.exports = BowlingGame;