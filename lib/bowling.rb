
class Bowling
	attr_reader :score
	def initialize
    @rolls = []
  end

	def roll(pins)
		@rolls << pins 
	end 

  def score
    result = 0
    frame = 0
    10.times do
      if strike?(frame)
        result = result + strike_bonus(frame) 
        frame += 1
      elsif spare?(frame)
        result +=  spare_bonus(frame)
        frame += 2
      else
        result = result + sum(frame)
        frame += 2
      end
    end
    result
  end

  def strike?(frame)
    @rolls[frame] == 10
  end

  def sum(frame)
    @rolls[frame] + @rolls[frame + 1]
  end

  def spare_bonus(frame)
    @rolls[frame + 2] + 10
  end

  def strike_bonus(frame)
    @rolls[frame + 1] + @rolls[frame + 2] + 10
  end

  def spare?(frame)
    @rolls[frame] + @rolls[frame + 1] == 10
  end
end

