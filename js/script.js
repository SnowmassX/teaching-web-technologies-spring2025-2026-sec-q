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

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
    console.log('test');
    let d1 = document.getElementById('d1');
    let current = window.getComputedStyle(d1).left;

    // for(let a=0; a<20;a++){
    //     setTimeout(function (){
    //         if(current == ""){
    //         current = "10px";
    //         }else{
    //             //let newPos = current.replace('px','').trim();
    //             current = parseInt(current)+10+'px';
    //         }
    //         d1.style.left = current;
    //     }, 1000*(a+1));
    // }

    let count =1;
    let interval = setInterval(() => {

        if(count>10){
            clearInterval(interval);
        }else{
             if(current == ""){
            current = "10px";
            }else{
                current = parseInt(current)+10+'px';
            }
            d1.style.left = current;
        }
        count++;
    }, 1000);
});