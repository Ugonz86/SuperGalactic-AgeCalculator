import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import $ from 'jquery';

// import { GalacticCalculator } from './backend-code';
//
$(document).ready(function() {

$("#ageInputForm").submit(function(event) {
  event.preventDefault();

  // var inputtedAge = parseInt($('#ageinput').val());
  // var calculatorResult = GalacticCalculator (inputtedAge);

  $("#ageInputForm").hide();
  $("#resultDiv").slideDown("slow");
  });
});
// $(document).ready(function() {
//   $("#ageInputForm").submit(function(event) {
//     event.preventDeposit();
//
//     $("#resultDiv").slideUp();
//     $("#ageInputForm").hide();
//   });
// });
// if (this.averageLifeExpectancy >= this.lifeExpectancyInMercury())
//   return ("You have have lived" + (averageLifeExpectancy - lifeExpectancyInMercury) + "years past your life expectancy!");

// test('should correctly return the number of years the user have lived past the life expectancy on Mercury', () => {
//   var calculator = new AgeCalculator(33,100);
//   console.log(calculator);
//   debugger;
//   expect(calculator.lifeExpectancyInMercury() - calculator.averageLifeExpectancy).toEqual(179);
//
// });
