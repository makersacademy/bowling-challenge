class Bowling

    attr_reader :score, :turn, :bonus, :is_spare, :is_strike
    
    def initialize (turn = 0, score = 0,bonus = 0,is_spare = false, is_strike = false  )
        @turn = turn
        @score = score
        @bonus = bonus
        @is_spare = is_spare
        @is_strike = is_strike
    end

    def game(ball_1, ball_2)
        frame_score = ball_1 + ball_2
         if frame_score < 10
            add(ball_1,ball_2)
         elsif frame_score == 10
            add(ball_1<ball_2)
            spare
         end
    end

    def turn_counter
        @turn = @turn + 1
    end

    def add(ball_1,ball_2 = 0)
        @score = ball_1 + ball_2
        turn_counter
        
        @strike = false
    end

    def spare()
        @score = @score + 10
        @is_spare =  true
        @is_srike = false
        turn_counter
    end

    def strike
        @score = @score + 10
        @is_strike = true
        @is_spare = false
        turn_counter
    end


end