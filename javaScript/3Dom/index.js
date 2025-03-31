function changebgc(color) {
    document.body.style.backgroundColor = color
}
const themebutton = document.getElementById("themebutton")

themebutton.addEventListener("click", () => {
    console.log(document.body.style.backgroundColor);
    const currentclr = document.body.style.backgroundColor;
    if (!currentclr || currentclr == "white") {
        changebgc("black")
        themebutton.innerText = "darkmode"
    }
    else {
        changebgc('white')
        themebutton.innerText = "whitemod"
    }


})
// darkbutton.addEventListener("click", function () {
//     console.log("storing valu in db");

// })
