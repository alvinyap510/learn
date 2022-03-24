function isPrime(n) {
    let divider;
    for (divider = 2; divider <= n / 2; divider++) {
      if (n % divider === 0) {
        return false;
      }
    }
    return true;
  }
  
  function sumPrimes(num) {
    let output = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        output += i;
      }
    }
    return output;
  }
  
  sumPrimes(10);