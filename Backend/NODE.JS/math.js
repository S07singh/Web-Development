/*
const sum = (a, b) => a + b;
// module.export.sum = (a, b) => a + b;
// export.sum = (a, b) => a + b;
// both of them are valid way to use the export

// but export =  5 is not supported it will show error
const mul = (a, b) => a * b;
const g = 9.81;
const PI = 3.141592653589793;

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI,
    calculateArea: (radius) => PI * radius * radius,
    calculateVolume: (radius, height) => (1/3) * PI * radius * radius * height,
}

module.exports = obj;

*/

export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;

export const g = 9.81;

export const PI = 3.141592653589793;