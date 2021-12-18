'use strict'

const DomElement = function () {
  const selector = prompt("Какой вам нужен элемент?");
  const hight = +prompt("Какова его высота?");
  const width = +prompt("Какова его ширина?");
  const bg = prompt("Какой цвет заднего фона?");
  const fontSize = +prompt("Размер шрифта?");
  const createElement = function() {
    if (selector[0] === ".") {
      let div = document.createElement("div");
      let name = selector.substr(1);
      div.className = name;
      div.innerHTML = "<h1>Привет!</h1>";
      div.style.cssText = "background: " + bg + ";" + "height: " + hight + "px;"+ "width: " + width + "px;" + "font-size: " + fontSize + "px";
      document.body.append(div);
    } else if (selector[0] === "#") {
      let div = document.createElement("div");
      let name = selector.substr(1);
      div.innerHTML = "<h1>Привет!</h1>";
      div.style.cssText = "background: " + bg + ";height: " + hight + "px;"+ "width: " + width + "px;" + "font-size: " + fontSize + "px;";
      div.id = name;
       document.body.append(div);
    } else {
      alert('должно начинаться с . или #')
    }
  };
  createElement();
};

DomElement();