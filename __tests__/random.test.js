//__tests__ named due to jest naming conventions as well as using *.test.js

// obtains information from js under lib
//const { TestScheduler } = require('jest');
const randomNumber = require('../lib/random.js');

test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
  });

