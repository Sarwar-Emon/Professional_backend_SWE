// //Higher order fucntion: function can accept other function as arguments and/ or return functon.  
// function something(value_one, value_two)
// {
//     console.log(value_one,value_two);
//     return function(){}
// }

// //something(23,25);

// //Pure function-> alway give the same result 

// function add(a, b) {
//     return a + b;
// }

// //console.log(add(12, 3));

// // Closure = An inner function remembers and can access variables from its outer function even after the outer function has finished executing
// function outerFunction() {
//     let age = 90;

//     function innerFunction() {
//         console.log(age);
//     }

//     return innerFunction;
// }

// const result = outerFunction();

// result(); // 90


// function sayhello()
// {
//     console.log('Hello Sayem');
// }
// function checking_higher_oder(receving_argument_from_sayhello_function) {
//     receving_argument_from_sayhello_function();
// }

// checking_higher_oder(sayhello)


function add(a,b){
    return a+b;
}
function calculate(a,b,operation){
   return operation(a,b);
}

console.log((calculate(10,4, add)));