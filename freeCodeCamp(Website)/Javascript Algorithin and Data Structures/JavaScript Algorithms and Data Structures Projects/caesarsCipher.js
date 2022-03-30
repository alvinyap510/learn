function rot13(str) {
    let newStr = str.split("");
    let regex = /[A-Z]/;
  
    for (let i = 0; i < newStr.length; i++) {
      if (regex.test(newStr[i]) === true) {
        if (newStr[i].charCodeAt(0) >= 65 && newStr[i].charCodeAt(0) <= 77) {
          newStr[i] = String.fromCharCode(newStr[i].charCodeAt(0) + 13);
        } else {
          newStr[i] = String.fromCharCode(newStr[i].charCodeAt(0) - 13);
        }
      }
    }
    return newStr.join("");
  }
  
  rot13("SERR PBQR PNZC");