

function playSound(event){
    const key = document.querySelector(`div[data-key='${event.keyCode}']`);
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    // console.log(key);
    // console.log(audio);
    if (!audio) return;
    const root = document.querySelector(":root");
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    root.style.setProperty("--color", `rgb(${red}, ${green}, ${blue})`);


    // ajouter une classe 
    key.classList.add("playing");
    // Reset le son à zéro avant de le relancer
    audio.currentTime = 0;
    audio.play();

}

function removeClass(event){
    event.target.classList.remove("playing");
}


const keys = document.querySelectorAll(".key")
keys.forEach(key => {
    key.addEventListener("transitionend", removeClass);
});
window.addEventListener("keydown", playSound);