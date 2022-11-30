const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) =>{
    const x = (event.pageX - btnEl.offsetLeft);
    const x = (event.pageY - btnEl.offsetTop);

    btnEl.getElementsByClassName.setProperty("--xPos", x + "px")
    btnEl.getElementsByClassName.setProperty("--yPos", y + "px")
});