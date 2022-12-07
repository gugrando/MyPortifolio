//Menu Mobile
const btnMobile = document.getElementById('btn-mobile');
const header = document.querySelector('header')
let navb = document.querySelectorAll('#menu li')
console.log(navb)

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  header.classList.toggle('active2')
}



navb.forEach(e => {
  addEventListener('click', toggleMenu);
});

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


function activeScroll(){
  var menu = document.querySelector("#hd")
  menu.classList.toggle("ativo", scrollY > 688 )
  window.addEventListener("scroll", activeScroll);
}activeScroll()

//Barra de scroll %
window.addEventListener("scroll", ()=>{
  const scrollBar = document.querySelector(".scroll-bar")
  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrollValue = (pageScroll / height) * 100

  scrollBar.style.width = scrollValue + "%"
})

//Tela de loading forçado
var i = setInterval(function () {
  clearInterval(i);
  document.getElementById("load").style.display = "none";
  document.getElementById("body").style.overflow = "auto";
}, 3400);