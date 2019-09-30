'use strict';

function Frame(bowl1, bowl2, bowl3) {
    this.bowl1 = bowl1;
    this.bowl2 = bowl2;
    this.bowl3 = bowl3;
    this.strike = bowl1 === 10;
    this.spare = bowl1 !== 10 && bowl1 + bowl2 === 10;
}