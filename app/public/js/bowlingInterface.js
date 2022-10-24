class bowlingInterface {
  constructor(element, game) {
    this._element = element
    this._game = game
    this.newRoll = this.newRoll.bind(this)
    
    this.renderControls()
    this.renderScorecard()
  }

  renderControls() {
    this._element.innerHTML += `<div id='controls'><form onsubmit="return interface.newRoll()"><input type='text' id='next-roll'><button type='submit', id='add-roll'>Add Roll</button></form></div><div id='scorecard'></div>`;
  }

  renderScorecard() {
    let headerRow = ''
    let rollsRow = ''
    let totalsRow = ''
    let runningTotal = 0
    let assessedRolls
    
    this._game._frames.forEach((frame, index) => {
      assessedRolls = this.assessRolls(frame.rolls)
      runningTotal += frame.getTotal();
      headerRow += `<td colspan='2'>${index + 1}</td>`;
      rollsRow += `<td>${assessedRolls[0]}</td><td>${assessedRolls[1]}</td>`;
      totalsRow += `<td colspan='2'>${runningTotal}</td>`;
    });

    document.getElementById("scorecard").innerHTML = `<table><tr>${headerRow}</tr><tr>${rollsRow}</tr><tr>${totalsRow}</tr></table>`;
    this.clearAndFocus();
  }

  newRoll() {
    let input = document.getElementById("next-roll")
    this._game.roll(parseInt(input.value))
    this.renderScorecard()
    return false
  }

  assessRolls(rollsArray) {
    if (rollsArray[0] === 10) {
      return ['','X'];
    } else if (rollsArray[0]+rollsArray[1] === 10) {
      return [rollsArray[0], '/'];
    } else { let finalArray = ['',''];
      if (rollsArray[0] != undefined) {
        finalArray[0] = rollsArray[0];
      }
      if (rollsArray[1] != undefined) {
        finalArray[1] = rollsArray[1];
      }
      return finalArray;
    }
  }

  clearAndFocus() {
    let input = document.getElementById("next-roll")
    input.value = ''
    input.focus()
  } 
}

// module.exports = bowlingInterface;
