function largestOfFour(arr) {
    let new_arr = [];
    let longest;
  
    for (let i = 0; i < arr.length; i++) {
      let largest = arr[i][0];
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > largest) {
        largest = arr[i][j];
        }
      }
      new_arr.push(largest);
    }
  
    return new_arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);