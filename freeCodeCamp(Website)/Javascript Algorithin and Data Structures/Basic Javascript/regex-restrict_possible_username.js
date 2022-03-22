let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z][A-Za-z]+[0-9]*$|^[A-Za-z][0-9][0-9]+$/; // Change this line
let result = userCheck.test(username);