[Scenario](#scenario) | [Approach](#approach) | [Extention](#extention) | [Setup](#Setup)| [Play](#Play) | [Technologies](#Technologies)


# Bowling


## Scenario <a name= "scenario"></a>

You've set up some pins and want to play a casual game of bowling on your own. You like to be laid back and casual, but at the same time obcessively following the rules to the letter. How will you keep score?!

Great news, there's a website that you can input your score, and it will add up and calculate how much you've got. Following traditional bowling rules. It will never cease to amaze! 

## Approach <a name= "approach"></a>

I set myself 4 targets starting this challenge 
  
   - No Jquery (because, why not make things harder?)
   - Use the class formatting from ES6 so I could get used to that. 
   - After passing tests, make sure they also fail for the **right reasons** 
   - Focus on extendability in design.
   
As usual I tried to follow test first, build later. And worked on planning and designing my system. Before building the programme I designed 3 different structures, chose the simplest one and worked on that. Had I found time, I would like to try out the other two designs. Which I will try and put on here at some point.

One thing I would do building this again, is instead of building all the backend and all the front end seperately, is add one feature at a time. I feel this would have helped me get less stuck at points but also kept the user at the forefront of my mind when building. By doing all the backend first I noticed a few integration issues with the fronted, which led to some messy code...

## Extention <a name= "extention"></a>

If I'd have had more time, then I would have done 3 things 
1) Created a rulebook class/game log class to extract out responsibility
2) Styled it nicer - bit more time on the css
3) Refactor my tests more and make sure there's no repetition
4) Moved my format.js into two files, a controller and a views section (or something similar)

I would also be interested to see what building the game, and just putting all the rolls in an array would be like. 


## Setup <a name= "Setup"></a>
-------
 
1) Clone this repo [https://github.com/Tagrand/bowling-challenge.git](https://github.com/Tagrand/bowling-challenge.git)
2) Open the index page
3) Enjoy!

(For extra fun go to format.js:

```
1) Uncomment the colour code
2) Add colour() to the bottom of the file where the other methods are
3) For even more fun, add colour(); to the end of the rolls.

```
Then play again! 

## How to play <a name= "Play"></a>

### Basic Rules


## Technologies used  <a name= "Technologies"></a>
  - Javascript 
  - Jasmine
  - HTML
  - CSS
  
## Acknowledgements

 Thanks to @MakersAcademy for providing the challenge, and as always, google, for continuing to listen to all my many questions. 
