// ------------ DEVICE CSS ------------ \\
var cssPath = "styles/standard.css";
if (navigator.platform == "iPhone" || navigator.platform == "iPad") {
    cssPath = "styles/handheld.css";
}

var fileref = document.createElement("link");

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(fileref);
