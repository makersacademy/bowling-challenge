'use strict';
function Frame(bowl1, bowl2, bowl3) {
    this.bowl1 = bowl1;
    this.bowl2 = bowl2;
    this.bowl3 = bowl3;
    this.strike = false;
    this.spare = false;

    if (bowl1 === 10)
        this.strike = true;

    if (bowl1 !== 10 && bowl1 + bowl2 === 10)
        this.spare = true;
}