/* Счетчик состоит из спана и кнопок, которые должны увеличивать 
и уменьшать значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее 
значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения
значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление 
интерфейса */


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');  


      let counterValue = 0;
      incrementBtn.addEventListener('click', function (){
        console.log(incrementBtn);
        counterValue += 1;
        document.getElementById('value').textContent = counterValue;
      });

      decrementBtn.addEventListener('click', function (){
        console.log(decrementBtn);
        counterValue -= 1;
        document.getElementById('value').textContent = counterValue;
      });
      

    