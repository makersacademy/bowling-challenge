require 'frame'

describe Frame do
  
  subject(:frame) { Frame.new(1) } # argument here is number of frame
  let(:roll_1) { double { Roll.new(1) } }
  let(:roll_5) { double { Roll.new(5) } }
  let(:roll_10) { double { Roll.new(10) } }
  let(:roll_9) { double { Roll.new(9) } }


  # state - frame number, so I know in which frame I am  in
  it 'is between 1 - 10' do
    frame_1 = Frame.new(1)
    expect(frame_1.number).to eq 1
    frame_10 = Frame.new(10)
    expect(frame_10.number).to eq 10
  end

  # invalid frame number
  it 'raises error if frame_number < 1' do
    expect{ Frame.new(0) }.to raise_error(RuntimeError)
  end
  
  it 'raises error id frame_number > 10' do
    expect{ Frame.new(11) }.to raise_error(RuntimeError)
  end

  describe '#add_roll(roll)' do
    it 'adds the roll to all the rolls(array) if roll_count < 2 && score of this frame is <= 10' do
      frame.add_roll(roll_1) # 1 pin down
      frame.add_roll(roll_5) # 5 pins down
      expect(frame.rolls).to include(roll_1)
      expect(frame.rolls).to include(roll_5)
    end
  end

end
