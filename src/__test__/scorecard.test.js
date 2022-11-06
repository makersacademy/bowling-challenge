const Frame = require('../frame');
const LastFrame = require('../lastFrame');
const Scorecard = require('../scorecard');

jest.mock('../frame');
jest.mock('../lastFrame');

describe('Scorecard', () => {
  beforeEach(() => {
    Frame.mockClear();
    LastFrame.mockClear();
    // scorecard = new Scorecard();
  })

  describe('#initializeWithFrames()', () => {
    it('creates 10 frames in scorecard', () => {
      const scorecard = new Scorecard;
      expect(scorecard.frames.length).toEqual(10);
    })
  })

  const mockFrameSetter = (
      frame, first, second, strike, spare, unplayed, complete) => {
    frame.getFirstRoll.mockImplementation(() => first);
    frame.getSecondRoll.mockImplementation(() => second);
    frame.isStrike.mockImplementation(() => strike);
    frame.isSpare.mockImplementation(() => spare);
    frame.isUnplayed.mockImplementation(() => unplayed);
    frame.isComplete.mockImplementation(() => complete);
  }

  describe('#formatFrame(frame)', () => {
    it('formats unplayed frame', () => {
      const scorecard = new Scorecard();
      const mockFrame = new Frame();
      mockFrameSetter(mockFrame, 0, 0, false, false, true, false);
      expect(scorecard.formatFrame(mockFrame)).toEqual('| | | |')
    })

    it('formats frame with rolls 4 and 5', () => {
      const scorecard = new Scorecard();
      const mockFrame = new Frame();
      mockFrameSetter(mockFrame, 4, 5, false, false, false, true);
      expect(scorecard.formatFrame(mockFrame)).toEqual('| |4|5|')
    })

    it('formats frame with rolls 4 and 6', () => {
      const scorecard = new Scorecard();
      const mockFrame = new Frame();
      mockFrameSetter(mockFrame, 4, 6, false, true, false, true);
      expect(scorecard.formatFrame(mockFrame)).toEqual('| |4|/|')
    })

    it('formats frame with strike', () => {
      const scorecard = new Scorecard();
      const mockFrame = new Frame();
      mockFrameSetter(mockFrame, 10, 0, true, false, false, true);
      expect(scorecard.formatFrame(mockFrame)).toEqual('| |X| |')
    })
  })

  // last two tests to be converted

})
////////////////////////////////////////////////
//   context 'processes full game' do
//     it 'returns score 133 for example game' do
//       io = double(:io)
//       scorecard = Scorecard.new(io)
//       expect(io).to receive(:gets).and_return(
//         '1', '4', '4', '5', '6', '4', '5', '5', '10', '0', '1', '7', '3', '6',
//         '4', '10', '2', '8', '6')
//       allow(io).to receive(:puts)
//       allow(io).to receive(:print)
//       scorecard.player_name = 'Loki'
//       scorecard.game
//       expect(scorecard.current_total).to eq 133
//     end

//     it 'returns score 300 for perfect game' do
//       io = double(:io)
//       scorecard = Scorecard.new(io)
//       expect(io).to receive(:gets).and_return(
//         '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10')
//       allow(io).to receive(:puts)
//       allow(io).to receive(:print)
//       scorecard.player_name = 'Loki'
//       scorecard.game
//       expect(scorecard.current_total).to eq 300
//     end
//   end
// end