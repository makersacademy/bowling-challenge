// This is for node demo!!

const generateTopstring = (frames) => {
  let topstring = '|'
  for (let i = 0; i < frames.length; i++) {
    let frame = frames[i]
    let points = [frame.roll1]
    if (frame.isStrike()) {
      points.push('X')
    } else if (frame.isSpare()) {
      points.push('/')
    } else if (frame.roll2 === undefined) {
      points.push(' ')
    } else {
      points.push(frame.roll2)
    };
    let string = ` ${points[0]} ${points[1]}`;
    
    if (string.length == 4) {
      string += '  |'
    } else {
      string += ' |'
    }
    topstring += string
  }
  return topstring
}

const generateBottomstring = (frames) => {
  let bottomstring = '|'
  for (let i = 0; i < frames.length; i++) {
    let frame = frames[i]
    let string = ` ${frame.score}`
    if (string.length === 2) {
      string += '    |'
    } else {
      string += '   |'
    }
    bottomstring += string
  }
  return bottomstring
}

module.exports = {
  generateTopstring, 
  generateBottomstring
}