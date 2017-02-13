var BowlingScoreboard = class {
  constructor(playerClass, frameClass, rollClass, refereeClass) {
    this._framesClass = frameClass;
    this._rollClass = rollClass;
    this._refereeObj = new refereeClass();

    this.player = [new playerClass(this._framesClass, this._rollClass, this._refereeObj)];
  };

};
