// name = "alamin";
// var name = "alamin";
// let name = "alamin";
// const name = "alamin";

let std = [1, 'alamin', 2.5];

// if(1 === "1"){

// }else{

// }

// for(let a=0; a<10; a++){

// }

// function sum(a, b){
//     return a+b;
// }

// sum(10,20);

// let sum = function(a, b){
//     return a+b;
// }

// //sum(10,20);

// function test(a, b){
//     let d= b+10;
//     let c = a(d,b);
//     return c;
// }

// test(function(a, b){
//     return a+b;
// }, 20);
//console.log(std);
//alert('test');
// document.write('testing form js');

let btn = document.getElementById('btn');
btn.addEventListener('click', test);
let username = document.getElementById('username');
username.addEventListener('keyup', test);

function test(){
    let head = document.getElementsByTagName('h1')[0];
    
    let msg = document.getElementById('msg');

    if(username.value == ""){
        msg.style.color = 'red';
        msg.innerHTML = "please type username first";

    }else{
        head.style.color = 'red';
        head.innerHTML = username.value;
        msg.innerHTML = "";
    }
}