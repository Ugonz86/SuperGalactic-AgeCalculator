import { GalacticCalculator } from './../src/backend-code.js';
import { ExpectancyCalculator } from './../src/backend-code.js';
import { NextBirthdayCalculator } from './../src/backend-code.js';

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

describe('NextBirthdayCalculator', () => {
  test('should correctly calculate the user next birthday on Mercury', () => {
    var calculator = new NextBirthdayCalculator(22, 9, 2019);
    console.log(calculator);
    expect(calculator.nextBirthdayInMercury()).toEqual("Wed Dec 18 2019");
  });

  test('should correctly calculate the user next birthday on Venus', () => {
    var calculator = new NextBirthdayCalculator(22, 9, 2019);
    console.log(calculator);
    expect(calculator.nextBirthdayInVenus()).toEqual("Sun May 3 2020");
  });

  test('should correctly calculate the user next birthday on Mars', () => {
    var calculator = new NextBirthdayCalculator(22, 9, 2019);
    console.log(calculator);
    expect(calculator.nextBirthdayInMars()).toEqual("Sun Aug 8 2021");
  });

  test('should correctly calculate the user next birthday on Jupiter', () => {
    var calculator = new NextBirthdayCalculator(22, 9, 2019);
    console.log(calculator);
    expect(calculator.nextBirthdayInJupiter()).toEqual("Sat Aug 2 2031");
  });
});
