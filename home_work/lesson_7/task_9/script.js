Array.prototype.newForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Array.prototype.newFilter = function(callback) {
    let filtArr = [];

    for (const item of this) {
        if (callback(item)) {
            filtArr[filtArr.length] = item;
        }
    }
    return filtArr;
}


const arr = [11, 22, 33, 44, 77, 55, 88, 66, 99, 101];

arr.newForEach((item, index) => console.log(item, index));
console.log(`____________________________________`);
console.log(arr.newFilter((item) => item % 2 === 0));

