/*
    Script for generating different shapes/patterns using loops in JavaScript
*/

/*
    X
    X X
    X X X
    X X X X
    X X X X X
*/
function rightAngleTriangleRight(){
    var lines = 5;
    var triangle = "";
    for(var i=0;i<lines;i++){
        for(var j=0;j<=i;j++){
            triangle += "X ";
        }
        triangle += "<br>"
    }
    document.getElementById('result').innerHTML = triangle;
    document.getElementById('result').style.textAlign="start"
}
/*
    X X X X X
    X X X X
    X X X 
    X X
    X
*/
function rightAngleTriangleInvertRight(){
    var lines = 5;
    var triangle = "";
    for(var i = 0; i < lines; i++){
        for(var j = i; j < lines; j++) {
            triangle += "X "
        }
        triangle += "<br>"
    }
    document.getElementById('result').innerHTML = triangle;
    document.getElementById('result').style.textAlign="start"
}
/*
        X
       X X
      X X X
     X X X X
    X X X X X
*/
function pyramid(){
    var lines = 5;
    var triangle = "";
    for(var i = 0; i < lines; i++){
        for(var j = i; j < lines; j++) {
            triangle += " "
        }
        for(var j = 0; j <= i; j++) {
            triangle += "X "
        }
        triangle += "<br>"
    }
    document.getElementById('result').innerHTML = triangle;
    document.getElementById('result').style.textAlign="center"
}
/*
    X X X X X
     X X X X
      X X X 
       X X
        X
*/
function invertPyramid() {
    var lines = 5;
    var triangle = "";
    for(var i = 0; i < lines; i++){
        for(var j = 0; j < i; j++){
            triangle += " "
        }
        for(var j = lines; j > i; j--){
            triangle += "X "
        }
        triangle += "<br>"
    }
    document.getElementById('result').innerHTML = triangle;
    document.getElementById('result').style.textAlign="center"
}