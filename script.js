function yes() {
    const result = document.getElementById("result");

    result.textContent = "Kam fast! 🔥";
    result.style.color = "lightgreen";
    result.style.fontSize = "30px";
    result.style.fontWeight = "bold";
    result.style.backgroundColor = "#06240f";
    result.style.padding = "15px";
    result.style.borderRadius = "10px";
}

function no() {
    const result = document.getElementById("result");

    result.textContent = "Vondami bad dia game a asho! 😂";
    result.style.color = "red";
    result.style.fontSize = "30px";
    result.style.fontWeight = "bold";
    result.style.backgroundColor = "#0c0f0f";
    result.style.padding = "15px";
    result.style.borderRadius = "10px";
}