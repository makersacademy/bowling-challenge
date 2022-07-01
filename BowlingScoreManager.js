const Frame = require ('./Frame');    //The frame is a smaller unit of scoring the game
                        // Made up of one two, or possibly in the tenth and final
                        // frame, three rolls.


class BowlingScoreManager {

  constructor() {
    this.frames = []; 
  }
  
  score_game( rolls ) {
    this.frames = this.setup_frames();
    this.score_frames( rolls );
    return this.get_grand_total( this.frames );
  }
    
   
  score_frames( rolls ) {
    let frame_num = 1;
    let on_roll = 1;
    for ( let roll_from_start=0; roll_from_start<rolls.length; roll_from_start++ ) { 
      if ( frame_num === 10 ) {
        // In Ruby this was as below
        // handle_frame_10( rolls.drop(roll_from_start), this.frames )
        // Want to remove the elements 0..roll_from_start-1
        rolls.splice(0, roll_from_start );
        this.handle_frame_10( rolls, this.frames );
        break;
      }
      if (on_roll === 1) {
        this.manage_frame_roll1( rolls[roll_from_start], this.frames, frame_num );
        if ((this.frames[frame_num]).getStatus() === Frame.strike ) {
          // Move to roll one in next frame
          frame_num += 1;
          continue;
        }
        on_roll = 2;
      }  
      else { // on_roll == 2
        this.manage_frame_roll2( rolls[roll_from_start], this.frames, frame_num );        
        frame_num += 1;
        on_roll = 1;
      }      
    }
  }
   


  setup_frames() {
    // Do not use index 0 as this models the domain more closely
    const frames_array = [null];
    for( let i=1; i<=10; i++ ) {
      frames_array.push( new Frame() );
    }
    return frames_array;
  }

  
  manage_frame_roll1( rollValue, frames, frame_num ) {
    (frames[frame_num]).setRoll1( rollValue );
    this.manage_poss_prev_spare( rollValue, frames, frame_num );
    this.manage_roll1_poss_prev_strike( frames, frame_num );
    this.manage_poss_strike_this_frame( frames, frame_num );
  }


  manage_frame_roll2( rollValue, frames, frame_num ) {        
    (frames[frame_num]).setRoll2( rollValue );
    this.manage_roll2_poss_prev_strike( frames, frame_num );
    this.manage_poss_spare_this_frame( frames, frame_num );
    if ( frames[frame_num].getStatus() !== Frame.spare ) {
      this.sum_normal_frame( frames, frame_num );
    }
  }

  
  manage_poss_prev_spare( roll, frames, frame_num ) {
    if ((frame_num > 1) && (frames[frame_num-1].getStatus() === Frame.spare)) {
      frames[frame_num-1].setTotal( frames[frame_num-1].getTotal() + roll );
      frames[frame_num-1].setCompleted( true );
    }    
  }

  
  
  manage_roll1_poss_prev_strike( frames, frame_num ) {
    if ((frame_num > 1) && (frames[frame_num-1].getStatus() === Frame.strike)) {
      // Add this roll to previous frame but don't yet mark completed
      // because two rolls need to be added to a strike
      frames[frame_num-1].setTotal( frames[frame_num-1].getTotal() + (frames[frame_num]).getRoll1() );
      //  Deal with possible strike from two frames ago
      if ((frame_num > 2) && (frames[frame_num-2].getStatus() === Frame.strike)) {
        // Add this roll to strike from two frames ago
        // and mark it complete as both of its following rolls
        // have now been added
        frames[frame_num-2].setTotal( frames[frame_num-2].getTotal() + (frames[frame_num]).getRoll1() );
        frames[frame_num-2].setCompleted( true );
      }
    }
  }


  
  manage_roll2_poss_prev_strike( frames, frame_num ) {
    if ((frame_num > 1) && (frames[frame_num-1].getStatus() === Frame.strike)) {
      // Add this roll to previous frame and then mark completed
      // because this is second of two rolls need to be added to a strike
      frames[frame_num-1].setTotal( frames[frame_num-1].getTotal() + (frames[frame_num]).getRoll2() );
      frames[frame_num-1].setCompleted( true );
    }          
  }

  
  
  manage_poss_spare_this_frame( frames, frame_num ) {
    if ((frames[frame_num].getRoll1() + (frames[frame_num].getRoll2())) === 10) {
      frames[frame_num].setStatus( Frame.spare );
      frames[frame_num].setTotal( 10 );
      frames[frame_num].setCompleted( false );
    }    
  }


  manage_poss_strike_this_frame( frames, frame_num ) {
    if (((frames[frame_num]).getRoll1()) === 10) {
      frames[frame_num].setStatus( Frame.strike );
      frames[frame_num].setRoll2( 0 );
      frames[frame_num].setTotal( 10 );
      frames[frame_num].setCompleted( false );
    }
  }

  
  handle_frame_10( last_rolls, frames ) {
    let frame_num = 10;
    let on_roll = 1;
    // Similar loop to above just slightly modified
    for( let rolls_at_end=0; rolls_at_end<last_rolls.length; rolls_at_end++ ) {
      if (on_roll === 1) {
        (frames[frame_num]).setRoll1( last_rolls[rolls_at_end] );
        this.manage_poss_prev_spare( frames[frame_num].getRoll1(), frames, frame_num );
        this.manage_roll1_poss_prev_strike( frames, frame_num );
        this.manage_poss_strike_this_frame( frames, frame_num );
        on_roll = 2;
        continue;
      }
      else if (on_roll === 2) { 
        (frames[frame_num]).setRoll2( last_rolls[rolls_at_end] );
        this.manage_roll2_poss_prev_strike( frames, frame_num );
        this.manage_poss_spare_this_frame( frames, frame_num );
        if ( frames[frame_num].getStatus() === Frame.spare ) {
          on_roll = 3;
          continue;
        }
      }
      else { // on_roll == 3
        // Add last roll value to current total
        frames[frame_num].setTotal( frames[frame_num].getTotal() + last_rolls[rolls_at_end]);
        // No need to loop further
        break;
      }
      this.sum_normal_frame( frames, frame_num );
    }
  }

  
  sum_normal_frame( frames, frame_num ) {
    frames[frame_num].setTotal( frames[frame_num].getRoll1() + frames[frame_num].getRoll2() );
    frames[frame_num].setCompleted( true );    
  }

  
  
  get_grand_total( frames ) {
    let grand_total = 0;
    for( let i=1; i<=10; i++ ) {
      grand_total += frames[i].getTotal();
    }
    return grand_total;
  }
  
  
}

module.exports = BowlingScoreManager;
