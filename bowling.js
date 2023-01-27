class Game {
    constructor(){
        this.finished = false
        this.totalScore = 0
        this.rollNumber = 1
        this.frame = 1
        this.board = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]]
        this.bonus = [0,0,0,0,0,0,0,0,0]
    };

    roll(number){
        //if not in the last frame
        if(this.frame < 10){
            //add the knocked pins number into the the array which will have index one less than the actual frame and roll number
            this.board[this.frame -1][this.rollNumber - 1] = number;

            // if a strike move onto the next frame
            if(this.rollNumber === 1 && number === 10){
                this.frame ++
            }
            // else if its just the first roll and not a strike move to the next roll
            else if(this.rollNumber === 1){
                this.rollNumber = 2;
            }
            // else go onto the next frame because there have been two rolls in this frame and reset the roll number
            else {
                this.frame ++
                this.rollNumber = 1;
            }
        }
        // this has to be frame 10
        else {
            //if the roll number is greater than 3 then it is impossible to roll again so do nothing but call the finish function
            if(this.rollNumber > 3){
                this.finish()
            }

            //if the roll is greater than two but you haven't got a spare or a strike in those first two then no extra roll, finish. Refer to line 88.
            else if(this.checkIfInvalidLastRoll()){
                this.finish()
            }
            //else you should still have some rolls so knocked pins will be put on the board and roll number increased
            else {
                this.board[this.frame -1][this.rollNumber - 1] = number
                this.rollNumber ++ 
            }
        }
        // score functions called after each roll to geenrate an up to date total score at all times
        this.addBaseScore()
        this.addBonusScore()
    };
    
    // will be called after each roll to equal the total score to the sum of all the entries in the board array
    addBaseScore(){
        let temp = this.board.flat()
        this.totalScore = temp.reduce((a,b) => a + b)
    };

    // will be called after each roll to calculate the bonus score each frame should have and then add the sum of the bonus array to the total score
    addBonusScore(){
        // run through all the frames/sub-arrays with the index
        this.board.forEach((ind_frame, index) => {

            // if a spare and not in the last frame then make the bonus for that frame equal to the first roll of the next frame. Refer to line 96.
            if (this.checkIfSpareBonus(ind_frame, index)){
                this.bonus[index] = this.board[index + 1][0]
            }
            //if a strike and not in the last frame. Refer to line 92.
            else if(this.checkIfStrikeBonus(ind_frame, index)){
                // check if the next frame is also a strike
                switch (this.board[index + 1][0]){
                    // if a strike (10) then add both the next frames total (the next strike) and the following frames first roll. Refer to line 100
                    case 10:
                        this.bonus[index] = this.calculateForNextFrameIfAlsoStrike(index)
                        break;
                    // default just add both rolls from the next frame to the bonus for the original frame. Refer to line 104.
                    default:
                        this.bonus[index] = this.calculateBonusIfNextFrameNotStrike(index)
                        break;
                };
            };
        });
        this.totalScore += this.bonus.reduce((a,b) => a + b)
    };

    finish(){
        this.finished = true;
    };

    checkIfInvalidLastRoll(){
        return this.rollNumber > 2 && this.board[this.frame - 1].reduce((a,b) => a + b) < 10
    };

    checkIfStrikeBonus(frame, index){
        return frame[0] == 10 && index !== 9;
    };

    checkIfSpareBonus(frame, index){
        return frame.reduce((a,b) => a + b) === 10 && frame[1] !== 0 && index !==9;
    };

    calculateBonusIfNextFrameAlsoStrike(index){
        return this.board[index + 1][0] + this.board[index + 2][0];
    };

    calculateBonusIfNextFrameNotStrike(index){
        return this.board[index + 1][0] + this.board[index + 1][1];
    };


};

module.exports = Game;