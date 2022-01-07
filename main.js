'use strict'

const selectorq = prompt("Какой вам нужен элемент?");
const hightq = +prompt("Какова его высота?");
const widthq = +prompt("Какова его ширина?");
const bgq = prompt("Какой цвет заднего фона?");
const fontSizeq = +prompt("Размер шрифта?");

const DomElement = function (selector, hight, width, bg, fontSize) {
  this.selector = selector;
  this.hight = hight;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.createElement = function() {
    if (this.selector[0] === ".") {
      let div = document.createElement("div");
      let name = this.selector.substr(1);
      div.className = name;
      div.innerHTML = "<h1>Привет!</h1>";
      div.style.cssText = "background: " + this.bg + ";" + "height: " + this.hight + "px;"+ "width: " + this.width + "px;" + "font-size: " + DomElement.fontSize + "px";
      document.body.append(div);
    } else if (this.selector[0] === "#") {
      let div = document.createElement("div");
      let name = this.selector.substr(1);
      div.innerHTML = "<h1>Привет!</h1>";
      div.style.cssText = "background: " + this.bg + ";height: " + this.hight + "px;"+ "width: " + this.width + "px;" + "font-size: " + this.fontSize + "px;";
      div.id = name;
       document.body.append(div);
    } else {
      alert('должно начинаться с . или #');
    }
  }
  this.createElement();
};

const DomElement1 = new DomElement(selectorq, hightq, widthq, bgq, fontSizeq);
const DomElement2 = new DomElement( '#gooo', 180, 160, 'blue', 14);


DomElement1();
DomElement2();

