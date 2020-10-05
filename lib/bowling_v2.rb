class Bowling_v2

 
  def initialize
    @roll_score = []
    @index = 0
    @result = 0
  end

  def roll(pins)
    @roll_score << pins
  end

  def score
    10.times do
      if strike?
        @result += strike_score
      @index += 1
      elsif spare?
        @result += spare_score
        @index += 2
      else
        @result += frame_score
        @index += 2 
      end
      
    end  
    @result
  end

  def strike?
    @roll_score[@index] == 10
  end

  def spare?
    @roll_score[@index] + @roll_score[@index +1] == 10
  end
  
  def spare_score
    10 + @roll_score[@index+2]
  end
  
  def strike_score
    10 + @roll_score[@index+1] + @roll_score[@index+2]
  end
  
  def frame_score
  p  @roll_score[@index] + @roll_score[@index +1]
  end

  def current_score
    @result = 0
    @index = 0
    number_of_frames.times do
      if strike?
         if @index == (@roll_score.length) 
           @result += 10 + @roll_score[@index+1]
           @index += 1
         else
          @result += strike_score
          @index += 1
         end
      elsif spare?
          if @index == (@roll_score.length)
            @result += 10 + @roll_score[@index+1]
            @index += 2
          else
            @result += strike_score
            @index += 2
          end
      else
        @result += frame_score
        @index += 2
      end  
    end  
    @result
  end
  def number_of_frames
    (@roll_score.reject{|n| n == 10}.length + (@roll_score.count(10) * 2)) / 2
  end
end
