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
            if @rolls[rollIndex] == 10
                result += @rolls[rollIndex] + @rolls[rollIndex + 1] + @rolls[rollIndex + 2]
                rollIndex += 1
            elsif spare?(rollIndex)
                result += spare_score(rollIndex)
                rollIndex += 2
            else
                result += frame_score(rollIndex)
                rollIndex += 2
            end
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