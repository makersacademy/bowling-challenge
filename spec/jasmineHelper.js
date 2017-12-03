function throw_records_bonus_increaseTurnAndFrame(n) {
  bowling.throw(n);
  bowling.recordInFrame(n);
  bowling.reducePins(n);
  bowling.spareBonus();
  bowling.strikeBonus();
  bowling.increaseActualFrame();
}
