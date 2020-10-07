require 'roll'

describe Roll do
 
  it 'can have between 0 - 10 pins' do #user should input between 0-10
    roll_0 = Roll.new(0)
    expect(roll_0.pins).to eq 0
    roll_10 = Roll.new(10)
    expect(roll_10.pins).to eq 10
  end

  it 'raises error if pins < 0' do #user cannot input negative numbers
    expect{ Roll.new(-1) }.to raise_error(RuntimeError)
  end

  it 'raises error if pins > 10' do #user cannot input negative numbers
    expect{ Roll.new(-1) }.to raise_error(RuntimeError)
  end
end

