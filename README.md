# Makers Academy Week Four - Bowling Challenge
> 14-15 & 21-22 July 2018

Fifth and sixth week (weekend) solo project, building a bowling scorecard that accurately tracks user rolls and applies bonus modifiers where appropriate.

[Full project details and user stories here.](https://github.com/makersacademy/bowling-challenge)

## Completion

* All back-end logic and point scoring complete.
  - To add: conclude game.
  - To remove: doubleStrikeBonus after bonus applied.
* Game accounts for triple strikes and all other modifiers.
* All Jasmine tests passing.

## Learning Outcomes

The Bowling Challenge was a difficult weekend project, mainly because the scoring logic and bonus modifiers are significantly more complex than they first appear. I closely followed a TDD process while building the scorecard, ensuring that I built the system methodically which is important as it becomes complex quickly.
I'm concerned that I placed too much responsibility on the Scorecard model itself, and if I were to attempt this challenge again I would consider assigning these responsibilities to other objects (scoring & turn-keeping).
Due to time constraints I was only able to build the back-end logic for this challenge, so the next step would be to implement a front-end interactive scorecard. I anticipate this would be less challenging than the back-end logic, and I would follow a similar process to the one I followed when building [Thermostat](https://github.com/archmagos/thermostat).

## Technical

Javascript & jQuery using Jasmine for testing.

## Further Improvements

* Integrate full interactive front-end.
* Model could be split into sub-classes for scoring & turn-keeping.
* Refactor scoring logic?
