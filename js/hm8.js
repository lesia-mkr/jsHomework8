'use strict';
/*Написать функцию генерации карточек с информацией о животных. Выглядеть должно, как на изображении в телеграмм*/

 function getCats() {
     return [
         {
             "name": "Люся",
             "age": "1 год",
             "color": "трехцветная",
             "additional_info": {"vaccinations": true, "passport": true}
         },
         {
             "name": "Том",
             "age": "3 месяца",
             "color": "белый",
             "additional_info": {"vaccinations": false, "passport": false}
         },
         {
             "name": "Макс",
             "age": 2,
             "color": "серый",
             "additional_info": {"vaccinations": false, "passport": true}
         },
         {
             "name": "Василий",
             "age": 3,
             "color": "черный",
             "additional_info": {"vaccinations": true, "passport": true}
         }
     ];
 } 
 
let cats = getCats();


function generateCatsCards(catsCard){
    for (let cat of cats){
        let mainCard = document.createElement('div');
        mainCard.classList.add('mainCard');

        let title = document.createElement('h1');
        title.innerText = cat['name'];

        let age = document.createElement('p');
        age.innerText = cat['age'];

        let basicInfo = document.createElement('div');
        basicInfo.classList.add('basicInfo');
        basicInfo.append(title, age);

        let specialInfo = document.createElement('div');
        specialInfo.classList.add('specialInfo');

        let adicion = document.createElement('div');
        adicion.classList.add('adicion');
        

        let pic = document.createElement("img");
        pic.setAttribute("src", "https://picsum.photos/id/345/300");
        pic.classList.add('img_width');

        let color = document.createElement('p');
        color.innerText = cat['color'];

        let vaccinations = document.createElement('p');
        if (cat['additional_info']['vaccinations']=== true){
           vaccinations.innerText = 'привита'; 
        }
        let passport = document.createElement('p');
        if (cat['additional_info']['passport'] === true){
            passport.innerText= 'есть паспорт';
        }

        adicion.append(color, passport, vaccinations);
        specialInfo.append(pic, adicion);


        mainCard.append(basicInfo, specialInfo);
        
        catsCard.append(mainCard);
    }
}
generateCatsCards(document.querySelector('.cats'));

 let articles = [
     {
         id: 1,
         title: "JS",
         text: "Статья про JS",
         author: "Александр"
     },
     {
         id: 2,
         title: "PHP",
         text: "Статья про PHP",
         author: "Виталий"
     },
     {
         id: 3,
         title: "Базы Данных",
         text: "Статья про Базы Данных",
         author: "Евгения"
     },
     {
         id: 4,
         title: "HTML",
         text: "Статья про HTML",
         author: "Виталий"
     }
 ];
 
 let goods = [
     {
         title: "Пианино",
         price: 3000,
         count: 25
     },
     {
         title: "Гитара",
         price: 1200,
         count: 40
     },
     {
         title: "Барабаны",
         price: 2700,
         count: 12
     },
     {
         title: "Флейта",
         price: 900,
         count: 50
     },
     {
         title: "Арфа",
         price: 3400,
         count: 5
     }
 ];
/*Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
Функция не должна быть привязаны к конкретным значениям.
Заголовки ячеек - названия свойств.
Например, для articles заголавками будут: id, title, text, author; для goods заголавками будут: title, price, count.*/

function generateTable(array) {
    let tableArea = document.getElementById('tables');
    let table = document.createElement('table');
    let element = array[0];
    let row = table.insertRow();
    for (let cell in element) {
        let cap = row.insertCell();
        cap.innerText = cell;
    }  
    for (let elemen of array){
        let i = 0;
        let row = table.insertRow();
        for (let cell in elemen){
            let newCell = row.insertCell(i++);
            newCell.innerText = elemen[cell];
        }
    }
    console.log(table);
    tableArea.append(table);
}

 generateTable(articles); // генерация таблицы со статьями
 generateTable(goods); // генерация таблицы с товарами 


 // функция generateField(n) генерации игрового поля из дз #8
 /*Написать функцию generateField(n) по генерации игрового поля размером n x n.
     Значение n не может быть меньше 3.
     Для 3х ячеек поля (для выбора конкретной ячейки использовать random) 
     добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
     Для 1й ячейки значение атрибута prise="cat",
     для 2й ячейки значение атрибута prise="book",
     для 3й ячейки значение атрибута prise="car"*/   

let prizes = {
    cat: "Кот",
    book: "Книга",
    car: "Машина"
};

function generateField(n) {
    if (n < 3) return;
    let counter = 0;
    let container = document.createElement("div");
    container.style.width = '40vw';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    let size = 40/n; //'vw'
    for (let i = 0; i < n * n; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", counter);
        counter++;
        innerDiv.style.border = '2px solid black';
        innerDiv.style.width = innerDiv.style.height = size + 'vw';
        container.append(innerDiv);
    }
    document.getElementById("game-field").append(container);
    let prizesArr = Object.keys(prizes);
    console.log(Math.floor(Math.random() * (n*n)), Math.floor(Math.random()*n**2) );
    for (let item of prizesArr){
        document.getElementById(`${Math.floor(Math.random() * (n*n))}`).setAttribute("prise", item);
    }
}
generateField(8);

 /**nрошлые дз, которые я кидала, но они не получили оценки в ведомости, так что копирую их сюда же, тк наверно они потерялись среди всего 
  * дз 5, та задача которую надо исправить
 * 
 * условие:
 * 
 * Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, 
 * будет возвращать слово "товар" в нужно форме ("12 ", но "22 , "1 ", "97 товаров" и тд).
 * 
 * комментарий к моему решению : 
 * 1. если count равно 0, 20, 30 40 и тд функция будет возвращать undefined
2. let str = `${goods} товара`;
return str
можно заменить на
return `${goods} товара`;
и не забывайте про ;
 		
 */

function countGoods (goods){
    if ( 5<= goods && goods < 20) {
        return `${goods} товаров`;
    }  if (goods % 10 === 0){
        return `${goods} товаров `;
    }if ( goods % 10 === 1) {
        return `${goods} товар`;
    } if (goods % 10 === 2 || goods % 10 == 3 || goods % 10 === 4){
        return `${goods} товара`;
    } if ( 5 <= (goods % 10) && (goods % 10) <= 9) {
        return `${goods} товаров `;
    }
}

console.log(countGoods(210));

/* 
дз 4, задача 1
Найти количество вхождений одной строки в другую. Например, строка "дом" встречается в строке "дом домик домой одомашненный" 4 раза */
let str = 'дом домик домой одомашненный дом дд ооо дом домик', s = 'дом';
let counter = 0, counter1 = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === s[0]) {
        for ( let i1 = 0; i1 < s.length; i1++) {
            if (str[i+i1] === s[i1]){
                counter1++;
            } if (counter1 === s.length){
                counter++;
                counter1 = 0;
            }
        } 
    }
}


console.log(counter);

/*

4 дз, задача 4 
Найдите самое длинное слово в предложении, при условии,
 что в предложении все слова разной длины 
 Например, в "в предложении все слова разной длины" самое длинное слово "предложении" */

str = 'в предложении все слова разной длины';
let word = '', word1 = '', word3='', n = 0, n2 = 0 ;
counter = 0;
for (let i = 0; i < str.length; i++){
    if (str[i] != ' '){
        counter += 1;
        word3 += str[i];
    } if (str[i] === ' '){
        n2 = counter;
        word1 = word3;
        counter = 0;
        word3 = '';
        if ( n2 > n){
            n = n2;
            word = word1;
        }
    }
}
console.log(n, word);

