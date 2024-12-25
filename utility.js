function hideElemntById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add("hidden")
}

function showElemntById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden")
}