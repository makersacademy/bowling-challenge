
Bowling Challenge JS
=================

## What?
The code runs the logic for scoring tenpin bowling. For more details about my approach to the logic, you can check the [README of my ruby solution](https://github.com/BecaLParker/bowling-challenge-ruby/blob/main/README.md)

## Why?
My focus for this challenge was to learn JavaScipt by translating my ruby solution. Furthermore, I aimed to improve my implementation of SRP and ecapsultaion by extracting a 'frame' class (originally, my ruby solution was one massive class doing all the work).

## How?
### How to run the jasmine tests for this code:
 ```
$ git clone https://github.com/BecaLParker/bowling-challenge-JavaScript 
$ cd bowling-challenge-JaveScript  
$ open SpecRunner.html   
 ```
### How to interact as a user:
WIP Currently, I don't think my two classes can talk to each other outside of the test environment. (See next steps below).  

I've tried initializing a new instance of scorecard in the console, but could only get 'undefined' - advice welcome please at code review please :)


## Next steps
- Refactor
- Get my two classes talking to each other outside of the test environment (with modules?)
- Web interface UI
- DOM
- Other suggestions welcome at code review please :)

## Credits
I referred to the [code review rubric](docs/review.md) for this challenge.  
I discussed testing behaviour vs. state, and JavaScript debugging with [@allymparker](https://github.com/allymparker) in direct reference to the code I wrote for this solution.


