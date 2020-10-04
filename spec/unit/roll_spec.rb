require 'roll'

describe Roll do
  
  before(:each) do
    @roll = Roll.new
  end

  describe '#hit_pins' do
    it 'returns the number of pins knocked down' do
      expect(@roll.pins_hit(5)).to eq 5
    end
  end

  describe '#strike?' do
    it 'checks if 10 pins hit is a strike' do
      @roll.pins_hit(10)
      expect(@roll.strike?).to be_truthy 
    end

    it 'checks if 7 pins hit is not a strike' do
      @roll.pins_hit(7)
      expect(@roll.strike?).to be_falsey
    end
  end

  describe '#spare?' do
    context 'the first roll is a 6' do
      it 'checks whether a second roll of 4 is a spare' do
        @roll.pins_hit(4)
        expect(@roll.spare?(6)). to be_truthy
      end

      it 'checks whether a second roll of 2 is a spare' do
        @roll.pins_hit(2)
        expect(@roll.spare?(6)). to be_falsey
      end

      it 'returns an error if total is greater than 10' do
        @roll.pins_hit(6)
        expect { @roll.spare?(6) }.to raise_error 'You are cheating'
      end
    end
  end
end
