console.log("hi this is the practice no 5 js");

function intro( self ) {
    console.log( self + " shoaib ");
    console.log( self + " working herd ");
    console.log( self + " 20 years old ");
    console.log( self + " programer ");
}
intro("i am")


function sum( a , b , c = 5) {
    // console.log( a + b +c);
    return a+b
}

sum ( 6 , 8)
result1 = sum ( 6 , 5)  
result2 = sum ( 6 , 4)  
result3 = sum ( 6 , 2)  

console.log(" these num result is " , result1);
console.log(" these num result is " , result2);
console.log(" these num result is " , result3);


function add( d , e , f = 5) {
    // console.log( a + b +c);
    return d+e+f
}
result4 = add ( 6 , 45)  
result5 = add ( 6 , 54)  
result6 = add ( 6 , 12)  

console.log(" these num result is " , result4);
console.log(" these num result is " , result5);
console.log(" these num result is " , result6);




function add( g , h , i = 5) {
    console.log( g + h + i);
    return g+h+i
}
result4 = add ( 64 )  
result5 = add ( 62 , 54)  
result6 = add ( 67 , 12)  

console.log(" these num result is " , result4);
console.log(" these num result is " , result5);
console.log(" these num result is " , result6);


const func1 = (j)=>{
console.log("hi i am func1" , j)
} 
func1(4);
func1(54);
func1(44);