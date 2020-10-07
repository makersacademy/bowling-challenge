require 'frame'

describe Frame do
  
  subject(:frame) { Frame.new(1) } # argument here is number of frame



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

end
