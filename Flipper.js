let btn = document.querySelector("#btn");
function randomColor(){
    let red = Math.floor(Math.random()*255) + 1;
    let green = Math.floor(Math.random()*255) + 1;
    let blue = Math.floor(Math.random()*255) + 1;
    return `rgb(${red}, ${green}, ${blue})`;
}
btn.addEventListener("click", ()=>{
   let div = document.querySelector(".container");
   let h2 = document.querySelector("h2");
    div.style.backgroundColor = randomColor();
    let newColor = randomColor();
    h2.innerHTML=`<br>${newColor}`;
});