//var socket = io();
const socket= io(); 

let user =document.getElementById('user');
let quote = document.getElementById('quote');
let btn = document.getElementById('submit');

btn.addEventListener('click', function(){
    socket.emit('notificacion:location',{
        user :user.value, 
        quote :quote.value
    })
   
    
})