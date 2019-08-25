var myBt = document.querySelector("button");
myBt.addEventListener("click", function() {
    // if (!isPurple) {
    //     document.body.style.background = "purple";
    // }       
    // else {
    //     document.body.style.background = "white";
    // }
    // isPurple = !isPurple;
    document.body.classList.toggle("purple");
})