/* pointers */

//Get the banner
var banner = document.getElementById("banner");

//Get the modal
var modal = document.getElementById('video_myModal');

//Get the button that opens the modal
var free_trial_button = document.getElementById("bottom_button");

//Get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the cancel button
var cancel = document.getElementById("cancel_button");

//Get the submit button
var submit = document.getElementById("submit_modal");

//Get the message box
var message = document.getElementById("thank_you");

//Helper Function
function myTimer() {
    message.style.opacity = '0';
    message.style.left = '-100%';
}

/* Events */

//When the user clicks on the button, open the modal.
free_trial_button.addEventListener("click", function(){
    banner.style.opacity = '0';
    modal.style.display = "block";
});

//When the user clicks on span (x), close the modal
span.addEventListener("click", function(){
    modal.style.display = "none";
    banner.style.opacity = "1";
});

//When the user clicks the submit button
submit.addEventListener("click", function(){
    modal.style.display = "none";
    banner.style.opacity = "1";
    message.style.opacity = "1";
    message.style.left = "10%";
    setInterval(myTimer, 4000);
})

//When the user clicks on cancel
cancel.addEventListener("click", function(){
    modal.style.display = "none";
    banner.style.opacity = "1";
});

//When the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        banner.style.opacity = "1";
    }
}


