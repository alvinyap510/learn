function chunkArrayInGroups(arr, size) {
    let newarr = [];
    let counter = arr.length;
  
    while (counter >= size) {
      newarr.push(arr.splice(0, size))
      counter = counter - size;
    }
    if(arr.length != 0) {
      newarr.push(arr);
    }
  
    return newarr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);