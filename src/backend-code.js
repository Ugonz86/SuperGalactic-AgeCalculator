const mercuryConstant = 0.24;
const venusConstant = 0.62;
const marsConstant = 1.88;
const jupiterConstant = 11.86;
const mercuryRevolutionPeriod = 87.97;
const venusRevolutionPeriod = 224.7;
const marsRevolutionPeriod = 686;
const jupiterRevolutionPeriod = 4332;

export function GalacticCalculator(age) {
  this.age = age;
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
  this.averageLifeExpectancy = averageLifeExpectancy;
  this.yourAge = yourAge;
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

export function NextBirthdayCalculator(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
}
NextBirthdayCalculator.prototype.nextBirthdayInMercury = function() {
  let nextBirthdayInMercury = new Date(this.year,this.month - 1,this.day);
  nextBirthdayInMercury.setDate(nextBirthdayInMercury.getDate() + mercuryRevolutionPeriod);
  let birthdayMercury = nextBirthdayInMercury.toLocaleString('en-US',{weekday: 'short'}) + ' ' + nextBirthdayInMercury.toLocaleString('en-US', {month: 'short'}) + ' ' + nextBirthdayInMercury.getDate() + ' ' + nextBirthdayInMercury.getFullYear();
  return birthdayMercury;
};
NextBirthdayCalculator.prototype.nextBirthdayInVenus = function() {
  let nextBirthdayInVenus = new Date(this.year,this.month - 1,this.day);
  nextBirthdayInVenus.setDate(nextBirthdayInVenus.getDate() + venusRevolutionPeriod);
  let birthdayVenus = nextBirthdayInVenus.toLocaleString('en-US',{weekday: 'short'}) + ' ' + nextBirthdayInVenus.toLocaleString('en-US', {month: 'short'}) + ' ' + nextBirthdayInVenus.getDate() + ' ' + nextBirthdayInVenus.getFullYear();
  return birthdayVenus;
};
NextBirthdayCalculator.prototype.nextBirthdayInMars = function() {
  let nextBirthdayInMars = new Date(this.year,this.month - 1,this.day);
  nextBirthdayInMars.setDate(nextBirthdayInMars.getDate() + marsRevolutionPeriod);
  let birthdayMars = nextBirthdayInMars.toLocaleString('en-US',{weekday: 'short'}) + ' ' + nextBirthdayInMars.toLocaleString('en-US', {month: 'short'}) + ' ' + nextBirthdayInMars.getDate() + ' ' + nextBirthdayInMars.getFullYear();
  return birthdayMars;
};
NextBirthdayCalculator.prototype.nextBirthdayInJupiter = function() {
  let nextBirthdayInJupiter = new Date(this.year,this.month - 1,this.day);
  nextBirthdayInJupiter.setDate(nextBirthdayInJupiter.getDate() + jupiterRevolutionPeriod);
  let birthdayJupiter = nextBirthdayInJupiter.toLocaleString('en-US',{weekday: 'short'}) + ' ' + nextBirthdayInJupiter.toLocaleString('en-US', {month: 'short'}) + ' ' + nextBirthdayInJupiter.getDate() + ' ' + nextBirthdayInJupiter.getFullYear();
  return birthdayJupiter;
};
