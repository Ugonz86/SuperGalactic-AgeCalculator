import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import $ from 'jquery';
import { GalacticCalculator } from './backend-code';
import { ExpectancyCalculator } from './backend-code';
import { NextBirthdayCalculator } from './backend-code';
import "./img/mercury.jpg";
import "./img/venus.jpg";
import "./img/mars.jpg";
import "./img/jupiter.jpg";

$(document).ready(function(){
  $("#seeAgeInPlanets").click(function() {
    $("#ageInputForm").slideDown("slow");
    $("#intro").hide("slow");
  });
  $("#seeYearsLeft").click(function() {
    $("#expectancyForm").slideDown("slow");
    $("#intro").hide("slow");
  });
  $("#seeNextBirthday").click(function() {
    $("#birthdayForm").slideDown("slow");
    $("#intro").hide("slow");
  });
  $(".goHome").click(function() {
    location.reload();
  });

  $("#ageInputForm").submit(function(event) {
    event.preventDefault();
    var inputtedAge = $('#ageInput').val();
    var calculatorResult =  new GalacticCalculator(inputtedAge);
    event.preventDefault();
    $("#ageInputForm").hide("slow");
    $("#resultDiv").slideDown("slow");
    $("#ageInMercury").text(calculatorResult.ageInMercuryYears());
    $("#ageInVenus").text(calculatorResult.ageInVenusYears());
    $("#ageInMars").text(calculatorResult.ageInMarsYears());
    $("#ageInJupiter").text(calculatorResult.ageInJupiterYears());
  });

  $("#expectancyForm").submit(function(event) {
    event.preventDefault();
    var inputtedLifeExpectancy = $('#expectancyInput').val();
    var yourAge = $('#yourAgeInput').val();
    var calculatorResult =  new ExpectancyCalculator(inputtedLifeExpectancy, yourAge);
    event.preventDefault();
    $("#expectancyForm").hide("slow");
    $("#yearsLeft").slideDown("slow");
    var expectancyInMercury = calculatorResult.lifeExpectancyInMercury();
    if (expectancyInMercury >= 0) {
      $("#yearsLeftInMercury").text("Years left in Mercury: " + expectancyInMercury);
    }
    else {
      $("#yearsLeftInMercury").text("Years past life expectancy in Venus: " + Math.abs(expectancyInMercury));
    }
    var expectancyInVenus = calculatorResult.lifeExpectancyInVenus();
    if (expectancyInVenus >= 0) {
      $("#yearsLeftInVenus").text("Years left in Venus: " + expectancyInVenus);
    }
    else {
      $("#yearsLeftInVenus").text("Years past life expectancy in Venus: " + Math.abs(expectancyInVenus));
    }
    var expectancyInMars = calculatorResult.lifeExpectancyInMars();
    if (expectancyInMars >= 0) {
      $("#yearsLeftInMars").text("Years left in Mars: " + expectancyInMars);
    }
    else {
      $("#yearsLeftInMars").text("Years past life expectancy in Mars: " + Math.abs(expectancyInMars));
    }
    var expectancyInJupiter = calculatorResult.lifeExpectancyInJupiter();
    if (expectancyInJupiter >= 0) {
      $("#yearsLeftInJupiter").text("Years left in Jupiter: " + expectancyInJupiter);
    }
    else {
      $("#yearsLeftInJupiter").text("Years past life expectancy in Jupiter: " + Math.abs(expectancyInJupiter));
    }
  });

  $("#birthdayForm").submit(function(event) {
    event.preventDefault();
    var inputtedDay = $('#dayInput').val();
    var inputtedMonth = $('#monthInput').val();
    var inputtedYear = $('#yearInput').val();
    var calculatorResult = new NextBirthdayCalculator (inputtedDay, inputtedMonth, inputtedYear);
    event.preventDefault();
    $("#birthdayForm").hide("slow");
    $("#nextBirthdayInPlanets").slideDown("slow");
    var nextBdayInMercury = calculatorResult.nextBirthdayInMercury();
    $("#birthdayInMercury").text(nextBdayInMercury);
    var nextBdayInVenus = calculatorResult.nextBirthdayInVenus();
    $("#birthdayInVenus").text(nextBdayInVenus);
    var nextBdayInMars = calculatorResult.nextBirthdayInMars();
    $("#birthdayInMars").text(nextBdayInMars);
    var nextBdayInJupiter = calculatorResult.nextBirthdayInJupiter();
    $("#birthdayInJupiter").text(nextBdayInJupiter);
  });
});
