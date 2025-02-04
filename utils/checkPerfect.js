function checkPerfect(n) {
    if (n <= 1) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            const otherDivisor = n / i;
            if (otherDivisor !== i) sum += otherDivisor;
        }
    }
    return sum === n;
}

module.exports = checkPerfect;