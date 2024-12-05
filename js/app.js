new WOW().init();

$(".bubble-text p, .bubble-text small").addClass('wow animate__animated animate__fadeIn')





const pauseVar = "fa-pause-circle";
const playVar = "fa-volume-up";

const btns = document.querySelectorAll(".all");

function onChange(event) {
    const buttonElement = event.currentTarget;

    const isPlayButton = buttonElement.classList.contains(playVar);

    if (isPlayButton) {
        buttonElement.classList.remove(playVar);
        buttonElement.classList.add(pauseVar);
        $("#play-button").removeClass("animate__infinite");
        $("#myAudio").get(0).play();
    } else {
        buttonElement.classList.remove(pauseVar);
        buttonElement.classList.add(playVar);
        $("#play-button").addClass("animate__infinite");
        $("#myAudio").get(0).pause();
    }

    // You can also use .toggle function on classList as mentioned by the person in other answer
}

// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach((btn) => {
    btn.addEventListener("click", onChange);
});