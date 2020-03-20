'use strict'

module.exports = (() => {

    const defaultLength = 12;

    /** @param {number} length */
    const getRandomText = (length) => {
        return _randomise(length, 'string');
    };

    /** @param {number} length */
    const getRandomNumbers = (length) => {
        return _randomise(length, 'numeric');
    };

    /** @param {number} length */
    const getRandomMixed = (length) => {
        return _randomise(length);
    };

    const _validateLength = (length) => {
        let s = (length) ? length : defaultLength;
        s = (typeof s !== 'number') ? defaultLength : parseInt(s);
        return (s > 0) ? s : defaultLength;
    };

    const _randomise = (length, type) => {
        let result = '';
        const resultLength = _validateLength(length)
        const options = _getOptionsByType(type);
        
        for (let i = 0; i < resultLength; i++) {
            result += options.charAt(Math.floor(Math.random() * options.length))
        }

        return result;
    };

    const _getOptionsByType = (type) => {
        switch (type) {
            case 'numeric': return '0123456789';
            case 'string': return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            default: return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        }
    }

    return {
        getRandomText,
        getRandomNumbers,
        getRandom: getRandomMixed
    }
})();