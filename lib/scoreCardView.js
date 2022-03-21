const ScoreCard = require('./model/scoreCard.js')

class ScoreCardView {
  constructor(model) {
    this.model = model;

    const submitButtonEl = document.querySelector('#submit-button')
    const pinsInputEl = document.querySelector('#pins-input')

    submitButtonEl.addEventListener('click', () => {
      this.model.addKnockedPins(parseInt(pinsInputEl.value));

      const pins = this.model.pins;
      const totals = this.model.frames.frames;
      const tableCells = document.querySelectorAll('.roll-points')
      const totalCells = document.querySelectorAll('.frame-points')

      console.log(tableCells)
      console.log(pins)

      for(let i = 0; i < pins.length; i++) {
        tableCells[i].innerText = pins[i].toString();
      }

      for(let i = 0; i < totals.length; i++) {
        totalCells[i].innerText = totals[i].total.toString();
      }
    })
  }
}

module.exports = ScoreCardView;