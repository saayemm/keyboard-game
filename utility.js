function hideElemntById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add("hidden")
}

function showElemntById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden")
}

function getARandomAlphabet(){
    const alphabetstrr = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = alphabetstrr.split("")
    // console.log(alphabets);
    
    const randomNumber = Math.random()*25;
    const indexNum = Math.round(randomNumber)

    const alphabet = alphabets[indexNum]
    return alphabet;
}
