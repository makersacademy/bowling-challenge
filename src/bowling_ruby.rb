class ScoreCalculator
  attr_reader :score, :score_final

  def initialize
    @score = {
    1 => [],
    2 => [],
    3 => [],
    4 => [],
    5 => [],
    6 => [],
    7 => [],
    8 => [],
    9 => [],
    10 => [],
    :bonus => [],

  }

    @score_final = 0
  end

  def add_frame(frame, roll_one = 0, roll_two = 0)


    @score[frame] = [roll_one, roll_two]

  end

  def calculate(score = @score)

    score.each do |frame, rolls|

      if rolls[0] == 10 && frame == 10 # strike on frame 10
        p frame
        p @score_final
        @score_final += 10 + score[:bonus].sum
        break

      elsif rolls.sum == 10 && frame == 10 # spare on frame 10
        p frame
        p @score_final
        @score_final += 10 + score[:bonus][0]
        break

      elsif rolls[0] == 10 && frame == 9 && score[10][0] == 10 # strike on frame 9
        p frame
        p @score_final
        @score_final += 10 + score[:bonus][0] + score[10][0]

      elsif rolls[0] == 10 && score[frame + 1][0] == 10 # 2 strikes in a row
        p frame
        p @score_final
        @score_final += 10+ (score[frame + 1][0]) + (score[frame + 2].sum)

      elsif rolls[0] == 10 # this signifies a strike
        @score_final += 10 + (score[frame + 1].sum)
        # + (score[frame + 2].sum)
        p frame
        p @score_final

      elsif rolls[0] + rolls[1] == 10 # this is for spares
        @score_final += 10 + score[frame + 1][0]

        p frame
        p @score_final
      else
        @score_final += rolls.sum
        p frame
        p @score_final
      end


    end

    return @score_final


  end

end

s = ScoreCalculator.new

s.add_frame(1, 10)
s.add_frame(2, 10)
s.add_frame(3, 10)
s.add_frame(4, 10)
s.add_frame(5, 10)
s.add_frame(6, 10)
s.add_frame(7, 10)
s.add_frame(8, 10)
s.add_frame(9, 10)
s.add_frame(10, 10)
s.add_frame(:bonus, 10, 10)

# s.add_frame(1, 1, 4)
# s.add_frame(2, 4, 5)
# s.add_frame(3, 6, 4)
# s.add_frame(4, 5, 5)
# s.add_frame(5, 10)
# s.add_frame(6, 0, 1)
# s.add_frame(7, 7, 3)
# s.add_frame(8, 6, 4)
# s.add_frame(9, 10)
# s.add_frame(10, 2, 8)
# s.add_frame(:bonus, 6, 0)



p s.calculate
