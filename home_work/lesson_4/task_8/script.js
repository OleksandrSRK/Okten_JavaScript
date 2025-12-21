function someFunction(array){
    document.write(`<ul>`);

    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }

    document.write(`</ul>`);
}

let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, "lorem", true];

someFunction(arr);

