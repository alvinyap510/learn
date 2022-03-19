function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
      return [startNum];
    }
    let array = rangeOfNumbers(startNum, endNum - 1);
    array.push(endNum);
    return array;
  };