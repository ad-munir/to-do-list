const input = document.getElementById("input");
const btnAdd = document.getElementById("add");
const btnClear = document.getElementById("clear");
const list = document.querySelector('.list');

btnAdd.onclick = function(){
    if(input.value.trim() === ""){
        alert('Please enter a vlue');
        return;
    }  
    list.innerHTML +=`<li>${input.value} <button onclick='remove(event)'>remove</button></li>`;

    input.value ='';
    input.focus();
} 

function remove(e){
    e.target.parentElement.remove();
}

btnClear.onclick = function(){
    list.innerHTML = '';
}