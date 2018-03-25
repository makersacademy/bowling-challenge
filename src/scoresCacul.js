function scoresCaculForFrame (frameScores) {
  const reducer = (accumulator, currVar) => accumulator + currVar;
  return frameScores.reduce(reducer, 0);
}
