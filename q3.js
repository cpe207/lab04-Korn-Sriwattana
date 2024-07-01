function primeNumber(a) {
    if (a < 2) {
        return "NO";
    }
    if (a == 2) {
        return "YES";
    }
    if (a > 2) {
        for (var i = 2; i < a; i++) {
            if (a % i === 0) {
                return "NO";
                break;
            }
        }
        return "YES";
    }
}
var d1 = 107;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
