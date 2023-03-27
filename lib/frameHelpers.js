const frameHelpers = {
  sum: function (array) {
    if (array.length === 0) return 0
    return array.reduce((sum, num) => sum + num)
  },

  setStatus: function (rolls) {
    const rollsTotal = this.sum(rolls)
    if (rollsTotal < 10) return

    return rolls.length === 1 ? 'STRIKE' : 'SPARE'
  },
  
  setNumberMaxOfBonus: function (status) {
    let numberMaxOfBonus = 0
    if (status === 'STRIKE') numberMaxOfBonus = 2
    if (status === 'SPARE') numberMaxOfBonus = 1
    return numberMaxOfBonus // 0, 1 or 2
  },

  isBonusReady: function (status, bonus) {
    if (status === 'STRIKE' && bonus.length < 2) return "X"
    if (status === 'SPARE' && bonus.length < 1) return "/"
    return this.sum(bonus)
  },

  isTotalReady: function (total) {
    const allNumbers = total.map((el) => typeof el === 'number') // check if element in array is a number
    return !allNumbers.includes(false)
    // return true if a non-number was detected but ! reverse the boolean
    // so now it return false
    // necessary for the following to make sense when we read the code
    // if a non-number is detected:
    // allNumbers = false 
  }
}

module.exports = { frameHelpers }