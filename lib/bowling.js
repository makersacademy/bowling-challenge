class Bowling {

  constructor() {
    this.bowls = {}
    this.strikes = {}
    this.turn = 1
    this.roll = 1
  }

  rollsIveDone()
  {console.log(this.bowls)}

  remainder() {
    if (this.roll === 1) {
      return 10
    }
    else
    {return 10 - this.bowls[this.turn][0]}
  }

  myRoll(number) {
    console.log(this.roll)
    console.log(this.turn)
    if (this.roll > 3 || this.turn >= 11)
    {return 'The game is over! No more rolls'}

    if (number > 10 || (this.roll === 2 && this.turn != 10 && number + this.bowls[this.turn][0] > 10) || 
    (this.turn === 10 && this.roll === 2 && number + this.bowls[this.turn][0] > 10 && this.bowls[this.turn][0] != 10))
    {return 'Invalid roll'}
    if (this.roll === 1) 
    {this.bowls[[this.turn]] = [number]}
    else 
    {this.bowls[[this.turn]].push(number)}
    
    if (this.roll === 1 && number === 10) 
    {this.strikes[this.turn] = 'X'}
    else if (this.roll === 2 && number + this.bowls[this.turn][0] === 10) 
    {this.strikes[this.turn] = '/'}
    
    if (this.roll === 2 && this.turn < 10) 
    {this.roll = 1; this.turn += 1}
    else if (this.turn === 10 && number + this.bowls[this.turn][0] === 10)
      {this.roll = 3}
    else if (this.turn === 10 && this.roll === 2 && this.bowls[this.turn][0] === 10)
      {this.roll = 3}
    else if (this.roll === 1 && number === 10 && this.turn === 10)
      {this.roll = 2}
      else if (this.turn === 10 && this.roll === 2 && this.bowls[this.turn][0] != 10 && number + this.bowls[this.turn][0] != 10)
      {this.roll = 1; this.turn += 1}
    else if (this.roll === 1 && number === 10 && this.turn != 10) 
    {this.turn += 1}
    else if (this.roll === 3)
    {this.roll = 4; this.turn += 1}
    else {this.roll = 2}
    return this.bowls
  }


  calculateBasic() {
    let score = 0
    for (var _turn in this.bowls)
      {(this.bowls[_turn]).forEach(num => {
        score += num
      })
    }
    return score
  }

  emptyBowl(turn,roll) {
    return this.bowls[turn][roll] >= 0
  }

  totalScore() {
    let fullScore = 0
    fullScore += this.calculateBasic()
    fullScore += this.calculateStrikes()
    return fullScore
  }

  calculateStrikes() {
    let strikeScore = 0
      for (var _turn in this.strikes) {
        if (_turn != '10') {
          if (this.strikes[_turn] === 'X') 
            {if (this.emptyBowl(parseInt(_turn) + 1, 0) && (this.emptyBowl(parseInt(_turn) + 1,1))) 
              {strikeScore += this.bowls[parseInt(_turn) + 1][0] + this.bowls[parseInt(_turn) + 1][1]}
            else if (this.emptyBowl(parseInt(_turn) + 1,0) && this.bowls[parseInt(_turn) + 1][0] === 10 && this.emptyBowl(parseInt(_turn) + 2,0) )
              {strikeScore += this.bowls[parseInt(_turn) + 1][0] + this.bowls[parseInt(_turn) + 2][0]}
            else if (this.emptyBowl(parseInt(_turn) + 1,0)) 
              {strikeScore += this.bowls[parseInt(_turn) + 1][0]}}
          
          else if (this.strikes[_turn] === '/') 
          {if (this.emptyBowl(parseInt(_turn) + 1,0)) 
            {strikeScore += this.bowls[parseInt(_turn) + 1][0]}}
        }
      }
      return strikeScore
  }

}

module.exports = Bowling