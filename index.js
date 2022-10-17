const modal = document.getElementById("modal")
console.log(modal)
const closeBtn = document.getElementById("modal-close-btn")

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

closeBtn.addEventListener("click", function(){
    modal.style.display='none'
})
