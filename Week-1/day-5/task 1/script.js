const targetText = document.getElementById("targetText");
let currentFontSize = 22;

// Change Text Color (RED, GREEN, BLUE)
function changeColor(color) {
    targetText.style.color = color;
}

// Change Font Family from Dropdown
function changeFontFamily(font) {
    targetText.style.fontFamily = font;
}

// Change Font Size (A+, A-)
function changeFontSize(delta) {
    currentFontSize += delta;
    if (currentFontSize < 10) currentFontSize = 10;
    targetText.style.fontSize = `${currentFontSize}px`;
}

// Change Font Style on Mouseover
function setStyle(style) {
    if (style === "bold") targetText.style.fontWeight = "bold";
    if (style === "italic") targetText.style.fontStyle = "italic";
    if (style === "underline") targetText.style.textDecoration = "underline";
}

// Reset Font Style on Mouseout
function resetStyle(style) {
    if (style === "bold") targetText.style.fontWeight = "normal";
    if (style === "italic") targetText.style.fontStyle = "normal";
    if (style === "underline") targetText.style.textDecoration = "none";
}
