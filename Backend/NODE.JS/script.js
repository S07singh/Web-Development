// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


// process : this object provides information about, and control over, the current Node.js process.

// process.argv : returns an array containing the command line arguments passed when the Node.js process was launched.

// console.log(process.argv);

// let args = process.argv; // we need to pass the command line arguments during the printing script.js

// for (let i = 2; i < args.length; i++) { 
//     console.log("hello to ", args[i]);
// }

// const math = require("./math");

// console.log(math.sum(2, 2));
// console.log(math.PI);


// module.exports - requiring directories
// require() a build-in function to include external modules that exits in separate files.
// module.exports  a special object 
// we want to require directories for that we have to do like this:
// const info = require("./Fruits");

// console.log(info[0].name);

import {sum, PI} from "./math.js";
import { generate} from "random-words";

// console.log(sum(2, 2));
console.log(generate());
