const getInTouchBtn = document.querySelector("#get-in-touch"); 
const contactContainer = document.querySelector(".contact-container"); 
const contactClose = document.querySelector(".close"); 

getInTouchBtn.addEventListener("click", () => {
    contactContainer.classList.toggle("enable");
    scrollWin();
});

function scrollWin() {
    window.scrollBy(0,500);
}