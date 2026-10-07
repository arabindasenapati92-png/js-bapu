/*
console.log(null==0);
console.log(null >0);// not convert Zero
console.log(null >= 0);// convert null to Zero

console.log(undefined==0);
console.log(undefined>0);// not convert Zero
console.log(undefined < 0)
//=== strict check
console.log("2"===2)//check the datatype */

/*********************primitive******************* */
//string,number,boolern,null,undefined,symbol,bigint
const mynull=null // typeof object
const myid=Symbol("1234")
const myemailid=Symbol("1234")  // typeof symbol

/*    console.log(myid === myemailid);// false     */
let bigNumber = 1246457228765745n   // typeof bigint
/************** Reference(Non-primitive) **************** */

// array
let myarray = ["bapu","raj","gudu"]    // typeof object
// object
let myobject = {"bapu":120,
                 "gudu":110,
                    "raj":100 }   // typeof object
//function
 const myfunction=function(){
    console.log("hallo world");
 }
 /*  console.log(typeof mynull);   // object function              */
 /*+++++++++++++++++ memory alocation ++++++++++++++++*/
 // stack (store primitive) , heap(store non-primitive)
//1-stack
let var1=10
let var2=var1
console.log(var2,var1); // 10 10
var2 += 112
console.log(var2,var1); // 122 10
//2-heap
let a={x:7}
let b=a
console.log(a,b); //   { x: 7 } { x: 7 }
b.y=1// add y:1
console.log(a,b); //  a - ans { x: 7, y: 1 } b - ans{ x: 7, y: 1 }
