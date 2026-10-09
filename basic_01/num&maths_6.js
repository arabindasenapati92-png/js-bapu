// ===============Number=================
const bals=new Number(121.23523);
//console.log(bals);
//console.log(bals.toString().length);
//console.log(bals.toFixed(2)); // 100.00 hamesa ._ _ doo'2' ayega
const compress=new Number(253.598);
//console.log(compress.toPrecision(4));// 121.2 age se 4 leter deha precision kar ke 'yani compress karke' 
const hundred=new Number(1000000)
//console.log(hundred.toLocaleString('en-IN'));
//------------------Math-------------------
console.log(Math);
console.log(Math.round(4.4));//4
console.log(Math.round(4.5));//5
console.log(Math.round(4.6));//5
console.log(Math.floor(4.9));//'4'  lowest value dega
console.log(Math.ceil(2.1));//'3'  thodi bhi uper value gayi to usko round karke bada wala dikhayega 
//console.log(Math.random());  //give random value betwen 0<-->1
//console.log(Math.floor(Math.random()*10)+1);
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));
