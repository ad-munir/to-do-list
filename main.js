//import swal from 'sweetalert';

const input = document.getElementById("input");
const btnAdd = document.getElementById("add");
const btnClear = document.getElementById("clear");
const list = document.querySelector('.list');

btnAdd.onclick = function(){
    if(input.value.trim() === ""){
        //alert('Please enter a value');
        //swal("","Please enter a value","warning",{button:"I understood"});
        swal({
            //title:"0000000",
            text:"Please enter a value",
            icon:"warning",
            buttons:"I understood",
            timer:"4000",
            className:"sweet"
        })
        

        return;
    }  
    list.innerHTML +=`<li><span>${input.value} </span><button onclick='remove(event)'>&#10006;</button></li>`;

    input.value ='';
    input.focus();
} 

function remove(e){
    swal({
        title: "Are you sure?",
        text: "Once removed, you will not be able to recover it!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        className:"sweet"
    })
    .then((willDelete) => {
        if (willDelete) {
            e.target.parentElement.remove();
            swal("item has been removed!","","success", {className:"sweet",timer:"3000"});
        }
    });
}

btnClear.onclick = function(){
    if(list.firstChild === null){
        swal({
            title:"Your to do list is empty",
            text:"",
            icon:"info",
            buttons:"I understood",
            timer:"4000",
            className:"sweet"
        })
    }else{
        swal({
            title: "Are you sure?",
            text: "Once you click OK, you will not be able to recover it!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            className:"sweet"
        })
        .then((willDelete) => {
            if (willDelete) {
                list.innerHTML = '';
                swal("To do list has been cleared!","","success", {className:"sweet",timer:"3000"});
            }
        });
    }
    
}


