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
socket.emit('UpdateOnDatabase');


//https://stackoverflow.com/questions/55848025/refresh-page-automatically-when-mongodb-collection-changes