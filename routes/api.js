const express = require('express');
const router = express.Router();
const calculateDigitSum = require('../utils/calculateDigitSum');
const checkArmstrong = require('../utils/checkArmstrong');
const checkPerfect = require('../utils/checkPerfect');
const checkPrime = require('../utils/checkPrime');
const getFunFact = require('../utils/getFunFact');

// @route GET api/classify-number: Returns mathematical properties of a number

router.get('/api/classify-number', async (req, res) => {
    const numberParam = req.query.number;

    // validate input as an integer
    if (!numberParam || !/^-?\d+$/.test(numberParam)) {
        return res.status(400).json({
            number: numberParam || 'undefined',
            error: true
        });
    }

    const number = parseInt(numberParam, 10);

    try {
        const [ isPrime, isPerfect, isArmstrong, digitSum, funFact] = await Promise.all([
            checkPrime(number),
            checkPerfect(number),
            checkArmstrong(number),
            calculateDigitSum(number),
            getFunFact(number)
        ]);

        const isEven = number % 2 === 0;
        const properties = [];
        if (isArmstrong) properties.push('armstrong');
        properties.push(isEven ? 'even' : 'odd');

        res.json({
            number,
            is_prime: isPrime,
            is_perfect: isPerfect,
            properties,
            digit_sum: digitSum,
            fun_fact: funFact
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
});

module.exports = router;