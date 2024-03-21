import "./style.css";
import { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";

home();

const homeElem = document.getElementById("home");
const aboutElem = document.getElementById("about");
const menuElem = document.getElementById("menu");

homeElem.addEventListener("click", home);
aboutElem.addEventListener("click", about);
menuElem.addEventListener("click", menu);
