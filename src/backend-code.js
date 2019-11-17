export function GalacticCalculator(age) {
  console.log(age);
  this.age = age;
  debugger;
}

GalacticCalculator.prototype.ageInMercuryYears = function() {
  let ageInMercuryYears = Math.floor(this.age / 0.24);
    return ageInMercuryYears;
};

GalacticCalculator.prototype.ageInVenusYears = function() {
  let ageInVenusYears = Math.floor(this.age / 0.62);
    return ageInVenusYears;
};

GalacticCalculator.prototype.ageInMarsYears = function() {
  let ageInMarsYears = Math.floor(this.age / 1.88);
    return ageInMarsYears;
};

GalacticCalculator.prototype.ageInJupiterYears = function() {
  let ageInJupiterYears = Math.floor(this.age / 11.86);
    return ageInJupiterYears;
};

export function ExpectancyCalculator(averageLifeExpectancy) {
  console.log(averageLifeExpectancy);
  this.averageLifeExpectancy = averageLifeExpectancy;
  debugger;
}

ExpectancyCalculator.prototype.lifeExpectancyInMercury = function() {
  let lifeExpectancyInMercury = Math.floor(this.averageLifeExpectancy / 0.24);
    return lifeExpectancyInMercury;
};

ExpectancyCalculator.prototype.lifeExpectancyInVenus = function() {
  let lifeExpectancyInVenus = Math.floor(this.averageLifeExpectancy / 0.62);
    return lifeExpectancyInVenus;
};

ExpectancyCalculator.prototype.lifeExpectancyInMars = function() {
  let lifeExpectancyInMars = Math.floor(this.averageLifeExpectancy / 1.88);
    return lifeExpectancyInMars;
};

ExpectancyCalculator.prototype.lifeExpectancyInJupiter = function() {
  let lifeExpectancyInJupiter = Math.floor(this.averageLifeExpectancy / 11.86);
    return lifeExpectancyInJupiter;
};
