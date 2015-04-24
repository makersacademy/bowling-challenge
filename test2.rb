
class Roll
  attr_reader :strike, :score
  def initialize(pins)
    if pins == 10
      @strike = true
    end
    @score = pins
  end
end

class Frame
  attr_reader :score, :rolls, :strike, :spare
  def initialize *rolls
    @rolls = rolls
  end
end

class Game

  def initialize array_of_rolls
    @frames = []
    rolls = []
    array_of_rolls.each do |roll|
      rolls << Roll.new(roll)
    end
    put_rolls_in_frame
  end

  def put_rolls_in_frame
  

    end
   
  end


end