/*
const name="bapu"
const repoCount=15
console.log(name+repoCount); // this is old method    */

//const name="bapu"
//const repoCount=15
//console.log(`my name is ${name} and my repo is ${repoCount}`)

const value = new String("bapu");
/*
console.log(value.toUpperCase());
console.log(value.toLowerCase());
console.log(value.charAt(1));
console.log(value.indexOf("p"));
console.log(value.substring(0,2));//slicing
console.log(value.slice(0,-1));
const value1 = String("   bapu   ");
console.log(value1);// spaceses
console.log(value1.trim());// trim the spacesses  */


const value2 = String("bapu,senapati");
console.log(value2.anchor("bapu")) // to convect anchor tar in html
let index = 4
console.log(`the ${index}no. index is ${value2.at(4)}`);
console.log(value2.at(3))  // it is use to find position of the index value 
console.log(value2.big()); //<big>bapu,senapati</big>
console.log(value2.bold());//<b>bapu,senapati</b>
console.log(value2.charCodeAt(index));
console.log(value2.link("https://developer.mozilla.org/"));
console.log(value2.endsWith("i")); // check the ending positionj is true or false

/*
const url = "https://bapu.com/arabinda%20senapati"
console.log(url.replace("%20","-")); //replace the element
console.log(url.includes(":")); // find particular charector is part of colection or not
console.log(url.split("/")); // jaha jaha per e hai ushi ke hisb se separate karke ek[ array banayega]   */

