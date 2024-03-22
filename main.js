import { kopar } from "./compare.js";
import { genRandNumb } from "./genRandNumb.js";

let randNr = genRandNumb(1,100)
console.log(randNr);

let result = kopar(99,randNr)
console.log(result);