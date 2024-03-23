import about1 from "./imgs/about-1.jpg";
import about2 from "./imgs/about-2.jpg";

const aboutList = [about1, about2];
export function about() {
  let content = document.getElementById("content");
  content.innerHTML = "<h1>about us</h1>";

  let about_content = document.createElement("div");
  about_content.className = "about-content";

  content.appendChild(about_content);

  let itemNum = 2;
  for (let idx = 0; idx < itemNum; idx++) {
    let itemBox = createItem(idx);
    about_content.appendChild(itemBox);
  }
}

function createItem(idx) {
  let itemBox = document.createElement("div");
  itemBox.className = "item-box";
  itemBox.setAttribute("display", "flex");

  let Img = document.createElement("img");
  Img.src = aboutList[idx];
  Img.width = 400;
  Img.height = Img.width;
  Img.setAttribute("border-radius", "50%");

  itemBox.appendChild(Img);

  return itemBox;
}
