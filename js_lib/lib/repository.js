class Repository {
  constructor() {
    this._frames = [];
  }

  add_frame(roll1, roll2, roll3) {
    this._frames.push([roll1, roll2, roll3]);
  }

  get frames() {
    return this._frames;
  }
}

module.exports = Repository;
