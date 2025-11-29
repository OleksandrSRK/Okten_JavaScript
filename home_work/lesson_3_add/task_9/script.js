let arr = [`lorem_0`, 33, false, 555, true, `lorem_5`, false, 23432, `455`, 234];


for (let item of arr) {
    if (typeof item === `string`) {
        console.log(item);
    }
}