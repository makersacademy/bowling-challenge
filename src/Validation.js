class Validation {

  constructor(rollOne,rollTwo) {
    this.rollOne = rollOne;
    this.rollTwo = rollTwo;
  }

  isValid() {
    return (
      this._isNotEmpty() &&
      this._isAnInt() &&
      this._isBelowTen() &&
      this._isAboveZero() &&
      this._sumsToTen()
    )
  }

  _isNotEmpty() {
    return !(this.rollOne === "" || this.rollTwo === "")
  }

  _isAnInt() {
    return (
      Number.isInteger(Number(this.rollOne)) &&
      Number.isInteger(Number(this.rollTwo))
      )
  }

  _isBelowTen() {
    return (
      Number(this.rollOne) <= 10 &&
      Number(this.rollTwo) <= 10
    )
  }

  _isAboveZero() {
    return (
      Number(this.rollOne) >= 0 &&
      Number(this.rollTwo) >= 0
    )
  }

  _sumsToTen() {
    return (
      Number(this.rollOne) + Number(this.rollTwo) <= 10
    )
  }


}