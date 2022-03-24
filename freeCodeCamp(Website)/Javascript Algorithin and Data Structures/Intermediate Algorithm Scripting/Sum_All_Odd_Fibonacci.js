function sumFibs(num) {
  
    let x = 0;
    let y = 1;
    let z = x + y;
    let output = 1;
  
    while (z <= num) {
      if (z % 2 == 1) {
        output = output + z;
      }
      x = y;
      y = z;
      z = x + y;
    }
    return output;
  }
  
  sumFibs(1000);