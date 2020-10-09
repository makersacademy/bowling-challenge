class Game
  
  attr_reader :rolls, :roll_index

  def initialize
    @rolls = []
    @roll_index = 0
  end

  # my roll takes pins as arguments, then stores 
  # all inside array @rolls
  def roll(pins)
    @rolls << pins
  end

  def score
    # roll_index = 0
    total = @rolls.sum
    # context
  end




  def frame_score
    @rolls[roll_index] + @rolls[roll_index + 1]
  end
   
  def strike?
    @rolls[roll_index] == 10
  end

  def strike_score
    @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
  end 

  def spare?
    frame_score == 10
  end

  def spare_score
    frame_score + @rolls[roll_index + 2] + @rolls[roll_index + 2]
  end
end