'use strict'

class Bonus {
  constructor (status) {
    this._status = status
    this._extra = 0
  }

  perRoll (pins) {
    this._status -= 1
    this._extra += pins
  }

  get status () {
    return this._status
  }

  get extra () {
    return this._extra
  }
}
