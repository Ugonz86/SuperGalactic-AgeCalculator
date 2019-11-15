export function AgeCalculator(age, averageLifeExpectancy) {
  console.log(age);
  this.age = age;
  this.averageLifeExpectancy = averageLifeExpectancy;
  debugger;
}

AgeCalculator.prototype.ageInMercuryYears = function() {
  let ageInMercuryYears = Math.floor(this.age / 0.24);
    return ageInMercuryYears;
};

AgeCalculator.prototype.ageInVenusYears = function() {
  let ageInVenusYears = Math.floor(this.age / 0.62);
    return ageInVenusYears;
};

AgeCalculator.prototype.ageInMarsYears = function() {
  let ageInMarsYears = Math.floor(this.age / 1.88);
    return ageInMarsYears;
};

AgeCalculator.prototype.ageInJupiterYears = function() {
  let ageInJupiterYears = Math.floor(this.age / 11.86);
    return ageInJupiterYears;
};

AgeCalculator.prototype.lifeExpectancyInMercury = function() {
  let lifeExpectancyInMercury = Math.floor(this.averageLifeExpectancy / 0.24);
    return lifeExpectancyInMercury;
};

AgeCalculator.prototype.lifeExpectancyInVenus = function() {
  let lifeExpectancyInVenus = Math.floor(this.averageLifeExpectancy / 0.62);
    return lifeExpectancyInVenus;
};

AgeCalculator.prototype.lifeExpectancyInMars = function() {
  let lifeExpectancyInMars = Math.floor(this.averageLifeExpectancy / 1.88);
    return lifeExpectancyInMars;
};

AgeCalculator.prototype.lifeExpectancyInJupiter = function() {
  let lifeExpectancyInJupiter = Math.floor(this.averageLifeExpectancy / 11.86);
    return lifeExpectancyInJupiter;
};
