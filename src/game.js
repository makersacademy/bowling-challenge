'use strict';

class Game {

  constructor(player) {
    this._player = player;
  }

  get player() {
    return this._player;
  }

  set player(value) {
    this._player = value;
  }
}