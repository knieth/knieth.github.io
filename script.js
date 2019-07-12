const getInTouchBtn = document.querySelector("#get-in-touch"); 
const contactContainer = document.querySelector(".contact-container"); 

getInTouchBtn.addEventListener("click", () => {
    contactContainer.classList.toggle("enable");
});