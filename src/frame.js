class Frame {

constructor(firstThrow, secondThrow = 0) {
  this.frame = {'First Throw': firstThrow, 'Second Throw': secondThrow};
} 

_isStrike = () => {

  if (this.frame['First Throw'] === 10) {
    this.frame['Bonus'] = 'strike';
  }

}

_isSpare = () => {

  if (this.frame['First Throw'] + this.frame['Second Throw'] === 10
  && this.frame['First Throw'] != 10)
   {
     this.frame['Bonus'] = 'spare'
  }

}

applyBonus = () => {

  this._isSpare()
  this._isStrike()

}

}