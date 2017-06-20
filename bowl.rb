
class Frame 
    
    attr_accessor :roll1Score, :roll2Score, :frameScore, :frameNumber, :strike, :spare
    
    def initialize frameNumber
        @roll1Score = 0
        @roll2Score = 0
        @frameScore = 0
        @frameNumber = frameNumber
        @strike = false
        @spare = false
    end # end initialize
    
    def calculateScore
        if @roll1Score == 10
           @frameScore = 10  
           puts "Strike!"
           @strike=true
        end
        if @strike == false
            @frameScore = roll1Score + roll2Score
            if @frameScore >=10 
               @framescore = 10
               @spare = true
               puts "Spare!"
            end
        end
    end
    
    def addStrikeBonus frame1 
        @frameScore += frame1.frameScore
    end
    
    def addSpareBonus frame
        @frameScore += frame.roll1Score
    end
    
end # end frame

class Bowling
   def initialize 
      @totalScore = 0
      @turn = 0
      @frames = []
      @bonusRoll = 0
   end
   
   def play
       puts "Let's bowl!"
       while @turn < 10
         @frames << Frame.new(@turn)
         print "Frame #{@turn+1}: Please enter the first roll:"
         @frames[@turn].roll1Score = getRoll
         @frames[@turn].calculateScore
         if @frames[@turn].strike == false
             print "Frame #{@turn+1}: Please enter the second roll:"
             @frames[@turn].roll2Score = getRoll
             @frames[@turn].calculateScore
         end
         calculateBonus
         displayScores
         @turn+=1
       end # end while
       @turn-=1 # to reset to current frame
       #final frame bonus
       if @frames[@turn].strike || @frames[@turn].spare
           print "Frame #{@turn+1}: Final frame ended with a strike or spare. Please enter the additional third roll:"
           @bonusRoll = getRoll
           displayScores
       end
       puts "Thank you for playing!"
   end
   
   def getRoll
        roll = -1
        until roll >=0 and roll <=10
            roll = gets.strip
            if roll.to_i.is_a?(Integer)
                roll = roll.to_i
                break
            else
                puts "Please enter a number between 0 and 10"
                roll = -1
            end
        end
        roll
    end
   
   def calculateBonus
        return if @turn==0
        if @frames[@turn].strike
            @frames[@turn-1].addStrikeBonus @frames[@turn]
        elsif @frames[@turn].spare
            @frames[@turn-1].addSpareBonus @frames[@turn]
        end
   end
   
   def displayScores
       @totalScore=0
       @frames.each do |frame|
          puts "Frame #{frame.frameNumber + 1}: frame score = #{frame.frameScore}" 
          @totalScore += frame.frameScore
       end
       @totalScore+=@bonusRoll
       puts "Game Score = #{@totalScore}"
   end
   
end

bowl = Bowling.new
bowl.play