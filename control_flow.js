var temp1 = 40;
var temp2  = 60;
var temp3 = 20;

if(temp1 >=temp2 && temp1>=temp3){
    console.log(temp1,"is greater number");
}else if(temp2>=temp1 && temp2>=temp3){
    console.log(temp2,"is greater number");
}else{
    console.log(temp3,"is greater number");
}


//Ternary Operator

var age = 20;
var message;
age >=18 ? (message = 'you can drive') : (message='you can not drive');
console.log(message);