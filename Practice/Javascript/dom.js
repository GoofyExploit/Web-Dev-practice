function rand(){
    let colors = ["green", "red", "yellow", "pink", "maroon"];
    let elements = Array.from(document.body.children); // convert HTMLCollection to array
    
    if (elements.length > 0) {
        elements.forEach(element => {
            let randomColorIndex = Math.floor(Math.random() * colors.length);
            element.style.backgroundColor = colors[randomColorIndex];
        });
    }
}
rand();