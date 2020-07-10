
var num;
document.write(typeof num);
document.write("<br>");

num=10;
document.write(typeof num);
document.write("<br>");

num="nice";
document.write(typeof num);
document.write("<br>");

num={
    name: "hong",
    age:20
}
document.write(typeof num);

//연산
var num1, num2, num3; //script는 변수선언을 뒤에 해줘도 상관없다. 값은 안나옴
num1 = 'hello';
num2 = 15;
num3 = 30;
num = num1+ (num2+num3);
console.log(num);

num3 = "15";
console.log(num2 !== num3);

var sum=0;
var i=0 // for문 안에 i값을 for문 밖에 선언해줘도 가능하다.
for(; i<10; i++){
    if(i<5)
        continue;
    sum += i;
}
document.write('<br>');
document.write("결과값은: "+sum);

var $sum =10; //변수이름에 사용 가능한 특문2개 $ _ 
var _sum =10;
var sum1=10;
var sum$ = 10;
