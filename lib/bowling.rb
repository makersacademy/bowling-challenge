class Bowling

  attr_reader :strike

  def initialize
    @strike = false
  end

  def is_strike?(first_bowl)
    @strike = true if first_bowl == 10
  end

end