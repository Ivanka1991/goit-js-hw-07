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
  //console.log(ingredients);
   
  const ingredientsList = document.createElement('ul');
  console.log(ingredientsList)
  const body = document.querySelector('body');
  body.append(ingredientsList)
  ingredients.forEach(ingredient => {
      const ingredientsItem = document.createElement('li');
      ingredientsItem.textContent = ingredient;
      console.log(ingredientsItem)
      ingredientsList.append(ingredientsItem)
  });
  //const ingredientsItem = document.createElement('li')
  //.textContent = ingredient;