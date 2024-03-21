import Myimg from "./imgs/food.jpg";

export function home() {
  let content = document.getElementById("content");
  content.innerHTML = "<h1>Welcome to the restaurant</h1>";

  let Img = document.createElement("img");
  Img.src = Myimg;
  Img.width = 600;
  Img.height = Img.width;

  content.appendChild(Img);
}
