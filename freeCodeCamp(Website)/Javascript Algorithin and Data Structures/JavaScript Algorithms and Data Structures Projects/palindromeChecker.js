function palindrome(str) {
    let regex = /[a-z1-9]/
    
    let newStr = str.toLowerCase().trim();
    newStr = newStr.split("");
  
    for (let i = newStr.length - 1; i >= 0; i--) {
      if (regex.test(newStr[i]) === false) {
        newStr.splice(i, 1);
      }
    }
    for (let i = 0; i < newStr.length / 2; i++) {
      if (newStr[i] !== newStr[newStr.length -1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  palindrome("eye");