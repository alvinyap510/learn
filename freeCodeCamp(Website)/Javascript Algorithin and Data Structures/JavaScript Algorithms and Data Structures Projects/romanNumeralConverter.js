function convertToRoman(num) {
    let output = [];
    for (num; num >= 1000; num -= 1000) {
      output.push("M");
    }
    for (num; num >= 900; num -= 900) {
      output.push("CM");
    }
    for (num; num >= 500; num -= 500) {
      output.push("D");
    }
    for (num; num >= 400; num -= 400) {
      output.push("CD");
    }
    for (num; num >= 100; num -= 100) {
      output.push("C");
    }
    for (num; num >= 90; num -= 90) {
      output.push("XC");
    }
    for (num; num >= 50; num -= 50) {
      output.push("L");
    }
    for (num; num >= 40; num -= 40) {
      output.push("XL");
    }
    for (num; num >= 10; num -= 10) {
      output.push("X");
    }
    for (num; num >= 9; num -= 9) {
      output.push("IX");
    }
    for (num; num >= 5; num -= 5) {
      output.push("V");
    }
    for (num; num >= 4; num -= 4) {
      output.push("IV");
    }
    for (num; num > 0; num -= 1) {
      output.push("I");
    }
  
   return output.join("");
  }
  
  convertToRoman(36);