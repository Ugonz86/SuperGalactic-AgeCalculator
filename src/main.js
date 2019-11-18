import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


import { GalacticCalculator } from './backend-code';
import { ExpectancyCalculator } from './backend-code';

$(document).ready(function() {

$("#seeAgeInPlanets").click(function() {
  $("#ageInputForm").slideDown("slow");
  $("#intro").hide("slow");
});
$("#seeYearsLeft").click(function() {
  $("#expectancyForm").slideDown("slow");
  $("#intro").hide("slow");
});
$(".goHome").click(function() {
  location.reload();
});
$("#ageInputForm").submit(function(event) {
  event.preventDefault();

  var inputtedAge = $('#ageInput').val();
  //
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
    var calculatorResult =  new ExpectancyCalculator(inputtedLifeExpectancy);
    event.preventDefault();
    $("#expectancyForm").hide("slow");
    $("#yearsLeft").slideDown("slow");
    $("#yearsLeftInMercury").text(calculatorResult.lifeExpectancyInMercury());
    $("#yearsLeftInVenus").text(calculatorResult.lifeExpectancyInVenus());
    $("#yearsLeftInMars").text(calculatorResult.lifeExpectancyInMars());
    $("#yearsLeftInJupiter").text(calculatorResult.lifeExpectancyInJupiter());

    });
});
