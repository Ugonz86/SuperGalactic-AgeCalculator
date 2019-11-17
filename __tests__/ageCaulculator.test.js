import { GalacticCalculator } from './../src/backend-code.js';

describe('GalacticCalculator', () => {

  test('should correctly return inputted age in Mercury years', () => {
    var calculator = new GalacticCalculator(33)
    console.log(calculator);
    debugger;
    expect(calculator.ageInMercuryYears()).toEqual(137);
  });

  test('should correctly return inputted age in Venus years', () => {
    var calculator = new GalacticCalculator(33)
    console.log(calculator);
    debugger;
    expect(calculator.ageInVenusYears()).toEqual(53);
  });

  test('should correctly return inputted age in Mars years', () => {
    var calculator = new GalacticCalculator(33)
    console.log(calculator);
    debugger;
    expect(calculator.ageInMarsYears()).toEqual(17);
  });

  test('should correctly return inputted age in Jupiter years', () => {
    var calculator = new GalacticCalculator(33)
    console.log(calculator);
    debugger;
    expect(calculator.ageInJupiterYears()).toEqual(2);
  });

  test('should correctly calculate the user’s life expectancy on Mercury', () => {
    var calculator = new GalacticCalculator(33, 100);
    console.log(calculator);
    debugger;
    expect(calculator.lifeExpectancyInMercury() - calculator.ageInMercuryYears()).toEqual(279);
  });

  test('should correctly calculate the user’s life expectancy on Venus', () => {
    var calculator = new GalacticCalculator(33, 100);
    console.log(calculator);
    debugger;
    expect(calculator.lifeExpectancyInVenus() - calculator.ageInVenusYears()).toEqual(108);
  });

  test('should correctly calculate the user’s life expectancy on Mars', () => {
    var calculator = new GalacticCalculator(33, 100);
    console.log(calculator);
    debugger;
    expect(calculator.lifeExpectancyInMars() - calculator.ageInMarsYears()).toEqual(36);
  });

  test('should correctly calculate the user’s life expectancy on Jupiter', () => {
    var calculator = new GalacticCalculator(33, 100);
    console.log(calculator);
    debugger;
    expect(calculator.lifeExpectancyInJupiter() - calculator.ageInJupiterYears()).toEqual(6);
  });

});
