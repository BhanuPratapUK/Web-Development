const  menuBtn= document.querySelector(".menu-button")
const menu = document.querySelector(".menu")


menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("change")
})