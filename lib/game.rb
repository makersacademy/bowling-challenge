class Game

    def initialize
        @rolls =[]
    end

    def roll(pins)
        @rolls << pins
    end

    def score
        result = 0
        rollIndex = 0
        10.times do
            if spare?(rollIndex)
                result += spare_score(rollIndex)
            else
                result += frame_score(rollIndex)
            end
            rollIndex += 2
        end
        result
    end

    def spare?(rollIndex)
        @rolls[rollIndex] + @rolls[rollIndex + 1] == 10
    end

    def spare_score(rollIndex)
        @rolls[rollIndex] + @rolls[rollIndex + 1] + @rolls[rollIndex + 2]
    end

    def frame_score(rollIndex)
        @rolls[rollIndex] + @rolls[rollIndex + 1]
    end


end