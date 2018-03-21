

<h2 align="center"> Bowling </h2>
<h3 align="center"> Work out your score, and see who will win </h3>

 <p align="center">  <a href='#scenario'>Scenario</a> |  <a href='#approach'>Approach</a>   |   <a href='#reflections'>Reflections</a> | <a href='#rules'>Rules</a>  |  <a href='#setup'>Setup</a>   |   <a href='#tech'>Tech</a>

## Scenario <a name= "scenario"></a>

You've set up some pins and want to play a casual game of bowling on your own. You like to be laid back and casual, but at the same time obcessively following the rules to the letter. How will you keep score?!

Great news, there's a website that you can input your score, and it will add up and calculate how much you've got. Following traditional bowling rules. It will never cease to amaze! 

## Approach <a name= "approach"></a>

As usual I tried to follow test first, build later. And worked on planning and designing my system. Before building the programme I designed 3 different structures, chose the simplest one and worked on that. Had I found time, I would like to try out the other two designs. Which I will try and put on here at some point.

*Later addition* I decided a few weeks later to come back and refactor the code. I recieved some great feedback on this project and wanted to have a go at it further. I also want to practise working with legacy code. So instead of starting afresh I will be working with my existing code base to gradually improve it. Also I like JS and want more practise with it. However, for fun I decided to go with a new test framework - Jest, to stretch myself. 

#### Targets
*Written at the start of the challenge*

   - No Jquery, since we covered this during the past week, I'd like to see how much I can do with just Vanilla. 
   - Use the class formatting from ES6 and AirBnB, as this is a different way of structruing JS to how we've been taught. 
   - After passing tests, make sure they also fail for the **right reasons** 
   - Focus on extendability in design.

## Reflections <a name= "reflections"></a>
*Written during and after the challenge*

One thing I would do building this again, is instead of building all the backend and all the front end seperately, is add one feature at a time. I feel this would have helped me get less stuck at points but also kept the user at the forefront of my mind when building. By doing all the backend first I noticed a few integration issues with the fronted, which led to some messy code.

*Extention* After deciding to add front end. I chose to use Jest and Puppeteer. Originally I used Karma too but part way through doing this. I realised I had just added a lot of stuff without reflecting. So I slowed it down, I pulled back and the past few hours I've been working on a sandbox project playing with Jest and Puppeteer (no Karma, keep it simple). A future key target is to do this more - rather than just adding new tech to a project, build a sandbox and play about so I understand it fully before I use it. 
 
#### With more time I would have:
1) Created a rulebook class/game log class to extract out responsibility
2) Styled it nicer - bit more time on the css
3) Refactor my tests more and make sure there's no repetition
4) Moved my format.js into two files, a controller and a views section (or something similar)

I would also be interested to see what building the game, and just putting all the rolls in an array would be like. 

## Rules<a name= "rules"></a>

#### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

#### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).
10th frame

#### Normal
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

## Setup <a name= "setup"></a>
-------
 
1) Clone this repo and load the server
``` 
git clone https://github.com/Tagrand/bowling-challenge.git 
npm install 
http-server 
```

2) Visit localhost:8080
3) Enjoy!

For extra fun, kill the server and go to src/format.js:

4) Uncomment the colour code
5) Add ```colour()``` to the bottom of the file where the other methods are
6) For even more fun, add ```colour();``` to the end of the rolls.

Then play again


## Technologies used  <a name= "tech"></a>
  - Javascript 
  - Jasmine
  - Node
  - HTTP-server
  - Jest 
  - Puppeteer
  
## Acknowledgements

 Thanks to @MakersAcademy for providing the challenge, and as always, google, for continuing to listen to all my many questions. 
