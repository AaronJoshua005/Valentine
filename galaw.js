const noButton = document.getElementById("NO_button");

let touches = 0;
const maxTouch = 5;

noButton.addEventListener("click", handleTouch);
noButton.addEventListener("touchstart", handleTouch);

function handleTouch(event){
    event.preventDefault();
    touches++;

    if(touches >= maxTouch){

        noButton.removeEventListener("click", handleTouch);
        noButton.removeEventListener("touchstart", handleTouch);

        noButton.href="no5.html";

        noButton.textContent = "No";
        noButton.style.backgroundColor = "blue";
        noButton.style.cursor = "pointer";
        
        return;

    }

    moveButton();

}

function moveButton(){
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const left = Math.floor(Math.random() * (90 + 90));
    const top = Math.floor(Math.random() * (90 + 90));

    noButton.style.transform = `translate(${top}px, ${left}px)`;
}