export function GalacticCalculator(age, averageLifeExpectancy) {
  console.log(age);
  this.age = age;
  this.averageLifeExpectancy = averageLifeExpectancy;
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

GalacticCalculator.prototype.lifeExpectancyInMercury = function() {
  let lifeExpectancyInMercury = Math.floor(this.averageLifeExpectancy / 0.24);
    return lifeExpectancyInMercury;
};

GalacticCalculator.prototype.lifeExpectancyInVenus = function() {
  let lifeExpectancyInVenus = Math.floor(this.averageLifeExpectancy / 0.62);
    return lifeExpectancyInVenus;
};

GalacticCalculator.prototype.lifeExpectancyInMars = function() {
  let lifeExpectancyInMars = Math.floor(this.averageLifeExpectancy / 1.88);
    return lifeExpectancyInMars;
};

GalacticCalculator.prototype.lifeExpectancyInJupiter = function() {
  let lifeExpectancyInJupiter = Math.floor(this.averageLifeExpectancy / 11.86);
    return lifeExpectancyInJupiter;
};
