function convertHTML(str) {
    let newStr = str.split("");
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] == "&") {
        newStr[i] = "&amp;";
      } else if (newStr[i] == "<") {
        newStr[i] = "&lt;";
      } else if (newStr[i] == ">") {
        newStr[i] = "&gt;";
      } else if (newStr[i] == "\"") {
        newStr[i] = "&quot;";
      } else if (newStr[i] == "'") {
        newStr[i] = "&apos;";
      }
    }
    newStr = newStr.join("");
  
    return newStr;
  }
  
  convertHTML("Dolce & Gabbana");