

function convertCtoF(){
    let grauC = document.getElementById("celsiusToFaren").value;
    let grauF = (grauC*1.8) + 32;
    alert(grauF);
}


function convertFtoC(){
    let grauF = document.getElementById("farenToCelsius").value;
    let grauC = (grauF - 32)/1.8;
    alert(grauC);
}