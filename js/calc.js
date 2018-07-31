$(document).ready(function(){
  var add=function(number1,number2){
    return number1+number2
  };
  var subtract=function(number1,number2){
    return number1-number2
  };
  var divide=function(number1,number2){
    return number1/number2
  };
  var multiply=function(number1,number2){
      return number1*number2
  };
 alert('cool');
//   var prompts=function(){
//     var num1=parseInt(prompt("ENTER FIRST  NUMBER TO BE ADDED"));
//     var num2=parseInt(prompt("ENTER SECOND NUMBER TO BE ADDED"));
//   };
  $("#add").click(function(){
    var num1=parseInt(prompt("ENTER VALUE"));
    var num2=parseInt(prompt("ENTER SECOND VALUE"));
    var result=add(num1,num2)
    alert(num1);
    alert(num2);
    alert(result);

  });
  $('#subtract').click(function(){
    var num1=parseInt(prompt("ENTER VALUE"));
    var num2=parseInt(prompt("ENTER SECOND VALUE"));
    alert('cool');

    var result=subtract(num1,num2)
      alert('cooled');
    alert(num1);
    alert(num2);
    alert(result);

    alert('cool');

  });
  $('#divide').click(function(){
    var num1=parseInt(prompt("ENTER VALUE"));
    var num2=parseInt(prompt("ENTER SECOND VALUE"));
    var result=divide(num1,num2)
    alert(num1);
    alert(num2);
    alert(result);
  });
  $('#multiply').click(function(){
    var num1=parseInt(prompt("ENTER VALUE"));
    var num2=parseInt(prompt("ENTER SECOND VALUE"));
    var result=multiply(num1,num2)
    alert(num1);
    alert(num2);
    alert(result);
  });


});
