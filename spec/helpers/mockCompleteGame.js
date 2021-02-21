function mockCompleteGame(framesArray) {
  this._frames = framesArray;
  this.isComplete = true;
  this.roll = jasmine.createSpy('roll').and.throwError('game over error');
}

module.exports = mockCompleteGame;
