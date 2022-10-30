let boxOne = document.getElementById("monaLisa");
let boxTwo = document.getElementById("mondrian");
let boxThree = document.getElementById("renoir");
let boxFour = document.getElementById("caravaggio");


boxOne.setAttribute("draggable", "true");
boxTwo.setAttribute("draggable", "true");
boxThree.setAttribute("draggable", "true");
boxFour.setAttribute("draggable", "true");

boxOne.addEventListener("dragstart", startDragging);
boxTwo.addEventListener("dragstart", startDragging);
boxThree.addEventListener("dragstart", startDragging);
boxFour.addEventListener("dragstart", startDragging);

function startDragging (event) {
    event.dataTransfer.setData("image", event.target.id)
    console.log("yes");
}

function modifyDropZones () {
    const dropZones = document.querySelectorAll(".dropFrame");

    for (const zone of dropZones) {
        zone.addEventListener("dragover", draggingOver);
        zone.addEventListener("drop", dropOnTarget);
    }
}

modifyDropZones();

function draggingOver(event) {
    event.preventDefault();
}

function dropOnTarget (event) {
    event.preventDefault();
    event.target.style.background = "#1f5e4a";
    const dataId = event.dataTransfer.getData("image");
    const getImage =document.getElementById(dataId);
    event.target.appendChild(getImage);
}