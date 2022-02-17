const headingOne = document.querySelector(".headingOne");


function changeColorPurple() {
    headingOne.style.color = '#8A2BE2';
}
function changeColorBlue() {
    headingOne.style.color = "#0000ff";
}
function changeColorRed() {
    headingOne.style.color = "#ff0000";
}
function makeBold() {
    headingOne.style.fontWeight = 'bolder';
}
function random() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function onCuh() {
    headingOne.style.color = random();
}


