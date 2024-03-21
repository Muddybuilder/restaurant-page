import menu1 from "./imgs/menu1.jpg";
import menu2 from "./imgs/menu2.jpg";
import menu3 from "./imgs/menu3.jpg";
import menu4 from "./imgs/menu4.jpg";

const menuList = [menu1, menu2, menu3, menu4];
export function menu() {
  let content = document.getElementById("content");
  content.innerHTML = "<h1>Choose any, you will love it</h1>";

  let itemNum = 4;
  for (let idx = 0; idx < itemNum; idx++) {
    let itemBox = createItem(idx);
    content.appendChild(itemBox);
  }
}

function createItem(idx) {
  let itemBox = document.createElement("div");
  itemBox.className = "item-box";
  itemBox.setAttribute("display", "flex");

  let Img = document.createElement("img");
  Img.src = menuList[idx];
  Img.width = 600;
  Img.height = Img.width;
  Img.setAttribute("border-radius", "50%");

  let text = document.createElement("p");
  text.innerText = `This is delicious MENU ${idx + 1}`;

  itemBox.appendChild(Img);
  itemBox.appendChild(text);

  return itemBox;
}
