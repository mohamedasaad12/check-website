const menutoggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menutoggle.addEventListener('click',()=>{
    menutoggle.classList.toggle('active')
    showcase.classList.toggle('active')
});


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

