require_relative 'bonus'

class Score
  class << self

    def total
      if @total > 300
        raise("You are cheating")
      end
      @total ||= 0
    end 

    def display(roll_display)
      @strike_count, @spare_count, @frame_score = 0, 0, []

      roll_display.each { |frame|
        if frame.include? "X" 
          if Bonus.strikes[@strike_count+1] == nil || Bonus.strikes.empty?
            add_max
          else
            include_strike_bonus
            @strike_count += 1
          end
        elsif frame.include? "/"
          if Bonus.spares.empty?
            add_max
          else
            include_spare_bonus
            @spare_count += 1
          end
        else
          @frame_score << frame.sum
        end
      }
      @frame_score.inject([]) { |x, y| x + [(x.last || 0) + y] }
    end

    def increase(points)
      @total ||= 0
      @total += points
    end

    def reset
      @total = 0
    end
  

    def include_strike_bonus
      @frame_score << (Bonus.strikes[@strike_count]+Bonus.strikes[@strike_count+1]+10)
    end

    def include_spare_bonus
      @frame_score << (Bonus.spares[@spare_count]+10)
    end

    def add_max
      @frame_score << 10
    end
  end
end

