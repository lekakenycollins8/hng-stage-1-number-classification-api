function checkArmstrong(n) {
    if (n < 0) return false;
    const digits = n.toString().split('');
    const length = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(parseInt(d, 10), length), 0);
    return sum === n;
}

module.exports = checkArmstrong;