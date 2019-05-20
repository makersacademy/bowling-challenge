'use strict'

 class Scoresheet {
  constructor () {
    this.isComplete = false
    this.finalScore = 0
    this.rollCount = 0
  }

   roll () {
     this.rollCount += 1
     if (this.rollCount === 20) { this.isComplete = true }
  }
}
