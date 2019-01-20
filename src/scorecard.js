function showMessage() {
  const message = "testing esLint";
  for ( let i = 0; i < 5; i++ ) {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}

showMessage();
