const button = document.getElementById("button");
const color = document.getElementById("color");
const scheme = document.getElementById("colorSchemeDropdown");
const outputContainer = document.getElementById("outputContainer");

// API Call to get the colors

button.addEventListener("click", (event) => {
    deleteColors()
    event.preventDefault();
    let userColor = color.value.substring(1);
    let userScheme = scheme.value;
    console.log(userColor)
    

    fetch(`https://www.thecolorapi.com/scheme?hex=${userColor}&mode=${userScheme}&count=5`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => renderColors(data))
    let colors = [];
});

// Rendering the colors from the API Call with a helper function whcih is called in the API Call

function renderColors (data) {
    data.colors.forEach((color)=> {
        console.log(color)
        const colorContainer = document.createElement("div");
        colorContainer.classList.add("colorContainer")
        const colorField = document.createElement("div")
        colorField.classList.add("color")
        colorField.style.backgroundColor = color.hex.value
        colorContainer.appendChild(colorField)
        const colorCode = document.createElement("p")
        colorCode.textContent = color.hex.value
        colorContainer.appendChild(colorCode)
        outputContainer.appendChild(colorContainer)
    })
}

// Deleting the colors from the previous call. 
// This function is called in the api call at the beginning in order to clear previous values

function deleteColors() {
    let toDelete = document.querySelectorAll(".colorContainer")
    toDelete.forEach(function(element) {
        element.remove();
    })
}