function calculateDigitSum(n) {
    return Math.abs(n).toString().split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
}

module.exports = calculateDigitSum;