* Installation Instructions
> git clone https://github.com/denriquem/bowling-challenge.git  
> cd bowling-challenge    
> open SpecRunner.html

* In order to add the scores for a frame, create a new game and input the scores for each roll into the addFrame method, like this:
> game = new Game  
> game.addFrame(3,6)

* Fill in the scores for all of the frames that are played. 10, unless you score a strike or a spare in the final frame. When you've finished writing in the scores for each frame, call the totalScore method like this:
> game = new Game  
> game.addFrame(7,2)  
> game.addFrame(10,0)  
> game.addFrame(5,5)  
> game.addFrame(6,2)  
> game.addFrame(1,1)  
> game.addFrame(0,0)    
> game.addFrame(9,1)   
> game.addFrame(6,1)   
> game.addFrame(2,7)    
> game.addFrame(8,8)   
> game.totalScore

* Just like in the example, if you score a strike with your first roll, please input your second roll as a 0. The program will automatically add bonuses for strikes and spares.

* If you had a shocker and missed all the pins for the 10 frames, and you would like a congratulatory message, please run the gutter method after inputing your scores.
> game.gutter

* In order to complete: functionality for the final frame needs to be created. Whilst scores for strike bonuses are automatically calculated, there is currently an issue with strikes following strikes.

* A separate method should be created in order to determine whether a strike or a spare has been scored in a particular frame.
