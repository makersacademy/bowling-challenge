function mockGame(framesArray) {
  this._frames = framesArray;
  this.isComplete = false;
  this.roll = jasmine.createSpy('roll');
}

module.exports = mockGame;
