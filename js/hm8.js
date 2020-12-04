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
/*
 for (let cat of cats) {
     console.log(cat['name']);
    console.log(cat['additional_info']['vaccinations'])
 };*/


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
        };
        let passport = document.createElement('p');
        if (cat['additional_info']['passport'] === true){
            passport.innerText= 'есть паспорт';
        };

        adicion.append(color, passport, vaccinations);
        specialInfo.append(pic, adicion);


        mainCard.append(basicInfo, specialInfo);
        
        catsCard.append(mainCard);
    }
}
generateCatsCards(document.querySelector('.cats'));

/*Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
Функция не должна быть привязаны к конкретным значениям.
Заголовки ячеек - названия свойств.
Например, для articles заголавками будут: id, title, text, author; для goods заголавками будут: title, price, count.

 Массивы для тестирования:
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
 
 Примеры вызова функции:
 generateTable(articles); // генерация таблицы со статьями
 generateTable(goods); // генерация таблицы с товарами */
