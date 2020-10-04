class Game
  
  attr_reader :index

  def initialize
    @index = 0
    @roll_score = []
  end

  def self.roll(pins)
    @roll_score << pins
  end

  def self.strike?
    @roll_score[@index] == 10
  end

end