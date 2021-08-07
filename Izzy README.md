- A roll should be added to my scorecard
- I get two rolls per frame
- A roll should not be above ten
  - This includes the first roll and if on the second roll the sum of both
- If I get a strike my next frame should be doubled as a bonus
- If I get a spare my next roll should be doubles as a bonus
- Once I reach 10 frames the game should end 
  - Unless i have scored a strike or spare in my last go
  - In that case I get a bonus roll
  - If I score a strike ten pins go back up for me to knock down

Scorecard:
- Keeps track of the score fo the game
- Holds the scores, able to print them out

Frame:
- Keeps track of which frame the player is on
  - Knows when someone is on the final frame
- Knows if the player is on the first or second roll of the game

Game:
- Deals with rolling the ball
- Gets and feeds info from scorecard and frame
  Frame:
    - Gets what frame/roll player is on from frame
    - Tells frame when to add a frame
  Scorecard:
    - Adds score to scorecard
    - Adds rolls to frames in the scorecard
    - Gets if the previous roll was a strike or a spare
  
  
