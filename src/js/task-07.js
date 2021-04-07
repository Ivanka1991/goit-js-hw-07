/* Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль 
span#text обновляя свойство font-size. В результате при перетаскивании
 ползунка будет меняться размер текста. */

const fontSizeChanges = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeChanges.oninput = function() {
    text.style.fontSize = fontSizeChanges.value + "px";
  };
  