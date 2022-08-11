let a = [10, 20, 30, 40, 50, 60, 70, 40];
let b = ["orange", "apple", "banana", "kiwi", "mango"];

// myJoin()

function myJoin(array, symbol) {
    let val = array[0];
    for (i = 0; i < array.length - 1; i++) {
        val = val + symbol + array[i + 1];
    }
    return val;
}

// a = myJoin(a,"*");

// console.log(a);

// reverse()

function myRev(array) {
    let new1 = array.length - 1;
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray[i] = array[new1 - i];
    }
    return newArray;
}

// a = myRev(a)

// console.log(a);

// unshift()

function unShift(array, value) {
    let new1 = array.length;
    let newArray = [];
    for (i = 0; i < array.length + 1; i++) {
        newArray[i] = array[new1];
    }
    for (j = 1; j < array.length + 1; j++) {
        newArray[0] = value;
        newArray[j] = array[j - 1]
    }

    return newArray;

}
// a = unShift(a, "ten");

// console.log(a);


// toString()

function myToString(array) {
    let val = array[0];
    for (i = 1; i < array.length; i++) {
        val = val + "," + array[i];
    }
    return val;
}

// a = myToString(a);

// console.log(a);

// shift()


function myShift(array) {
    let newArray = [];
    for (i = 0; i < array.length - 1; i++) {
        newArray[i] = array[i + 1]
    }
    return newArray;
    // return array[0]
}

// a = myShift(a);

// console.log(a);

// concat()


function myConcat(array1, array2) {
    newLength = array1.length + array2.length;
    newArray = [];
    sum = [];
    for (i = 0; i < newLength; i++) {
        newArray[i] = sum[newLength + 1];
        newArray[i] = array1[i];
    }
    for (j = 0; j < array2.length; j++) {
        newArray[array1.length + j] = array2[j];
    }
    return newArray;
}

// a = myConcat(a, b);

// console.log(a);

// includes()

function myInclude(array, value) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } else {

        }
    }
}

// a = myInclude(a, 60);

// console.log(a);

// indexOf()

function myIndexof(array, value) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
}
// a = myIndexof(a, 50);

// console.log(a);

// slice()

function mySlice(array, value1, value2) {
    let newArray = [];
    for (i = value1; i < value2; i++) {
        newArray[i - value1] = array[i]
    }
    return newArray;
}

// a = mySlice(a,1,4);

// console.log(a);

// copyWithin()

let c = [10, 20, 30, 40, 50, 60, 70, 40];

function copyWin(array, target, start) {
    // let newArray = [];
    // let index = 0;
    for (i = 0; i < target; i++) {
        array[i] = array[i];
    }
    for (j = 0; j < array.length-target; j++) {
        array[target+j] = array[start+j];
    }
    return array;
}

c = copyWin(c, 2, 4);

console.log(c);
