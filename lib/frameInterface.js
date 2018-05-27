const Frame = require('./frame')
const LastFrame = require('./lastFrame')

function FrameInterface (frame) {
  if (frame == 'last') {
    return new LastFrame()
  } else
    return new Frame()
}
module.exports = FrameInterface
