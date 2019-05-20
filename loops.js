function forLoop(array) {
  for (var i = 1; i < 25; i++) {
    if (i === 1) {
      array ="I am 1 strange loop." + array;
    } else {
      array =`I am ${i} strange loops.` + array;
    }
  }
  return array;
}