// Given n - return array n through 1

function countdown(n)
{
    let array = [];
    for (let i = n; i > 0; i--)
    {
        array.push(i);
    }
    return (array);
}

//Recursion implementation

function countdown(n)
{
  if (n < 1)
  {
    return [];
  }
  let array = countdown(n - 1);
  array.unshift(n);
  return (array);
}

//Using splice to append n at the starting of array

function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.splice(0, 0, n);
      return arr;
    }
  }

//Recursion & Ternary Operator Implementation

function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }

 function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
 }

console.log(countdown(99));