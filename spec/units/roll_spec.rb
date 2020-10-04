require 'roll'

describe Roll do
  it 'can have a value of pins between 0-10' do
    roll_0 = Roll.new(0)
    expect(roll_0.pins).to eq 0

    roll_10 = Roll.new(10)
    expect(roll_10.pins).to eq 10
  end

  it 'throws error if pins < 0' do
    expect{ Roll.new(-1) }.to raise_error(RuntimeError)
  end

  it 'throws error if pins > 10' do
    expect{ Roll.new(11) }.to raise_error(RuntimeError)
  end
end