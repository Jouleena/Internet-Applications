const startBtn = document.getElementById("start-btn")
const title = document.getElementById("ttl")
const demoP = document.getElementById("demo")

startBtn.addEventListener("click",fun1)

function fun1(){
    startBtn.style.backgroundColor="white"
    startBtn.style.color="green"
    demoP.innerHTML="Props to you!"
}
