/* Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его 
атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid. */


const inputForm = document.getElementById('validation-input');
const lengthForm = inputForm.getAttribute('data-length');
const lengthControl = parseInt(lengthForm, 10);
console.log(lengthForm)
inputForm.addEventListener('blur',() =>{

    if(inputForm.value.length === lengthControl ){
        inputForm.classList.add('valid');
        inputForm.classList.remove('invalid');
    }else{
        inputForm.classList.add('invalid');

    }
})



