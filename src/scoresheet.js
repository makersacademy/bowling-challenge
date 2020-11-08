class Scoresheet {

  constructor() {

    this.game = []
    this.score = 0

  }

  addFrame(frame) {

    this.game.push(frame)

  }

  addBonus() {

    var i

    for (i = 0; i < this.game.length; i++ ) {

      if (this.game[i].bonus === 'strike') {
        if (this.game[i+1].bonus != 'strike') {  
        this.game[i].bonusScore = this.game[i+1]['First Throw'] + this.game[i+1]['Second Throw'];
        }
        else {this.game[i].bonusScore = this.game[i+1]['First Throw'] + this.game[i+2]['First Throw'];}        
      }
      else if (this.game[i].bonus === 'spare') {
        this.game[i].bonusScore = this.game[i+1]['First Throw']
      }

    }

  }

  // totalPlusBonus() { 

  //   var i

  //   for (i = 0; i < this.game.length; i++) {

  //     if (this.game[i].bonus != 'null') {
  //       this.game[i].total = this.game[i]['First Throw'] + this.game[i]['Second Throw'] + this.game[i].bonus
  //     }

  //   }

  // }

  scoreTotal() {
    var i
    this.score = 0
    for (i = 0; i < this.game.length; i++)
      if (this.game[i].bonus != 'null') {
        this.score += this.game[i]['First Throw'] + this.game[i]['Second Throw'] + this.game[i].bonusScore
      }
      else {
        this.score += this.game[i]['First Throw'] + this.game[i]['Second Throw']
      }
    return this.score
  }

}