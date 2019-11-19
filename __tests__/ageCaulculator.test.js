import { GalacticCalculator } from './../src/backend-code.js';
import { ExpectancyCalculator } from './../src/backend-code.js';

describe('GalacticCalculator', () => {

  test('should correctly return inputted age in Mercury years', () => {
    var calculator = new GalacticCalculator(33)
    console.log(calculator);
    expect(calculator.ageInMercuryYears()).toEqual(137);
  });
  test('should correctly return inputted age in Venus years', () => {
    var calculator = new GalacticCalculator(33)
    console.log(calculator);
    expect(calculator.ageInVenusYears()).toEqual(53);
  });
  test('should correctly return inputted age in Mars years', () => {
    var calculator = new GalacticCalculator(33)
    console.log(calculator);
    expect(calculator.ageInMarsYears()).toEqual(17);
  });
  test('should correctly return inputted age in Jupiter years', () => {
    var calculator = new GalacticCalculator(33)
    console.log(calculator);
    expect(calculator.ageInJupiterYears()).toEqual(2);
  });
});

describe('ExpectancyCalculator', () => {
  test('should correctly calculate the user’s life expectancy on Mercury', () => {
    var calculator = new ExpectancyCalculator(100, 33);
    console.log(calculator);
    expect(calculator.lifeExpectancyInMercury()).toEqual(279);
  });
  test('should correctly calculate the user’s life expectancy on Venus', () => {
    var calculator = new ExpectancyCalculator(100, 33);
    console.log(calculator);
    expect(calculator.lifeExpectancyInVenus()).toEqual(108);
  });
  test('should correctly calculate the user’s life expectancy on Mars', () => {
    var calculator = new ExpectancyCalculator(100, 33);
    console.log(calculator);
    expect(calculator.lifeExpectancyInMars()).toEqual(35);
  });
  test('should correctly calculate the user’s life expectancy on Jupiter', () => {
    var calculator = new ExpectancyCalculator(100, 33);
    console.log(calculator);
    expect(calculator.lifeExpectancyInJupiter()).toEqual(5);
  });
});
