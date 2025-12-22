let swap = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length && index1 >= 0 && index2 >= 0){
        let fNum = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = fNum;

        return arr;
    }
    return "!!!ERROR!!!"
}

let array = [11, 22, 33, 44, 55, 66, 77, 88, 99];

console.log(swap(array, 2, 5));

