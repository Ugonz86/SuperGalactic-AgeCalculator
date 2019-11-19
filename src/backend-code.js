const mercuryConstant = 0.24;
const venusConstant = 0.62;
const marsConstant = 1.88;
const jupiterConstant = 11.86;

export function GalacticCalculator(age) {
  console.log(age);
  this.age = age;
  debugger;
}

GalacticCalculator.prototype.ageInMercuryYears = function() {
  let ageInMercuryYears = Math.floor(this.age / mercuryConstant);
    return ageInMercuryYears;
};

GalacticCalculator.prototype.ageInVenusYears = function() {
  let ageInVenusYears = Math.floor(this.age / venusConstant);
    return ageInVenusYears;
};

GalacticCalculator.prototype.ageInMarsYears = function() {
  let ageInMarsYears = Math.floor(this.age / marsConstant);
    return ageInMarsYears;
};

GalacticCalculator.prototype.ageInJupiterYears = function() {
  let ageInJupiterYears = Math.floor(this.age / jupiterConstant);
    return ageInJupiterYears;
};

export function ExpectancyCalculator(averageLifeExpectancy, yourAge) {
  console.log(averageLifeExpectancy);
  this.averageLifeExpectancy = averageLifeExpectancy;
  this.yourAge = yourAge;
  debugger;
}

ExpectancyCalculator.prototype.lifeExpectancyInMercury = function() {
  let lifeExpectancyInMercury = Math.floor(this.averageLifeExpectancy / mercuryConstant - this.yourAge / mercuryConstant);
    return lifeExpectancyInMercury;
};

ExpectancyCalculator.prototype.lifeExpectancyInVenus = function() {
  let lifeExpectancyInVenus = Math.floor(this.averageLifeExpectancy / venusConstant - this.yourAge / venusConstant);
    return lifeExpectancyInVenus;
};

ExpectancyCalculator.prototype.lifeExpectancyInMars = function() {
  let lifeExpectancyInMars = Math.floor(this.averageLifeExpectancy / marsConstant - this.yourAge / marsConstant);
    return lifeExpectancyInMars;
};

ExpectancyCalculator.prototype.lifeExpectancyInJupiter = function() {
  let lifeExpectancyInJupiter = Math.floor(this.averageLifeExpectancy / jupiterConstant - this.yourAge / jupiterConstant);
    return lifeExpectancyInJupiter;
};

// export function BirthdayCalculator() {
//   console.log();
//
//   debugger;
// }

// BirthdayCalculator.prototype. = function() {
//   let  = ;
//     return ;
// };
