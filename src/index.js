import Myimg from "./food.jpg";
let content = document.getElementById("content");
content.innerHTML = "<h1>This is restaurant</h1>";

let Img = document.createElement("img");
Img.src = Myimg;
Img.width = 600;
Img.height = Img.width;

content.appendChild(Img);
