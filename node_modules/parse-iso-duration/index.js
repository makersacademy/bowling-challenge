var week = /^P([0-9]+W)$/
var dateTime = /^P(([0-9]+Y)?([0-9]+M)?([0-9]+D)?)?(T([0-9]+H)?([0-9]+M)?([0-9]+S)?)?$/

function extractInt (str) {
  return parseInt(str.substring(0, str.length - 1), 10)
}

function parsePart (mode, str) {
  if (!str) return 0

  var n = extractInt(str)
  var id = mode + ' ' + str[str.length - 1]

  if (n === 0) return 0

  switch (id) {
    case 'time S': return n * 1000
    case 'time M': return n * 60000
    case 'time H': return n * 3600000
    case 'date D': return n * 86400000
    case 'week W': return n * 604800000
    case 'date M':
    case 'date Y':
      throw new Error('Ambiguous duration')
  }
}

function parseIsoDuration (str) {
  var m

  m = week.exec(str)
  if (m) {
    return parsePart('week', m[1])
  }

  m = dateTime.exec(str)
  if (m) {
    return (
      parsePart('date', m[2]) +
      parsePart('date', m[3]) +
      parsePart('date', m[4]) +
      parsePart('time', m[6]) +
      parsePart('time', m[7]) +
      parsePart('time', m[8])
    )
  }

  throw new Error('Invalid duration')
}

module.exports = parseIsoDuration
