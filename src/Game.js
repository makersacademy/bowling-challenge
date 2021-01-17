'use strict';

class Game {

    constructor() {
        this.scorecard = [];
    }

    addSpareBonus() {
        this.scorecard.length < 4 ? this.scorecard.push(this.first + this.first + this.second) : this.scorecard.push(this.scorecard[this.scorecard.length-3] + this.first + this.first + this.second);
    }

    addStrikeBonus() {
        this.scorecard.length < 4 ? this.scorecard.push(this.first + this.first + this.second + this.second) : this.scorecard.push(this.scorecard[this.scorecard.length-3] + this.first + this.first + this.second + this.second);
    }


    addTotal() {
        if (this.scorecard.length < 4) {
            this.scorecard.push(this.first + this.second)
        } else if (this.scorecard[this.scorecard.length -5] + this.scorecard[this.scorecard.length -4] == 10 && this.scorecard[this.scorecard.length -5] != 10) {
            this.addSpareBonus()
        } else if (this.scorecard[this.scorecard.length-5] == 10) {
            this.addStrikeBonus()
        } else if (this.first == 0 && this.second == 0) {
            this.gutter()
        } else if (this.scorecard.length >= 30) {
            this.endGame()
        } else {
            this.scorecard.push(this.scorecard[this.scorecard.length -3] + this.first + this.second);
        }
    }

    roll(first, second) {
        this.first = first;
        this.second = second;
        this.scorecard.push(first);
        this.scorecard.push(second);
        
        this.addTotal();
    }

    gutter() {
      
       throw "Double Gutter! Bad Luck"
    }
    endGame() {
        throw "Game Over!";
    }

}