//Oculta o enseña el elemento seleccionado
function togglevis(id) {
var tochange = document.getElementById(id);
    if(tochange.style.display == 'block') {
        tochange.style.display = 'none';
    } else {
        tochange.style.display = 'block';
    }
}

//Oculta o enseña el elemento seleccionado con un scroll verticall
function slidevis(id){
	$(document).ready(function(){
    $("#"+id).slideToggle();
});	
}