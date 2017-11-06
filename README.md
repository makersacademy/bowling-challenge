
Bowling Challenge
=================

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

### Tech

Program written in JavaScript.
Tested using Jasmine.

### Approach

My aim was to focus on TDD and writing code that works. As such I spent a good amount of time diagramming at the beginning and considering the logic challenges until I could see a route to a scorecard that would work.

Because I wanted to focus on getting tests and code to work I purposefully postponed refactoring tasks if they meant that they broke tests. (I did not want to battle refactoring at the expense of progress with TDD.)

### Unfinished Sections of the logic

* The strike bonus logic is flawed in that it add the next two bowls (even though one is 0 because the first was 10). While this works for a Strike then an Open Frame it does not work for consecutive strikes. Solving this will require updated logic in both Frame and Game logic.
* The 10th frame will need treating differently and will require additional logic in both the game and frame objects.


### Unfinished structural changes

* Refactoring. Ultimately I has a vision of this working by looping through the scores after frame but chose a more steady logic approach to ensure progress. There are significant minor refactoring tasks to be done. A larger one is to ensure that the scoresheet is filled out using an Each block rather than a hug if else tree.
* I need to get rid of at least one unnecessary data structure. I save data in Frame array, Score Array and ScoreSheet object. At least one could be removed.
* I need to add a linter to sort out the code.

### Key challenges and reflections

* Testing across objects. I ended up creating Frame objects in the Game tests. I could not work out how to create spys with the complexity of values and behaviours required.
* I was not bold enough in going after the vision. I had two visions of how this might work. One was more simple to build and inelegant. The other was potentially more elegant but I did not have the confidence that I could TDD my way to it.
