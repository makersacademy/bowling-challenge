class Bowling_v2
 
  def initialize
    @roll_score = []
  end
  
  def roll(pins)
    @roll_score << pins
  end

  def score
    result = 0
    index = 0
    10.times do
      if strike?(index)
        result += strike_score(index)
      index += 1
      elsif spare?(index)
        result += spare_score(index)
        index += 2
      else
        result += frame_score(index)
        index += 2 
      end
      
    end  
    result
  end

  def strike?(index)
    @roll_score[index] == 10
  end

  def spare?(index)
    @roll_score[index] + @roll_score[index +1] == 10
  end
  def spare_score(index)
    10 + @roll_score[index+2]
  end
  def strike_score(index)
    10 + @roll_score[index+1] + @roll_score[index+2]
  end
  def frame_score(index)
    @roll_score[index] + @roll_score[index +1]
  end
end