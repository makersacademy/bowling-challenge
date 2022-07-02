require 'frame'    # The frame is a smaller unit of scoring the game
                   # Made up of one two, or possibly in the tenth and final
                   # frame, three rolls.


# BowlingScoreManager uses Singleton design pattern
class BowlingScoreManager


  def self.score_game( rolls )
    @frames = self.setup_frames();
    self.score_frames( rolls );
    return self.get_grand_total( @frames )
  end
    
    
  def self.score_frames( rolls )
    frame_num = 1
    on_roll = 1
    for roll_from_start in 0...rolls.size
      if frame_num == 10
        handle_frame_10( rolls.drop(roll_from_start), @frames )
        break
      end
      if on_roll == 1
        self.manage_frame_roll1( rolls[roll_from_start], @frames, frame_num );
        if @frames[frame_num].status == :strike
          # Move to roll one in next frame
          frame_num += 1
          next
        end
        on_roll = 2
      else # on_roll == 2
        self.manage_frame_roll2( rolls[roll_from_start], @frames, frame_num );        
        frame_num += 1
        on_roll = 1
      end      
    end
  end
   
        
  def self.setup_frames
    # Do not use index 0 as this models the domain more closely
    frames_array = [nil];
    (1..10).each { frames_array << Frame.new }
    return frames_array;
  end

  
  def self.manage_frame_roll1( rollValue, frames, frame_num );
    (frames[frame_num]).roll1 = rollValue
    manage_poss_prev_spare( rollValue, frames, frame_num );
    manage_roll1_poss_prev_strike( frames, frame_num )
    manage_poss_strike_this_frame( frames, frame_num )
  end

  
  def self.manage_frame_roll2( rollValue, frames, frame_num )        
    (frames[frame_num]).roll2 = rollValue
    manage_roll2_poss_prev_strike( frames, frame_num )
    manage_poss_spare_this_frame( frames, frame_num )
    if !( frames[frame_num].status == :spare )
      sum_normal_frame( frames, frame_num )
    end
  end


  def self.manage_poss_prev_spare( roll, frames, frame_num )
    if ((frame_num > 1) && frames[frame_num-1].status == :spare)
      frames[frame_num-1].total += roll
      frames[frame_num-1].completed = true
    end    
  end
  
  
  def self.manage_roll1_poss_prev_strike( frames, frame_num )
    if ((frame_num > 1) && frames[frame_num-1].status == :strike)
      # Add this roll to previous frame but don't yet mark completed
      # because two rolls need to be added to a strike
      frames[frame_num-1].total += (frames[frame_num]).roll1
      # Deal with possible strike from two frames ago
      if ((frame_num > 2) && frames[frame_num-2].status == :strike)
        # Add this roll to strike from two frames ago
        # and mark it complete as both of its following rolls
        # have now been added
        frames[frame_num-2].total += (frames[frame_num]).roll1
        frames[frame_num-1].completed = true
      end
    end
  end

  
  def self.manage_roll2_poss_prev_strike( frames, frame_num )
    if ((frame_num > 1) && frames[frame_num-1].status == :strike)
      # Add this roll to previous frame and then mark completed
      # because this is second of two rolls need to be added to a strike
      frames[frame_num-1].total += (frames[frame_num]).roll2
      frames[frame_num-1].completed = true
    end          
  end

  def self.manage_poss_spare_this_frame( frames, frame_num )
    if ((frames[frame_num].roll1) + (frames[frame_num].roll2) == 10)
      frames[frame_num].status = :spare
      frames[frame_num].total = 10
      frames[frame_num].completed = false
    end    
  end


  def self.manage_poss_strike_this_frame( frames, frame_num )
    if (frames[frame_num]).roll1 == 10
      frames[frame_num].status = :strike
      frames[frame_num].roll2 = 0
      frames[frame_num].total = 10
      frames[frame_num].completed = false
    end
  end

  
  def self.handle_frame_10( last_rolls, frames )
    frame_num = 10
    on_roll = 1
    # Similar loop to above just slightly modified
    for rolls_at_end in 0...last_rolls.size
      if on_roll == 1
        (frames[frame_num]).roll1 = last_rolls[rolls_at_end]
        self.manage_poss_prev_spare( frames[frame_num].roll1, frames, frame_num )
        manage_roll1_poss_prev_strike( frames, frame_num )
        manage_poss_strike_this_frame( frames, frame_num )
        on_roll = 2
        next
      elsif on_roll == 2
        (frames[frame_num]).roll2 = last_rolls[rolls_at_end]
        manage_roll2_poss_prev_strike( frames, frame_num )
        manage_poss_spare_this_frame( frames, frame_num )
        if ( frames[frame_num].status == :spare )
          on_roll = 3
          next
        end
      else # on_roll == 3
        # Add last roll value to current total
        frames[frame_num].total += last_rolls[rolls_at_end]
        # No need to loop further
        break
      end
      sum_normal_frame( frames, frame_num )
    end
  end

  
  def self.sum_normal_frame( frames, frame_num )
    frames[frame_num].total = frames[frame_num].roll1 + frames[frame_num].roll2
    frames[frame_num].completed = true    
  end
  
  def self.get_grand_total( frames )
    grand_total = 0
    for i in 1..10
      grand_total += frames[i].total
    end
    return grand_total
  end
  
  
end
