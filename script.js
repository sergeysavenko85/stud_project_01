"use strict";
/** 
//цикл

let num = 50;

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}

// цикл внутри цикла

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
};

*/
// пирамидка

let result = '';
const length = 5;

for (let i = 1; i < length; i++) {
    
    
    for (let k = i+1; k < length; k++) {
        result += ' ';
    } 
    for (let j = 0; j < i; j++) {
        if (j%2 === 0) {
            continue;
        }
        result += "**";
    }

    for (let j = 0; j < i; j++) {
        if (j%2 != 0) {
            continue;
        }
        result += "*";
    }
    for (let k = i+1; k < length; k++) {
        result += ' ';
    } 
    result += '\n';
}

console.log(result);
*/
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i <= 20 && i >= 10; i--) {
    console.log(i);
    if (i === 13) {
        break;
    }
}

for (let i = 1; i <= 10; i++) {
    if (i%2 !== 0) {
        continue;
    }
    console.log(i);
}

let i = 2;
while (i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
let arrElement = 0;


for (let i = 0; i < arr.length; i++) {
    arrElement = arr[i];
    result[i] = arrElement;
    
}

console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    
    if (typeof(data[i]) === 'number') {
        data[i] = data[i]*2;

    } else {
        data[i] = data[i]+' - done';

    }
}    
console.log(data);


const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
let dataElement = 0;


for (let i = 1; i < (data.length+1); i++) {
    //console.log(i);
    j = data.length-i;
    
    dataElement = data[j];
    result[i-1] = dataElement;

    

    
}

console.log(result);


let result = '';
const lines = 5;

for (let i = 0; i <= lines; i++) {
    
    for (let j = 0; j < lines - i; j++) {
        result += ' '; 
    }
    
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }

    result += '\n';

}

console.log(result);