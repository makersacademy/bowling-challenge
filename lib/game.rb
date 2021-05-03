class Game

    def initialize
        @rolls =[]
    end

    def roll(pins)
        @rolls << pins
    end

    def score
        total = 0
        roll_index = 0
        10.times do
            if strike?(roll_index)
                total += strike_score(roll_index)
                roll_index += 1
            elsif spare?(roll_index)
                total += spare_score(roll_index)
                roll_index += 2
            else
                total += frame_score(roll_index)
                roll_index += 2
            end
        end
        total
    end


    private
    def spare?(roll_index)
        @rolls[roll_index] + @rolls[roll_index + 1] == 10
    end
    
    def strike?(roll_index)
        @rolls[roll_index] == 10
    end

    def spare_score(roll_index)
        @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
    end

    def frame_score(roll_index)
        @rolls[roll_index] + @rolls[roll_index + 1]
    end


    def strike_score(roll_index)
        @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
    end

end