function destroyer(arr) {
    let argc = arguments.length;
    let newArr = [...arguments[0]];

    for (let i = 1; i < arguments.length; i++) {
        for (let j = newArr.length - 1; j>=0; j--) {
            if (newArr[j] == arguments[i]) {
                newArr.splice(j, 1);
            }
        }
    }
    return newArr;
}

let ret = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(ret);