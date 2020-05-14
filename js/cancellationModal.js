var modal = document.querySelector("#mymodal");
var keep_button_modal = document.querySelector("#keep-application-button");
var cancel_button_modal = document.querySelector("#cancel-application-button");
var cancel_button = document.querySelector("#cancel-button");

cancel_button.addEventListener("click", function(){
    modal.style.display = 'block';
});
keep_button_modal.addEventListener("click", function(){
    modal.style.display = 'none';
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
