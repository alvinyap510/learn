function mutation(arr) {
    let source = arr[0].toLowerCase();
    let find = arr[1].toLowerCase();
  
    for (let i = 0; i < find.length; i++) {
      let j = 0;
      while (j < source.length && find[i] !== source[j]) {
        j++;
      }
      if (find[i] !== source[j]) {
        return false;
      }
    }
    return true;
  
  }
  
  mutation(["hello", "hey"]);