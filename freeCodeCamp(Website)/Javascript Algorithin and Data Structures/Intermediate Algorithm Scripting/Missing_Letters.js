function fearNotLetter(str) {
    let len = str.length;
  
    for (let i = 0; i < len - 1; i++) {
      if (str[i + 1] != String.fromCharCode(str.charCodeAt(i) + 1)) {
        return String.fromCharCode(str.charCodeAt(i) + 1);
      }
    }
    return undefined;
  }
  
  fearNotLetter("abce");