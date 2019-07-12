const getInTouchBtn = document.querySelector("#get-in-touch"); 
const contactContainer = document.querySelector(".contact-container"); 
const contactClose = document.querySelector(".close"); 

getInTouchBtn.addEventListener("click", () => {
    contactContainer.classList.toggle("enable");
});

contactClose.addEventListener("click", () => {
    contactContainer.classList.toggle("enable");
});
