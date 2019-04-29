var btnSubmit = document.getElementById("submit");
var tracker = function check(){
  var side1= parseInt(document.getElementById("L1").value);
  var side2= parseInt(document.getElementById("L2").value);
  var side3= parseInt(document.getElementById("L3").value);

  // console.log(side1);
  // console.log(side2);
  // console.log(side3);

  var output = document.getElementById ("output");

  
  // push variable
  var triangleSides = [];
  triangleSides.push (side1);
  triangleSides.push (side2);
  triangleSides.push (side3);
    

  // CONDITION FOR LENGTHS TO BE GREATHER THAN 0
  if (side1<= 0|| side2<=0|| side3<=0){
    document.getElementById("output").innerHTML =
    "This is not a triangle, triangles must have a value of greater than 0"
  }
  // CONDITION FOR NOT A TRIANGLE
  else if(
    (side1 + side2 <= side3 && side2 + side1 <= side3) ||
    (side1 + side3 <= side2 && side3 + side1 <= side2) ||
    (side2 + side3 <= side1 && side3 + side2 <= side1)
  ){
    document.getElementById("output").innerHTML =
    "This is not a triangle"
  }
  //  CONDITION FOR AN ISOSCLES TRIANGLE
  else if(
    side1===side2 || side1===side3 || side2===side1 || side2===side3 || side3===side1 
    || side3===side2 
  ){
    document.getElementById("output").innerHTML =
    "This is an Isoscles triangle"
  }
  // CONDITIONS FOR AN EQUILATERAL TRIANGLE
  else if(
    side1===side2 && side2===side3 && side3===side1
  ){
    document.getElementById("output").innerHTML =
    "This is an equilateral triangle"
  }
  // CONDITIONS FOR A SCALENE TRIANGLE
  else if(
    side1 !==side2 && side2 !==side3 && side3 !==side1
  ){
    document.getElementById("output").innerHTML =
    "This is a scalene triangle"
  }
    

} 
if (btnSubmit){
  btnSubmit.addEventListener('click',tracker);
}
