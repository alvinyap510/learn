function myReplace(str, before, after) {

    let newRep;
    if (before[0] === before[0].toUpperCase()) {
      newRep = after[0].toUpperCase() + after.slice(1);
    } else {
      newRep = after[0].toLowerCase() + after.slice(1);
    }
  
    let ret = str.replace(before, newRep);
    return ret;
    
  }