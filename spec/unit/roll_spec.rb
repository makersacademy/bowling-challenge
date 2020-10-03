require 'roll'

describe Roll do

  describe 'hit_pins' do
    it 'returns the number of pins knocked down' do
      expect(subject.pins_hit(5)).to eq 5
    end
  end

  describe 'strike?' do
    it 'checks if 10 pins hit is a strike' do
      subject.pins_hit(10)
      expect(subject.strike?).to be_truthy 
    end

    it 'checks if 7 pins hit is not a strike' do
      subject.pins_hit(7)
      expect(subject.strike?).to be_falsey
    end
  end
end
