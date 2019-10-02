function $(arg) {return document.querySelectorAll(arg).length > 1 ? document.querySelectorAll(arg) : document.querySelector(arg);}
let brand = $('.navigation .brand');
let createApp = $('.createApp');
$('.app').forEach((app)=>{
  app.addEventListener('click',()=>{
    brand.innerText = app.getAttribute('data-app')
    createApp.classList.add("hidden")
  })
})

// clear preloader
document.addEventListener('DOMContentLoaded',()=>{
    $('#preloader').classList.add('closed');
})
