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

