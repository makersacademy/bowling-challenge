class Frame10 {
  constructor() {
    this.roll1 = null;
    this.roll2 = null;
    this.roll3 = null;
  }

  isComplete() {
    if (this.roll3 != null) {
      return true;
    }
    if (this.roll1 === 10 && this.roll2 === 10) {
      return false;
    }
    if (this.roll1 == 10 && this.roll2 != null) {
      return true;
    }
    if (this.roll1 != null && this.roll1 + this.roll2 < 10) {
      return true;
    }
    return false;
  }
  total() {
    return (
      this.roll1 + this.roll2 + this.roll3
    );
  }
}
