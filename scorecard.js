const Frame = require('./frame');

class Scorecard {

  showPins(frames) {
    return frames.map(frame =>
      this.format(frame)
      ).join(' | ');
  }

  showTotals(frames) {
    let cumulativeTotal = 0
    return frames.map(frame => {
      cumulativeTotal += frame.total
      if (!frame.hasActiveBonus() || frame instanceof Frame.FinalFrame) {
        return `${cumulativeTotal}`.padStart(3, ' ')
      } else {
        return ''.padStart(3, ' ')
      }
    }).join(' | ');
  }

  format(frame) {
    if (frame instanceof Frame.FinalFrame) {
      return this.formatFinalFrame(frame)
    } else if (frame.isStrike()) {
      return ['X -']
    } else if (frame.isSpare()) {
      return [`${frame.pins[0]} /`]
    } else {
      return frame.pins.join(' ')
    }
  }

  formatFinalFrame(frame) {
    let formattedFrame
    if (frame.isSpare()) {
      formattedFrame = [frame.pins[0], '/']
      if (frame.pins[2] === 10) {
        formattedFrame.push('X')
      } else {
        formattedFrame.push(frame.pins[2])
      }
    } else if (frame.isStrike()) {
      formattedFrame = frame.pins.map(pin => {
        if (pin === 10) {
          return 'X'
        } else {
          return pin
        }
      });
    } else {
      formattedFrame = frame.pins
    }
    return formattedFrame.join(' ')
  }
}

module.exports = Scorecard;
