(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/model/frames.js
  var require_frames = __commonJS({
    "lib/model/frames.js"(exports, module) {
      var Frames = class {
        constructor() {
          this.frames = [];
        }
        createNewFrame(rollsArr) {
          this.#addBonusPoints(rollsArr);
          if (this.tenthFrame()) {
            this.frames.at(-1).rolls.concat(rollsArr);
          } else {
            this.frames.push({
              rolls: rollsArr,
              total: rollsArr.reduce((a, b) => a + b, 0)
            });
          }
        }
        totalPoints() {
          let result = 0;
          this.frames.forEach((frame) => result += frame.total);
          return result;
        }
        tenthFrame() {
          return this.frames.length === 10;
        }
        #addBonusPoints(rollsArr) {
          if (this.#previousWasStrike()) {
            this.frames.at(-1).total += rollsArr.reduce((a, b) => a + b, 0);
          } else if (this.#previousWasSpare()) {
            this.frames.at(-1).total += rollsArr[0];
          }
        }
        #previousWasStrike() {
          return this.frames.length > 0 && this.frames.at(-1).rolls.at(-1) === 10;
        }
        #previousWasSpare() {
          return this.frames.length > 0 && this.frames.at(-1).total === 10 && this.frames.at(-1).rolls[0] !== 10;
        }
      };
      module.exports = Frames;
    }
  });

  // lib/model/scoreCard.js
  var require_scoreCard = __commonJS({
    "lib/model/scoreCard.js"(exports, module) {
      var Frames = require_frames();
      var ScoreCard2 = class {
        constructor(frames = new Frames()) {
          this.rolls = [];
          this.pins = [];
          this.frames = frames;
        }
        addKnockedPins(pins) {
          if (this.#tooManyPins(pins))
            throw "this is a 10 pins bowling game!";
          this.rolls.push(pins);
          this.pins.push(pins);
          if (pins === 10 && this.rolls.length === 1) {
            this.pins.push("X");
          }
          if (this.#frameIsSet(pins))
            this.#setNewFrame();
        }
        getTotalPoints() {
          return this.frames.totalPoints();
        }
        #setNewFrame() {
          this.frames.createNewFrame(this.rolls);
          this.rolls = [];
        }
        #frameIsSet(pins) {
          return this.rolls.length === 2 || pins === 10 || this.frames.tenthFrame();
        }
        #tooManyPins(pins) {
          return this.rolls.reduce((partialSum, a) => partialSum + a, 0) + pins > 10;
        }
      };
      module.exports = ScoreCard2;
    }
  });

  // lib/scoreCardView.js
  var require_scoreCardView = __commonJS({
    "lib/scoreCardView.js"(exports, module) {
      var ScoreCard2 = require_scoreCard();
      var ScoreCardView2 = class {
        constructor(model2) {
          this.model = model2;
          const submitButtonEl = document.querySelector("#submit-button");
          const pinsInputEl = document.querySelector("#pins-input");
          submitButtonEl.addEventListener("click", () => {
            this.model.addKnockedPins(parseInt(pinsInputEl.value));
            const pins = this.model.pins;
            const totals = this.model.frames.frames;
            const tableCells = document.querySelectorAll(".roll-points");
            const totalCells = document.querySelectorAll(".frame-points");
            console.log(tableCells);
            console.log(pins);
            for (let i = 0; i < pins.length; i++) {
              tableCells[i].innerText = pins[i].toString();
            }
            for (let i = 0; i < totals.length; i++) {
              totalCells[i].innerText = totals[i].total.toString();
            }
          });
        }
      };
      module.exports = ScoreCardView2;
    }
  });

  // lib/index.js
  var ScoreCard = require_scoreCard();
  var ScoreCardView = require_scoreCardView();
  var model = new ScoreCard();
  var view = new ScoreCardView(model);
  console.log("Hello");
})();
