let boxOne = document.getElementById("monaLisa");
let boxTwo = document.getElementById("mondrian");
let boxThree = document.getElementById("renoir");
let boxFour = document.getElementById("monaLisa");


boxOne.setAttribute("draggable", "true");
boxTwo.setAttribute("draggable", "true");
boxThree.setAttribute("draggable", "true");
boxFour.setAttribute("draggable", "true");

boxOne.addEventListener("dragstart", startDragging);
boxTwo.addEventListener("dragstart", startDragging);
boxThree.addEventListener("dragstart", startDragging);
boxFour.addEventListener("dragstart", startDragging);

function startDragging (event) {
    console.log("yes");
}