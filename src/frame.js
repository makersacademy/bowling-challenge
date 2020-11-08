class Frame {

constructor(firstThrow, secondThrow = 0) {
  this.frame = {'First Throw': firstThrow, 'Second Throw': secondThrow};
} 

_isStrike = () => {

  if (this.frame['First Throw'] === 10) {
    this.frame.bonus = 'strike';
  }

}

_isSpare = () => {

  if (this.frame['First Throw'] + this.frame['Second Throw'] === 10
  && this.frame['First Throw'] != 10)
   {
     this.frame.bonus = 'spare'
  }

}

// frameTotal = () => {

//   this.frame.total = this.frame['First Throw'] + this.frame['Second Throw']

// }

applyBonus = () => {
  this.bonus = 'null'
  this._isSpare()
  this._isStrike()

}

}