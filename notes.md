# Bowling challenge notes

## Ed's Tips for bowling scorecard challenge

1. Ignore interface, focus on TDDing the logic.
2. The first test you write: a simple feature test that completes a score card with gutter balls.
```
# pseudocode

scorecard = new Scorecard()

20.times do
  scorecard.roll(0)
end

assertEquals(scorecard.total(), 0)
assertEquals(scorecard.isComplete(), true)
```
## Notes

- I was having real trouble deciding what was an acceptance test and what was a unit test. At the moment I've hardly got any unit tests for my Scorecard. In fact I think I've got none. All the testing for that is in my so-called feature tests. But really, I think they're more like unit tests, not acceptance tests.
- Are you not ever allowed to write a unit test without it being driven by an acceptance test?
- If you have two expectations in a test, Jasmine will tell you if they're both wrong. I don't think RSpec does that.
- Would like to make a 'gutterballs' helper, but can't work out how... some kind of scope problem
- 
