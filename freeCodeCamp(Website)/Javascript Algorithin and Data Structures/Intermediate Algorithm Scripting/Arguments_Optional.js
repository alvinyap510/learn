function addTogether() {

    let repeat = arguments[1];
    
    if (typeof(arguments[0]) != "number")
    {
      
      return undefined;
      
    } 
    if (arguments.length === 1) 
    {
      return (repeat) => addTogether(arguments[0], repeat); 
      
    }
    else if (typeof(arguments[1]) != "number") 
    {
      return undefined;
    }
    else 
    {
      
      return (arguments[0] + arguments[1]);
      
    }
  }
  
  addTogether(2, 3);