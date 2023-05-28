
const modeBtn = document.getElementById('btn-1')
const mode = document.querySelector('body')
const about = document.getElementById('about')
const mainContent = document.getElementById('main')

modeBtn.addEventListener("click", function(){
    mode.classList.toggle('body-mode')
    modeBtn.classList.toggle('btn-1_2')
    mainContent.classList.toggle('main-mode')
})

















