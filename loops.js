function forLoop(array) {
  for (let i = 1; i < 25; i++) {
    if (i == 1) {
      array = array + "I am 1 strange loop."
    } else {
      array = array + `I am ${i} strange loops.`
    }
  }
  return array;
}