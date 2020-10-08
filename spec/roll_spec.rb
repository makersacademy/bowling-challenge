require 'roll'

describe Roll do
  it 'does not raise error if pins between 0-10 ' do 
    expect{ Roll.new(5) }.not_to raise_error
  end
end

