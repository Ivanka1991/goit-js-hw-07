/* Напиши скрипт который, при наборе текста в инпуте input#name-input 
(событие input), подставляет его текущее значение в span#name-output.
 Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

 const inputEl = document.getElementById('name-input');
 const outputEl = document.getElementById('name-output');

 inputEl.addEventListener('input', (e) =>{
     e.preventDefault;
     outputEl.textContent = inputEl.value;
 })