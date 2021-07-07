'use strict';

class Player {

  constructor(name) {
    this._name = name;
    this._score = 0;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get score() {
    return this._score;
  }

  set score(value) {
    this._score = value;
  }

  add(value) {
    this._score += value;
  }

  subtract(value) {
    this._score -= value;
  }
}
