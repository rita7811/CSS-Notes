const displayEle = document.getElementById("display-none");
const displayBtnEle = document.getElementById("child-display");

const opacityEle = document.getElementById("opacity-0");
const opacityBtnEle = document.getElementById("child-opacity");

const visibilityEle = document.getElementById("visibility-hidden");
const visibilityBtnEle = document.getElementById("child-visibility");

const originalEle = document.getElementById("original-box");
const originalBtnEle = document.getElementById("child-original");

const clickedEle = document.getElementById("clicked");

function clickEvent() {
    clickedEle.style.color = "black";
    clickedEle.innerHTML += "clicked ";
}

// Box
originalEle.addEventListener("mouseover", function () {
    originalEle.style.backgroundColor = "red";
})
originalEle.addEventListener("mouseout",function () {
    originalEle.style.backgroundColor = "transparent";
})
originalBtnEle.addEventListener("click", clickEvent);


// Box 1 => display: none
displayEle.addEventListener("mouseover", function () {
    displayEle.style.display = "block";
})
displayEle.addEventListener("mouseout",function () {
    displayEle.style.display = "none";
})
displayBtnEle.addEventListener("click", clickEvent);


// Box 2 => opacity: 0
opacityEle.addEventListener("click", function () {
    clickedEle.style.color = "red";
    clickedEle.innerHTML += "opacity ";
})
opacityBtnEle.addEventListener("mouseover", function () {
    opacityEle.style.opacity = "1";
    clickedEle.style.color = "blue";
    clickedEle.innerHTML += "hover ";
})
opacityBtnEle.addEventListener("mouseout", function () {
    opacityEle.style.opacity = "0";
})


// Box 3 => visibility: hidden
visibilityEle.addEventListener("click", function () {
    visibilityEle.style.visibility = "visible";
})
visibilityEle.addEventListener("mouseout",function () {
    visibilityEle.style.backgroundColor = "hidden";
})
visibilityBtnEle.addEventListener("click", clickEvent);
