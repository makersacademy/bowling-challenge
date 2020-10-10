class Game
  
  attr_reader :rolls, :roll_index, :total, :number_of_frames

  def initialize
    @rolls = []
    @roll_index = 0
    @total = 0
    @number_of_frames = 10
  end

  # my roll takes pins as arguments, then stores 
  # all inside array @rolls
  def roll(pins)
    @rolls << pins
  end

  def score
    @total = @rolls.sum
  end
  
  def current_score
    @total = 0
    @roll_index = 0
    @number_of_frames.times do
      if strike?
        if @roll_index == @rolls.length
          @total += 10 + @rolls[@roll_index + 1]
          @roll_index += 1
        else
          @total += strike_score
          @roll_index += 1
        end
      elsif spare?
        if @rolls == @rolls.length
          @total += 10 + @rolls[@roll_index + 1]
          @roll_index += 2
        else
          @total += strike_score
          @roll_index += 2
        end
      else
        @total += frame_score
        @roll_index += 2
      end  
    end  
    @total
  end

  def frame_score
    @rolls[@roll_index] + @rolls[@roll_index + 1]
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

  def frame10
    frame_score
  end

  def strike10
    @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
  end

  def spare10
    @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
  end
end
