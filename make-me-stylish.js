function styleFunc(elementsName) {
    var objectStyle = { color: "red", background: "blue" };
    var myElements = document.getElementsByTagName(elementsName);
    for (var i = 0; i < myElements.length; i++) {
        var e = myElements[i];
        for (var j in objectStyle) {
            e.style[j] = objectStyle[j];
        }
    }
}