function sum(a,b){
    console.log("mysum에서 absum호출");
    var sum = a+b;
    var result = document.getElementById("show");
    result.innerHTML = sum;
}


function sum(){
    console.log("mysum에서 지금 sum()호출");
    var sum =0;
    for(var i=0; i<arguments.length; i++){ 
        //매개값으로 넘어온 arguments의 갯수
        sum += arguments[i];
    }
    return sum;
}

function mySum(){
    var result = sum(2,4);
    console.log("결과값"+result);
}

function arraysum(ary){
    var sum = 0;
    for(ar of ary){
        sum += ar;
    }
    return sum;
}

function arrayTest(){
    var numAr = [3,2,3,1,2,3,2,1,2,3,1,2,4,5,3,53,43,43,4,324,32,4];
    var result = arraysum(numAr);
    document.write(result);
}

function funcTest(){
    funcTest1(helloFunc);
}
function funcTest1(helloFunc){
    var hello = document.getElementById("show").innerHTML;
    hello += "world";
    document.getElementById("show").innerHTML = "hello";
}

function helloFunc(){
    document.getElementById("show").innerHTML = "Hello";
}