const view1 = document.querySelector(".view-1")
const view2 = document.querySelector(".view-2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const tryAgain = document.querySelector("#tryAgain")

const fortune = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  ]




fortuneCookie.addEventListener('click', handleTryClick)
tryAgain.addEventListener('click', toggleScreen)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && view2.classList.contains('hide')){
        handleTryClick()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreen()
        }
    }
)

function handleTryClick() {
    toggleScreen()
    Fortune()
    
}

function Fortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    view2.querySelector("h2").innerText = `${fortune[randomNumber]}`
}


function toggleScreen() {
    view2.classList.toggle("hide")
    view1.classList.toggle("hide")
}