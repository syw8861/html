// var num = 0;
// var str = "Hello rara";
// document.writeln(str);

// console.log(num);

//indow.alert(str);



// var num1, num2, num3;
// num1 = 10;
// num2 = 20;
// num3 = num1 + num2;
// document.writeln("<br>결과값은" + num3 + "입니더");

// for(var i=0; i<10; i++){
//     document.writeln("<br>"+"i의 값은:"+i)
//     console.log("i의 값은"+i+"임");
// }
// document.writeln("</ul>");

var titleAry=["이름", "국어","영어","수학"];
var nameAry=["Son", "yong", "won"];

document.write('<table border="1">');
document.write("<tr>");
for(var i=0; i<titleAry.length; i++){
    document.write("<th>" + titleAry[i]+ "</th>");
}
document.write("</tr>");
for(var i=0; i<nameAry.length; i++){
    document.write("<tr>");
    document.write('<td style=background-color:blue;>'+nameAry[i]+'</td>');
    for(var j=0; j<3; j++){
        document.write("<td>" + (j+10) + '</td>');
    }
    document.write("</tr>");
}
document.write("</table>");




var dayAry=["일","월","화","수","묵","금","토"];
document.write('<table border="1">');
document.write('<tr>');
for(var i=0; i<dayAry.length; i++){
    document.write('<th>' + dayAry[i] + '</th>');
}
document.write('</tr>');
document.write('<tr>');
document.write('<td></td>');
    for(var j=1; j<31; j++){
        if(j%7==0){
            document.write('<tr></tr>');
        }
        document.write('<td>'+ j + '</td>');
    }
    document.write('</tr>');
document.write('</table>');


// for(var i=0; i<5; i++){
//     document.write('<tr></tr>');
//     for(var j=0; j<7; j++){
//         if(j==0){
//             document.write('<td></td>');
//             j++;
//         }
//         else if(j%7==0){
//             document.write('<td style=background-color:red;>'+j+'</td>');
//         }else if(j%6==0){
//             document.write('<td style=background-color:blue;>'+j+'</td>');           
//         }if(j%7 !=0){
//         document.write('<td>'+ j + '</td>');
//         }
//         document.write('</tr>');
//     }
// }
// document.write('</table>');