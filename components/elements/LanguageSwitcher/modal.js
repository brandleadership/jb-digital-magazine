var modal = document.getElementsByClassName('modal')[0];

// Get the button that opens the modal
var btn = document.getElementById('languageswitcher');

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.classList.toggle('show_modal');
};
