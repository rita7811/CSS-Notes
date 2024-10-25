let x = 0, y = 0, z = 0

const originalEle = document.getElementById("original-box");
const originalBtnEle = document.getElementById("child-original");

const displayEle = document.getElementById("display-none");
const displayBtnEle = document.getElementById("child-display");

const visibilityEle = document.getElementById("visibility-hidden");
const visibilityBtnEle = document.getElementById("child-visibility");

const opacityEle = document.getElementById("opacity-0");
const opacityBtnEle = document.getElementById("child-opacity");

function clickEvent(e) {
    if (e.target.id === 'child-original') {
        e.target.innerHTML = `Child Element Clicked ${x += 1} `;
    }
    if (e.target.id === 'child-visibility') {
        e.target.innerHTML = `Child Element Clicked ${y += 1} `;
    }
    if (e.target.id === 'child-opacity') {
        e.target.innerHTML = `Child Element Clicked ${z += 1} `;
    }
}


// Original Box
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
    displayEle.style.backgroundColor = "red";
})
displayEle.addEventListener("mouseout",function () {
    displayEle.style.display = "none";
})
displayBtnEle.addEventListener("click", clickEvent);


// Box 2 => visibility: hidden
visibilityEle.addEventListener("mouseover", function () {
    visibilityEle.style.visibility = "visible";
    visibilityEle.style.backgroundColor = "red";
})
visibilityEle.addEventListener("mouseout",function () {
    visibilityEle.style.visibility = "hidden";
})
visibilityBtnEle.addEventListener("click", clickEvent);


// Box 3 => opacity: 0
opacityEle.addEventListener("mouseover", function () {
    opacityEle.style.opacity = "1";
    opacityEle.style.backgroundColor = "red";
})
opacityEle.addEventListener("mouseout",function () {
    opacityEle.style.opacity = "0";
})
opacityBtnEle.addEventListener("click", clickEvent)

