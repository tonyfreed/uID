'use strict'

const uID = require('./index');

// Check if uID exist
test('uID should be defined', () => {
    expect(uID).toBeDefined();
})

describe('Checking if functions exist', () => {
    test('uID.getRandomText should be defined', () => {
        expect(uID.getRandomText).toBeDefined();
    })

    test('uID.getRandomNumbers should be defined', () => {
        expect(uID.getRandomNumbers).toBeDefined();
    })

    test('uID.getRandom should be defined', () => {
        expect(uID.getRandom).toBeDefined();
    })
})

describe('Checking default string size', () => {
    test('uID.getRandomText should be defined', () => {
        const id = uID.getRandomText();
        expect(id.length).toEqual(12);
    })

    test('uID.getRandomNumbers should be defined', () => {
        const id = uID.getRandomNumbers();
        expect(id.length).toEqual(12);
    })

    test('uID.getRandom should be defined', () => {
        const id = uID.getRandom();
        expect(id.length).toEqual(12);
    })
})


describe('Checking custom string size', () => {
    test('uID.getRandomText(15) should return string of 15 chars', () => {
        const id = uID.getRandomText(15);
        expect(id.length).toEqual(15);
    })

    test('uID.getRandomNumbers(15) should return string of 15 chars', () => {
        const id = uID.getRandomNumbers(15);
        expect(id.length).toEqual(15);
    })

    test('uID.getRandom(15) should return string of 15 chars', () => {
        const id = uID.getRandom(15);
        expect(id.length).toEqual(15);
    })
});

describe('Checking strings types', () => {
    test('uID.getRandomText should include letters only', () => {
        const id = uID.getRandomText();
        expect(id.match(/^[A-Za-z]+$/)).toBeTruthy();
    })


    test('uID.getRandomNumbers should include digits only', () => {
        const id = uID.getRandomNumbers();
        expect(id.match(/^\d+$/)).toBeTruthy();
    })
});


describe('Checking wrong length format string size', () => {

    const variation = [
        'hello world',
        12.2,
        uID,
        null,
        undefined,
        true,
        false,
        0,
        -1
    ];

    test.each(variation)('Shoudl return 12 - testing %p', () => {
        const id = uID.getRandom('hello world');
        expect(id.length).toEqual(12);
    });
})