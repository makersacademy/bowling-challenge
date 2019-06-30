Bowling Challenge
=================

AJ attempt at bowling scorecard challenge. Original README found [here]().

This is still work in progress.
To be finished:
- final frame logic
- pause live scoring when a strike or spare in play
- refactor - nested ifs and magic numbers in particular
- build frontend

Challenges / Mistakes
- have written assuming that player enters rolls one by one. This was done as also thought of front end that would update on each roll. It appears from the rubric that actually a user might enter an array of rolls and all that is needed is to run through these and calculate a final score.
- splitting game and frame out - i haven't not created doubles / mocks of frames for the game 'class' tests. This should be done.
- builing of logic up logic. There is lots in play. This is primarily a result of i)designing logic with frontend result in mind, ii) taking sequential roles. It will be interesting to see how much can be refactored at the end. I've tried to refactor as I go along and reduce method sizes but I've not (yet) been able to remove all nested if statements.
