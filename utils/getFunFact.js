const axios = require('axios');

async function getFunFact(number) {
    try {
        const response = await axios.get(`http://numbersapi.com/${number}/math`, { timeout: 2000 });
        return response.data;
    } catch (error) {
        console.error(error);
        return 'No fun fact available';
    }
}

module.exports = getFunFact;