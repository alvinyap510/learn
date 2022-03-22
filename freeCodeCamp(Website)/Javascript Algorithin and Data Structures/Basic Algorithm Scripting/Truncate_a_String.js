function truncateString(str, num) {

    if (num >= str.length) {
      return str;
    }
  
    let output = "";
    for (let i = 0; i < num; i++) {
      output = output + str[i];
    }
    return output + "...";
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);