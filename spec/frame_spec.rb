require 'frame'

describe Frame do
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
end
