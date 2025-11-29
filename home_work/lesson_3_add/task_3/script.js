let arr =  [2,17,13,6,22,31,45,66,100,-18];
let i;

console.log("---------------1) while");
i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}


console.log("---------------2) for");
for (let num of arr) {
    console.log(num);
}


console.log("---------------3) while arr%2 !== 0");
i = 0;
while (i < arr.length) {
    if (arr[i]%2 !== 0) {
        console.log(arr[i]);
    }
    i++;
}


console.log("---------------4) for arr%2 !== 0");
for (let num of arr) {
    if (num%2 !== 0) {
        console.log(num);
    }
}


console.log("---------------5) while arr%2 === 0");
i = 0;
while (i < arr.length) {
    if (arr[i]%2 === 0) {
        console.log(arr[i]);
    }
    i++;
}


console.log("---------------6) for arr%2 === 0");
for (let num of arr) {
    if (num%2 === 0) {
        console.log(num);
    }
}


console.log("---------------7) for arr%3 = okten");
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%3 === 0) {
        arr[i] = `okten`;
    }
    console.log(arr[i]);
}


console.log("---------------8) rof");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


console.log("---------------9)");
arr =  [2,17,13,6,22,31,45,66,100,-18];


console.log("---------------9.1) elihw");
i = arr.length - 1;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}


console.log("---------------9.2) rof");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


console.log("---------------9.3) elihw  arr%2 !== 0");
i = arr.length - 1;
while (i >= 0) {
    if (arr[i]%2 !== 0) {
        console.log(arr[i]);
    }
    i--;
}


console.log("---------------9.4) rof  arr%2 !== 0");
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]%2 !== 0) {
        console.log(arr[i]);
    }
}


console.log("---------------9.5) elihw  arr%2 === 0");
i = arr.length - 1;
while (i >= 0) {
    if (arr[i]%2 === 0) {
        console.log(arr[i]);
    }
    i--;
}


console.log("---------------9.6) rof  arr%2 === 0");
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]%2 === 0) {
        console.log(arr[i]);
    }
}


console.log("---------------9.7) rof  arr%3 = okten");
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]%3 === 0) {
        arr[i] = `okten`;
    }
    console.log(arr[i]);
}








