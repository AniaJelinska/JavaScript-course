var average = 0;
function getAverage (a,b){

    average = (a + b) / 2; 
    console.log(average);
    return average;

}

var myResult = getAverage(7,11); //global variable

function logResult(){

    console.log("the average is " + myResult + " inside the function");

}

logResult();

