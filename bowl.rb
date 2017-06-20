
class Frame 
    def initialize frameNumber
        @roll1Score = 0
        @roll2Score = 0
        @frameScore = 0
        @frameNumber = frameNumber
        @strike = false
        @spare = false
    end # end initialize
    
    def frameNumber num
        @frameNumber = num
    end
    
    def frameNumber
        @frameNumber
    end
    
    def setRoll1Score score
        @roll1Score = score
        calculateScore
    end
    
    def setRoll2Score score
        return if @roll1Score == 10
        @roll2Score = score
        calculateScore
    end
    
    def setStrike
        @strike=true
    end
    
    def setSpare
        @spare =true
    end
    
    def strike?
        @strike
    end
    
    def spare?
        @spare
    end
    
    private def calculateScore
        if @roll1 == 10
           @frameScore = 10  
           puts "Strike!"
           @strike=true
        elsif @strike == false
            @frameScore = roll1Score + roll2Score
            if @frameScore >=10 
               @framescore = 10
               @spare = true
               puts "Spare!"
            end
        end
    end
    
    def addStrikeBonus frame
        @frameScore += frame.frameScore
    end
    
    def addSpareBonus frame
        @frameScore += frame.roll1Score
    end
    
    def frameScore
        @frameScore
    end
    
    def roll1Score
        @roll1Score
    end
    
    def roll2Score
        @roll2Score
    end
    
end # end frame

class Bowling
   def initialize 
      @totalScore = 0
      @maxFrames = 10
      @turn = 0
      @frames = []
   end
   
   def play
       puts "Let's bowl!"
       while @turn < @maxFrames
         @frames << Frame.new(@turn)
         print "Frame #{@turn+1}: Please enter the first roll:"
         @frames[@turn].setRoll1Score gets.strip.to_i 
         if @frames[@turn].roll1Score != 10
             print "Frame #{@turn+1}: Please enter the second roll:"
             @frames[@turn].setRoll2Score gets.strip.to_i 
         end
         calculateBonus
         displayScores
         @turn+=1
       end
       puts "Thank you for playing!"
   end
   
   def calculateBonus
        return if @turn==0
        if @frames[@turn].strike?
            @frames[@turn-1].addStrikeBonus @frames[@turn]
        elsif @frames[@turn].spare?
            @frames[@turn-1].addSpareBonus @frames[@turn]
        end
   end
   
   def totalScore
      @totalScore 
   end
   
   def displayScores
       @totalScore=0
       @frames.each do |frame|
          puts "Frame #{frame.frameNumber + 1}: frame score = #{frame.frameScore}" 
          @totalScore += frame.frameScore
       end
       puts "Game Score = #{@totalScore}"
   end
   
   def calculateTotalScore
       
   end
   
end

bowl = Bowling.new
bowl.play