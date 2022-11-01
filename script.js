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

let selectedId;

let dropTargetId;

function startDragging (event) {
    event.dataTransfer.setData("image", event.target.id)
    selectedId = this.id
    console.log(selectedId);
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

const target = document.querySelectorAll(".dropFrame");

function dropOnTarget (event) {
    const dataId = event.dataTransfer.getData("image");
    const getImage = document.getElementById(dataId);
    event.target.appendChild(getImage);
    dropTargetId = this.id;
    if (checkForMatch (selectedId, dropTargetId)) {
    document.getElementById(dropTargetId).style.background = "#224d40";
    } else {
        document.getElementById(dropTargetId).style.background = "red";
    };
}


let paintZone = document.getElementById("paintings");

paintZone.addEventListener("dragover", draggingOver);

paintZone.addEventListener("drop", dropBack);

function dropBack (event) {
    event.preventDefault();
    const dataId = event.dataTransfer.getData("image");
    const getimage = document.getElementById(dataId);
    event.target.appendChild(getimage);
}

function checkForMatch (selected, dropTarget) {
    switch (selected) {
        case (boxOne.id) :
            return dropTarget === target[0].id ? true : false;

        case (boxTwo.id) :
            return dropTarget === target[1].id ? true : false;

        case (boxThree.id) :
            return dropTarget === target[2].id ? true : false;

        case (boxFour.id) :
            return dropTarget === target[3].id ? true : false;

            
    }
}

checkForMatch();