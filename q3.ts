function primeNumber(a: number) {
  if (a < 2) {
    return "NO";
  }
  if (a == 2) {
    return "YES";
  }
  if (a > 2) {
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return "NO";
        break;
      }
    }
    return "YES";
  }
}

const d1: number = 107;
const d2: number = 29;
const d3: number = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
