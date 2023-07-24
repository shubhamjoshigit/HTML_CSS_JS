function multiply(n1,n2)
{
    return n1*n2;
}
console.log(multiply(10,20));

function mul1(n1,n2=10) {
    return n1*n2;
}
console.log(mul1(10));

function sum()
{
    let sum=0;
    for (let i = 0;i< arguments.length; i++) {
        sum+=arguments[i];
        
    }
    return sum;

}
console.log(sum(1,2,3,4,5));


let show=function () {
    console.log("Annonymous function");
    }
    show();
//Arrow
let show1=()=>{console.log("Arrow Function")};
show1();

//Function for calculating avg
function avg(){
    var x=10;
    var y=20;
    var z=30;
    var average=(x+y+z)/3;
    console.log("Average:"+average);
}
avg();
// function calAvg(){
//     var n=prompt("Enter the number of inputs");
//     var sum=0;
//     for(let i=0;i<parseInt(n);i++)
//     {
//         var num=prompt("Enter the numbers");
//         sum+=parseInt(num);

//     }
//     var av=sum/parseInt(n);
//     console.log("average:"+av);
// }
// calAvg();
const words=["aman","shubham","shivas","ritesh"];
const res=words.filter(word=>word.startsWith("s"));
console.log(res);

//reduce
const numbers=[4,6,36,5,10];
let sum1=numbers.reduce((total,value)=>total+value);
console.log(sum1);

//for syntax
for(let i in numbers)
console.log(numbers[i]);

for(let i of numbers)
[
    console.log(i)
]

