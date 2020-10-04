require 'scorecard'

describe Scorecard do
  subject(:scorecard) { Scorecard.new(frame) }
  let(:frame) { double('frame', :add_roll => [roll], :complete? => false, number: 1) }
  let(:roll) { double('roll') }

  it 'is initialised with the first frame' do
    scorecard = Scorecard.new
    expect(scorecard.frames[0]).to be_an_instance_of(Frame)
  end

  describe '#add_roll(roll)' do
    it 'sends a request to the current frame to add_roll with the given roll' do
      expect(frame).to receive(:add_roll).once.with(roll)

      scorecard.add_roll(roll)
    end

    it 'adds a new frame if the current one is now complete' do
      allow(frame).to receive(:complete?).and_return(true)

      expect(Frame).to receive(:new).once.with(2).and_return(frame)
      scorecard.add_roll(roll)
      expect(scorecard.frames.count).to eq 2
    end

    it "doesn't change frame if the current one is not complete" do
      scorecard.add_roll(roll)

      expect(scorecard.frames.count).to eq 1
    end
  end

  describe '#running_score' do
    it 'returns the total score of frames so far' do
      expect(frame).to receive(:score).and_return(14)

      expect(scorecard.running_score).to eq 14
    end
  end
end