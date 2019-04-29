function myFunction(){
  var L1= parseInt(document.getElementById(L1).value);
  var L2= parseInt(document.getElementById(L2).value);
  var L3= parseInt(document.getElementById(L3).value);
  var text;

  var triangleTracker = [L1, L2, L3];
  // CONDITION FOR LENGTHS TO BE GREATHER THAN 0
  if (L1<= 0|| L2<=0|| L3<=0){
    text = " not a triangle, triangles must have a value of more than o"
  }
  // CONDITION FOR NOT A TRIANGLE
  else if(
    (L1 + L2 <= L3 && L2 + L1 <= L3) ||
    (L1 + L3 <= L2 && L3 + L1 <= L2) ||
    (L2 + L3 <= L1 && L3 + L2 <= L1)
  ){
    text = " not a triangle"
  }
  //  CONDITION FOR AN ISOSCLES TRIANGLE
  else if(
    L1===L2 || L1===L3 || L2===L1 || L2===L3 || L3===L1 
    || L3===L2 
  ){
    text = " an Isosceles triangle, two sides are equal"
  }
  // CONDITIONS FOR AN EQUILATERAL TRIANGLE
  else if(
    L1===L2 && L2===L3 && L3===L1
  ){
    text = " an Equilateral triangle, all sides are equal"
  }
  















}