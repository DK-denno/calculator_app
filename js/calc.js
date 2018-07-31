$(document).ready(function(){
  var add=function(number1,number2){
    return number1+number2
  var subtract=function(number1,number2){
    return number1-number2
  var divide=function(number1,number2){
    return number1/number2
  var multiply=function(number1,number2){
    return number1*number2

  };
  $("#add").click(function(){
    var num1=parseInt(prompt("ENTER FIRST  NUMBER TO BE ADDED"));
    var num2=parseInt(prompt("ENTER SECOND NUMBER TO BE ADDED"));
    var result=add(num1,num2)
    alert(num1);
    alert(num2);
    alert(result);
  });
});
