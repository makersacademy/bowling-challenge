Game -->
Runs the game.
- Keeps track of the currentFrame
- If the current Frame == 10 && current Frame isFinished && current Frame isNotStrike
      GAME ENDS
- If the current Frame == 10 && current Frame is a strike
      BONUS ROUND
      - If current frame is finished
            GAME ENDS


a game has a list of frames
a frame has a list of rolls that took place in that frame

a frame can have 2 - 3 rolls

if a strike frame gets the next 2 global rolls as bonus unless its the last frame

Question?
If a frame is a strike? Is it done by default

The problem is the final frame

all other frames will be finished if you score a strike, however if you score a strike on the final frame
You get two additional rolls.

this is where the real crux of the problem with structuring the program is.

and I have no idea how to solve this.

Essentially the functionality of the final frame is quite different the calculation of bonuses is different

Frame -->
has 2 rolls
can be a spare or a strike or just finished
can be final or regular
can calculate its bonus based on the next two global rolls in the game
deoes not calculate a bonus based on the next two global rolls

Bonus Frame -->
has 2 rolls
both rolls can be strikes

Frame -->
has MODES: Regular, Final or Bonus
Bonus Frame --> allows for two rolls even if they are strikes
                does not take in an AdjacentFrameManager
Final Frame --> does not calculate bonus based on next two global rolls
                does not take in an AdjacentFrameManager
Frame --> calculates bonus rolls based on the next two global rolls
          needs knowledge of the next two frame objects

AdjacentFrameManager will have two slots of frames and frame 9 will take the final and bonus frames

This is because to update bonuses a frame's AdjacentFrameManager will need to have knowledege of the next two frames
unless the frame is a Final or Bonus frame in which case no AdjacentFrameManager is required.

Frame -->
has 2 rolls


Regular Frame -->
Final Frame -->
Bonus Frame -->

Game -->
Creates an array of a frames
The 10th frame will have its mode set to Final Frame
The 11th frame will have its mode set to Bonus Frame




so in that sense it works just like a regular frame
