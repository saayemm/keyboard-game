function continueGame(){
    const alphabet = getARandomAlphabet()
    console.log(alphabet);

    const currentAlphabet = document.getElementById("current-alphabet")
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet)
}

function play(){
    hideElemntById("home")
    showElemntById("playground")

    continueGame()
    showAlphabet()
}