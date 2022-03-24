function smallestCommons(arr) {

    let output;
    let start;
    let max;
  
    if (arr[0] <= arr[1]) {
      start = arr[0];
      max = arr[1];
    } else {
      start = arr[1];
      max = arr[0];
    }
  
    for (output = 1; output <= Number.MAX_SAFE_INTEGER; output++) {
      let i  = start;
      
      while (output % i === 0 && i <= max) {
        i++;
      }
      if (i > max) {
        return output;
      }
    }
  }