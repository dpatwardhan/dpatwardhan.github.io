// Generator for all primes smaller than max
const primesSmallerThan = function* (max) {
  yield 2; //.. the only even prime
  let knownPrimes = [2];

  let nextPossiblePrime = 3;
  while (nextPossiblePrime < max) {

    // We'll not test even numbers, so don't check division by 2
    for (var i = 1; nextPossiblePrime % knownPrimes[i] > 0; i++) ;

    if (i === knownPrimes.length) {
      //.. Yes prime, save it, yield it
      knownPrimes.push(nextPossiblePrime);
      yield nextPossiblePrime;
    }

    //.. This ensures we don't consider even numbers
    nextPossiblePrime += 2;
  }

  //.. We have found all primes smaller than max
  return knownPrimes;
}

