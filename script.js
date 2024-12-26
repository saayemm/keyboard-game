function continueGame(){
    const alphabet = getARandomAlphabet()
    console.log(alphabet);
}

function play(){
    hideElemntById("home")
    showElemntById("playground")

    continueGame()
}