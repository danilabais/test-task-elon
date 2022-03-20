const burger = document.querySelector(".hamburger")
const menu = document.querySelector('.menu')
const body = document.body

burger.addEventListener('click',()=>{
    body.classList.toggle('no-scroll')
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})