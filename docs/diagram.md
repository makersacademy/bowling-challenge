Player rolls a strike

  - enterScore(10)
    - pushes score to frame [10]
    - calculates bonus
      -- strike bonus condition NOT met (no previous strike to apply bonus)
    - apply score conditions
      -- apply strike conditions
        - strikeBonus set to true
        - frame[1] set to zero
        - end turn

Player rolls another strike

  - enterScore(10)
    - pushes score to frame [10]
    - calculates bonus
      -- strike bonus condition is NOT met BUT SHOULD BE
        - apply strike bonus
