/* Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients.
Для создания DOM-узлов используй document.createElement(). */

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
   

  const ingredientsList = document.getElementById('ingredients');
  const ingredientsItem = ingredients.map(ingredient => {
      const ingredientsEl = document.createElement('li');
      ingredientsEl.textContent = ingredient;
      return ingredientsEl
  });
  ingredientsList.append(...ingredientsItem);
  
  
