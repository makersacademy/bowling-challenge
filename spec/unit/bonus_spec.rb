require 'bonus'

describe Bonus do
  before(:each) do
    Bonus.reset
  end

  describe '.strikes' do
    it 'stores an array of strike bonuses' do
      expect(Bonus.strikes).to be_an(Array)
    end
  end

  describe '.spares' do
    it 'stores an array of spare bonuses' do
      expect(Bonus.spares).to be_an(Array)
    end
  end

  describe '.add_spare' do
    it 'adds a bonus to the spare array' do
      Bonus.add_spare(6)
      expect(Bonus.spares).to eq [6]
    end
  end

  describe '.add_strike' do
    it 'adds a bonus to the strike array' do
      Bonus.add_strike(5)
      expect(Bonus.strikes).to eq [5]
    end
  end

end