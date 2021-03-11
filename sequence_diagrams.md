# Sequence Diagrams

## Spare Bonus

```flow
alias p = "Player"
alias g = "Game"
alias f = "currentFrame"

p->g: "addRoll(/)"
g->g: "this.currentFrame.addRoll(/)"
g->f: "addRoll(/)"
f->f: "this.bonusCount = 1"

g->g: "frames.push(currentFrame)"
g->g: "newFrame"
p->g: "roll(5)"
g->g: "current_frame.add_roll(5)"
g->g: "frames.forEach(addBonus if frame.bonusCount > 0)"
```

## Strike Bonus

```flow
alias p = "Player"
alias g = "Game"
alias f = "currentFrame"

p->g: "addRoll(X)"
g->g: "this.currentFrame.addRoll(X)"
g->f: "addRoll(X)"
f->f: "this.bonusCount = 2"
g->g: "frames.push(currentFrame)"
g->g: "frames.forEach(addBonus if frame.bonusCount > 0)"
g->g: "newFrame"
p->g: "addRoll(X)"
g->g: "current_frame.add_roll(X)"
f->f: "this.bonusCount = 2"
g->g: "frames.push(currentFrame)"
g->g: "frames.forEach(addBonus if frame.bonusCount > 0)"
g->g: "newFrame"
```
