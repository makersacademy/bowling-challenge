require './lib/frame'
describe Frame do

  it 'can return how many pins are standing after 1 roll' do
    frame = Frame.new
    frame.roll(3)
    expect(frame.pins).to eq(7)
  end

  it 'can return how many pins are standing after 2 rolls' do
    frame = Frame.new
    frame.roll(3)
    frame.roll(6)
    expect(frame.pins).to eq(1)
  end

  it 'is over if there have been 2 rolls' do
    frame = Frame.new
    frame.roll(1)
    frame.roll(1)
    expect(frame.is_over).to eq(true)
  end

  it 'is over if there has been a strike' do
    frame = Frame.new
    frame.roll(10)
    expect(frame.is_over).to eq(true)
  end

  it 'knows if there has been a strike' do
    frame = Frame.new
    expect(frame.strike).to eq(false)
    frame.roll(10)
    expect(frame.strike).to eq(true)
  end

  it 'knows if there has been a spare' do
    frame = Frame.new
    expect(frame.spare).to eq(false)
    frame.roll(4)
    frame.roll(6)
    expect(frame.spare).to eq(true)
    frame = Frame.new
    frame.roll(10)
    expect(frame.spare).to eq(false)
  end

end