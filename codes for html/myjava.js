/*
var destination='Vancouver Canada';
var travelTime='2 Hours';
var taxes='10%'


var wait = 2;
var cost= 6;
var tax_rate= .20;
cost=cost*wait;
cost = cost + ( cost * tax_rate)



$(function() {
    $(".vcb").on("click", function() {
      alert(`Destination: Vancouver Canada   Travel Time: 2 Hours   Taxes: 10%`);
    });
  });

<script>
function myFunction() {
    alert("I am an alert box!")
}





function multiplyBy(){
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
  
}

function divideBy(){
  num1 = document.getElementById("firstNumber").value;
   num2 = document.getElementById("secondNumber").value;
   document.getElementById("result").innerHTML = num1 / num2;
}

*/


function multiplyBy(){
  const denver = 67
  var taxes = 0.07
var passengers = document.getElementById("numberPassengers").value;
document.getElementById("answer").innerHTML = (passengers*denver) + ((passengers*denver)*taxes);

}

    