function mockFrame(rollOne, rollTwo, bonus = 0) {
  this.rolls = [rollOne, rollTwo]
  
  this.getTotal = () => {
    return rollOne + rollTwo + bonus
  }
} 

module.exports = mockFrame;
