// VARIABLES FOR EACH PAINTING TO MAKE IT DRAGGBLE
let boxOne = document.getElementById("monaLisa");
let boxTwo = document.getElementById("mondrian");
let boxThree = document.getElementById("renoir");
let boxFour = document.getElementById("caravaggio");
//SETTING A DRAGGBLE ATTRIBUTE FOR EACH PAINTING
boxOne.setAttribute("draggable", "true");
boxTwo.setAttribute("draggable", "true");
boxThree.setAttribute("draggable", "true");
boxFour.setAttribute("draggable", "true");
//ADDING AN EVENT LISTENER FOR EACH PAINTING TO BE DRAGGED
boxOne.addEventListener("dragstart", startDragging);
boxTwo.addEventListener("dragstart", startDragging);
boxThree.addEventListener("dragstart", startDragging);
boxFour.addEventListener("dragstart", startDragging);
//VARIABLE TO GET THE ID OF EACH PAINTING FOR THE CHECKFORMATCH FUNCTION
let selectedId;
//VARIABLE TO GET THE ID OF EACH DROPZONE FOR THE CHECKFORMATCH FUNCTION
let dropTargetId;
//VARIABLE TO KEEP TRACK OF MATCHES TO SHOW A CORRELATING BANNER
let matchCounter = 0;
//VARIABLE TO KEEP TRACK OF UNMATCHES TO SHOW A CORRELATING BANNER
let unMatchCounter = 0;
//DRAGGING FUNCTION FOR PAINTINGS
function startDragging (event) {
    event.dataTransfer.setData("image", event.target.id)
    selectedId = this.id
    console.log(selectedId);
}
//FUNCTION TO MODIFY FRAMES INTO DROPZONES
function modifyDropZones () {
    const dropZones = document.querySelectorAll(".dropFrame");

    for (const zone of dropZones) {
        zone.addEventListener("dragover", draggingOver);
        zone.addEventListener("drop", dropOnTarget);
    }
}

modifyDropZones();
//FUNCTION FOR THE OPERATION OF DRAGGING
function draggingOver(event) {
    event.preventDefault();
}

//VARIABLE FOR "DROPPING";(APPENDING) THE IMAGES
const target = document.querySelectorAll(".dropFrame");
//VARIABLE FOR THE FIRST BANNER IF THE USER WINS
let bannerOne = document.getElementById("bannerOne");
//VARIABLE FOR THE SECOND BANNER IF THE USER LOSES
let bannerTwo = document.getElementById("bannerTwo");


//FUNCTION FOR DROOPPING THE IMAGES AND INFORMING IF THEY WON OR LOST
function dropOnTarget (event) {
    event.preventDefault();
    const dataId = event.dataTransfer.getData("image");
    const getImage = document.getElementById(dataId);
    event.target.appendChild(getImage);
    dropTargetId = this.id;
    //CONDITION TO CHECK THE MATCHES AND ALTER THE FRAMES ACCORDINGLY (GREEN FOR RIGHT, RED FOR WRONG)
    if (checkForMatch (selectedId, dropTargetId)) {
    document.getElementById(dropTargetId).style.background = "#224d40";
    matchCounter++
    console.log(matchCounter);
    } else {
        document.getElementById(dropTargetId).style.background = "red";
        unMatchCounter++
        console.log(unMatchCounter);
    };
    //CONDITION FOR CORRECT MATCHES BANNER
    if (matchCounter === 4) {
        bannerOne.style.visibility = "visible";
    } 
    //CONDITION FOR INCORRECT MATCHES BANNER
    if (unMatchCounter >= 2) {
        bannerTwo.style.visibility = "visible";
    }
}

//VARIABLE FOR CREATING A SECOND DROP ZONE WHERE THE IMAGES A RE INITIALY PLACED
let paintZone = document.getElementById("paintings");
//ADDING AN EVENT FOR DRAGGING THE IMAGES
paintZone.addEventListener("dragover", draggingOver);
//ADDING AN EVENT FOR DROPPING THE IMAGES
paintZone.addEventListener("drop", dropBack);
//FUNCTION FOR DROPPING THE IMAGES BACK IN THEIR INITIAL PLACE
function dropBack (event) {
    event.preventDefault();
    const dataId = event.dataTransfer.getData("image");
    const getimage = document.getElementById(dataId);
    event.target.appendChild(getimage);
}
//FUNCTION FOR CHECKING THE MATCHES BETWEEN IMAGES AND THEIR CORRESPONDING FRAMES
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
//VARIABLE FOR THE FIRST BANNER BUTTON
let clearBtn = document.getElementById("clearButton");
//FUNCTION FOR THE FIRST BANNER BUTTON
    function clearPage() {
    window.location.reload();
}
//EVENT FOR THE FIRST BANNER BUTTON
clearBtn.addEventListener("click", clearPage)
//VARIABLE FOR THE SECOND BANNER BUTTON
let clearBtnTwo = document.getElementById("clearButtonTwo");
//FUNCTION FOR THE SECOND BANNER BUTTON
    function clearPage() {
    window.location.reload();
}
//EVENT FOR THE SECOND BANNER BUTTON
clearBtnTwo.addEventListener("click", clearPage)

 