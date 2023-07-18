let menuHambuguer = document.querySelector('.logo img')
let menu = document.querySelector('.menu')
let menuBtn = document.querySelector('.menu-btn')

menuHambuguer.addEventListener('click', ()=>{
  menu.classList.toggle('hide')
  menuBtn.classList.toggle('hide')
})