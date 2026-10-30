let namebox = document.getElementById("Name");
let output = document.getElementById("output");

function showData(){
    fetch("/data.json")
    .then((response) => response.json())
    .then((data) =>{
        output.textContent = data.names.join(", ");
    })
    .catch((error) => alert("Error: "+error));
}