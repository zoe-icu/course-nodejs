const glob = require('glob');
var result = null;
// console.time('glob')
// result = glob.sync(__dirname + '/**/*');
// console.timeEnd('glob');
// console.log(result)

console.time('glob')
glob(__dirname + '/**/*', function (err, res) {
    result = res;
    // console.log(result)
    console.log('got result');
});
console.timeEnd('glob');
console.log(1 + 1);