require 'frame'

describe Frame do

  subject(:frame) { Frame.new(1) }

  let(:roll_2) { double('roll', pins: 2) }
  let(:roll_8) { double('roll', pins: 8) }
  let(:roll_10) { double('roll', pins: 10) }


  it 'has a frame number between 1-10' do
    frame_1 = Frame.new(1)
    expect(frame_1.number).to eq 1

    frame_10 = Frame.new(10)
    expect(frame_10.number).to eq 10
  end

  it 'throws error if frame_num < 1' do
    expect{ Frame.new(0) }.to raise_error(RuntimeError)
  end

  it 'throws error if frame_num > 10' do
    expect{ Frame.new(11) }.to raise_error(RuntimeError)
  end

  describe '.add_roll(roll)' do
    context 'frame number is 1-9' do
      it 'adds the roll to rolls if roll count < 2 AND new frame score would be <= 10' do
        frame.add_roll(roll_2)
        frame.add_roll(roll_8)
        expect(frame.rolls).to include(roll_2)
        expect(frame.rolls).to include(roll_8)
      end

      it 'throws error if current roll count == 2' do
        frame.add_roll(roll_2)
        frame.add_roll(roll_2)
        expect{ frame.add_roll(roll_2) }.to raise_error(RuntimeError)
      end

      it 'throws error if the current frame score == 10' do
        frame.add_roll(roll_10)
        expect{ frame.add_roll(roll_2) }.to raise_error(RuntimeError)
      end

      it 'throws error if the current frame score + rolled pins > 10' do
        frame.add_roll(roll_8)
        expect{ frame.add_roll(roll_8) }.to raise_error(RuntimeError)
      end
    end
    context 'frame number is 10' do
      #TODO
    end
  end
end
