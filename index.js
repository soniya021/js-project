console.log(a);
console.log(b);
getName(a, b);

var a = 100;
console.log(a);
var b = 200;
console.log(b);

console.log("starlight");
function getName(num1, num2) {
  add = num1 + num2;
  output = add;
  console.log(output);
  return output;
}
getName(a, b);

// example for hoisting

var a = 3;
console.log(a);
function setName() {
  console.log("welcome");
}
setName();

function sayHiBye() {
  var a = "sanju";
  var b = "patil";

  // helper nested function to use below
  function getFullName() {
    return a + " " + b;
  }

  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}
sayHiBye(a, b);

function makecounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = makecounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// const firstName="soniya";
// const lastName="patil";
// const age=19;

// const abtSoniya="i'm "+ firstName  + lastName +  '  and my age is '  +   age + ','+ ' and me is a student' + '.';
// console.log(abtSoniya);

const urName = "anil venugopal";
const age = 25;
const job = "js dev";

const abtAnil = `i'm ${urName} , my age is ${age},my job is ${job} .`;
console.log(abtAnil);
console.log(`im skilled in..\n\
html\n\
css`);

const clgName = "sacred heart degree clg";
const address = "jeevan bhima nagar";
const year = 1995;
const trusty = "mary vijaya";
const principal = "dr deepa";
const fees = 50000;

const abtClg = `our clg ${clgName}.located at ${address} the founder of the clg is mother gnanama .it was fouund in the ${year}.and since then there ere lots of branches being oopened .v provide good education and environment is good and 'faculy r friendly'. it was opened in ${year}since then it has given '100% of  excellence' it is been runned by the very great madam${principal}.who is very good and very monkey and our ${trusty}.she toh no western wearing always against it very monkey clg. after my course completion for uppl i sat i cut ur internals move movee.`;
console.log(abtClg);
console.log('deatail of the clg\n\
cows visible\n\
goats visible\n\
mad dod\n\
garbagr famous\n\
in night clg disappears\n\
oly 2 tress');
// v hv comleted variable,data types,operators,sting and temple literals es6 features.
// v completed hoisting,function declaration,function expression,global execution context,lexical environment,call stack,closures,block level coding
// june 23/2023.


const requiredTrophy=2000;
if(requiredTrophy >=2500){
console.log(`ur in crystal leauge with ${requiredTrophy} trophy`);
}else{
  console.log(`ur not in crystal leauge with ${requiredTrophy} trophy`);
}

// example for if-else statement.

let n ='1'+1;
n=n-1;
console.log(n);
// type converstion

const y='1'+'2'+'3';
console.log(y);
// example for type corection

console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(0));
// console.log(Boolean({}));TRUTH
console.log(Boolean(NaN));
console.log(Boolean(null));

let frodo='maddie';
if (frodo){
  console.log('show frodo is maddie');
}else{
  console.log('no frodo');
}

const currentBill=500;
if(currentBill){
  console.log(`bill is free`);
}else{
  console.log(`bill is doubled`);
}
// example for truthy and falsy value for if else stmt.

//  const me=prompt("im angry");
//  console.log(me);

//  const scoreDolphins=(96+108+89)/3;
// const scoreKoalas=(96+108+89)/3;
// if(scoreDolphins&&scoreKoalas){
//     console.log("Dolphins win the trophy")
// }
// else{
//     console.log("both win the trophy")

// and,or not operator example
const festival=['diwali','christmas','eid'];
const me=festival.includes('diwali')
console.log(me);
switch(festival){
  case me:
    console.log("festival of lights");
    break;
    case 'christmas':
      console.log("celebration on the birth of jesus");
      break;
      case 'eid':
        consolr.log("festival of peace");
        break;
        default:
          console.log("all festival brings joy");

}
// example for switch stmt 

const bill = 275;
const tip=(bill>=50&&bill<=300)?bill*(15/100):bill*(20/100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}.`)

// example for condition operator.

// function butterChicken(onion,lemon){
//   console.log(onion,lemon);
//   const preparation=`butter chicken is tasty with ${onion} onion and ${lemon} lemon`;
//   return preparation;
// }
// console.log(butterChicken(3,4));
// console.log(butterChicken(6,4));

const calcAge=birthYear=>2037-(birthYear)

const age1=calcAge
console.log(calcAge(1991));

const averageMarks=(mark1,mark2,mark3)=>{
  avg=(mark1+mark2+mark3)/3;
  return avg;
  }
console.log(averageMarks(100,100,100));
console.log(averageMarks(100,100,100));
// arrow functions example




// example for function calling other function
// hoisting is not possible in arrow function
const ingredients=garlic=>{
  return garlic+2;
}
 const butterChicken=(onion,lemon)=>{
const onionPieces=ingredients(onion);
const lemonPieces=ingredients(lemon);
const preparation=`butter chicken is tasty with ${onionPieces} onion and ${lemonPieces} lemon`;
  return preparation;
}
console.log(butterChicken(3,4));


// code test eg
const calcAverage= (score1,score2,score3)  =>{
  return (score1+score2+score3)/3;
}
const scoreDolphins =calcAverage( 44,23,71);
const scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner=(avgDolphins,avgKoalas)=>{
  if(avgDolphins>avgKoalas){
     console.log(`dolphins win (${avgDolphins}vs ${avgKoalas})`); 
      }
      else if (avgDolphins=avgKoalas){
          console.log(`No team wins...`);
      }else{
          console.log(`Koalas win (${avgKoalas}vs ${avgDolphins})`); 
      }
}
checkWinner(scoreDolphins,scoreKoalas);

//  const flowers=['lily','jasmine','lotus'];        types of array Method
// console.log((flowers.length-1));                 1.splice.
// console.log(flowers[0]);                         2.reverse.
// console.log(flowers[1]);                         3.shift.
// console.log(flowers[2]);                         4.pop.
//                                                  5.push.
// console.log(flowers.shift())                     6.split.
//                                                  7. toString.
                                                 
// array of objects;JSON(JAVASCRIPT OBJECT NOTATION).
const students=[ 
  {
    "id":'046',
   "name":"soniya",
   "class":'bca'

  },
  {
    "id":'11',
    "name":'fiza',
    "course":'bca'
  },
  {
    "id":'12',
    "name":'divya',
    "course":'ceba'
  }
]
console.log(students[0].name+`is goddess`);
console.log(students[2].course + `is good`);



