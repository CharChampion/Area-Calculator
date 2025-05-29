
function Asking() {
    var a = prompt("Finding the Area for: 1, Square/Rectangle; 2, Triangle; 3, Circle");
    var a;
}



if (a="1"){
  var sq_side_length = prompt("What is the side length of the square? (Only Enter a Number!)");
} 
if (sq_side_length!== undefined){
  let answer = sq_side_length*sq_side_length;
  document.getElementById("answer").innerHTML=(answer);
}



if (a=2){
  var rec_side1 = prompt("What is the side length of one side of the rectangle? (Only Enter a Number!)")
  var rec_side2 = prompt("What is the side length of the other side of the rectangle? (Only Enter a Number!)")
}
if (rec_side1!==undefined && rec_side2!==undefined){
  let answer = rec_side1*rec_side2;
  document.getElementById("answer").innerHTML=(answer)
}



if (a=3){
  var radius = prompt("Enter the radius of the circle. (Only Enter a Number!)")
}
if (radius!==undefined){
  let answer = (radius*radius)*(3.14);
  document.getElementById("answer").innerHTML=(answer)
}