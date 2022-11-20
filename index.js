const os = require("os");
console.log(os.platform());

const get_math = require("./my_math");
let plus = get_math.plus(5, 5)
let minus = get_math.minus(200, 100)
console.log(plus);
console.log(minus);