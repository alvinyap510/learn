function findLongestWordLength(str) {
    let regex = /\w+/g;
    let str_arr = str.match(regex);
    let longest = 0;
  
    for (let i = 0; i < str_arr.length; i++) {
      if (str_arr[i].length > longest) {
        longest = str_arr[i].length;
      }
    }
    return longest;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");