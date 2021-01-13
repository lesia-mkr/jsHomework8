'use strict';

/*Необходимо изменить функцию openDescription из lesson10.js так, 
чтобы при нажатии на 'p' связанная с ним информация открывалась, а информация, связанная с остальными 'p' скрывалась. 
Повторное нажатие на 'p' приводит к скрытию связанной с ним информации.*/

let titleElems = document.querySelectorAll(".article p:first-child");

for (let elem of titleElems){
    elem.addEventListener("click", openDescription);
}

function openDescription() {
    let chosen = this;
    for (let elem of titleElems){
        if (elem === chosen) continue;
        if (elem.nextElementSibling.classList.contains('open') === true) elem.nextElementSibling.classList.remove('open');
    };
    console.log("элемент, на который был повешен обработчик", this);
    this.nextElementSibling.classList.toggle("open");
}
/*Задача на генерацию игрового поля (часть 2):

 Пользователю дается определенное количество попыток, чтобы найти приз, 
 если ему удается найти спрятанный приз за указанное количество попыток, 
 то отобразить пользователю его приз, если не удалось, то вывести информацию об этом.
 
 После каждой попытки отображать, сколько попыток осталось.
 Если пользователь получил приз или закончились попытки, он не может продолжить игру (удалить обработчик события).

 */

 let presentContainer = document.getElementById("present_container");
 presentContainer.addEventListener("click", showPresent);
 
 let getPresents = () => {
     return {
         car: "Машина",
         dog: "Собака",
         book: "Книга"
     };
 };
 
 let counter = 5; // attempts 
 function showPresent(event) {
     let clickElem = event.target;
     let presentValue = clickElem.dataset.present;
     let emptyCell = clickElem.dataset.presentEmpty;
     if (presentValue && counter > 0) { 
         let presents = getPresents();
         clickElem.innerText = presents[presentValue];
         clickElem.classList.add("present");
         this.removeEventListener("click", showPresent);
     } else if (counter > 0 && emptyCell){
         counter--;
         alert(counter + ' attempts are available');
         if (counter === 0) {
            alert('you lost the game :(') 
            this.removeEventListener("click", showPresent);
        }
     }
 };

/**TABLE */

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

 /** 
  Задача на генерацию таблицы (часть 2):
при нажатии на заголовок ячейки должна происходить сортировка по соответствующему столбцу, например:

  Например, для массива goods из файла таблица будет следующего вида:
   TITLE     PRICE   COUNT
  Пианино    3000     25
  Гитара     1200     40
  Барабаны   2700     12
  и тд
  Вывод после нажатия на COUNT:
   TITLE     PRICE   COUNT
  Барабаны   2700     12
  Пианино    3000     25
  Гитара     1200     40
  и тд         */
function generateTable(array) {
    let tableArea = document.getElementById('tables');
    let table = document.createElement('table');
    let element = array[0];
    let row = table.insertRow();
    row.setAttribute('id', 'captions');
    for (let cell in element) {
        let cap = row.insertCell();
        cap.innerText = cell;
        cap.setAttribute('id', cell);
    };
    tableArea.append(table);
    let captions = document.getElementById('captions');
    captions.addEventListener('click',generateSortedTable);
    let newArr = array;
    generateSortedTable();
    function generateSortedTable(event){
        if (event){
            let param = event.target.id;
            newArr = sortByParam(param, array);
        };
        let rowCounter =0;
        for (let elemen of newArr){
            let oldRow = document.getElementById(rowCounter);
            if (oldRow) oldRow.remove();
            let i = 0;
            let row = table.insertRow();
            row.setAttribute('id',rowCounter++);
            for (let cell in elemen){
                let newCell = row.insertCell(i++);
                newCell.innerText = elemen[cell];
                newCell.setAttribute('id', cell + i + rowCounter);
                newCell.style.background = 'pink';
            }
        }
        tableArea.append(table);
        
    };
    tableArea.append(table);

};
generateTable(goods);


function sortByParam(name, array){
    let sortingByNums = (a, b) => a[name] - b[name];
    let sortingByLetters = (a, b) => a[name].localeCompare(b[name]);
    if (typeof array[0][name] === 'number') return array.sort(sortingByNums);
    else return array.sort(sortingByLetters);
};


/*Дан чекбокс и текстовый инпут (см. файл form-events.js). 
Если флажок на чекбоксе установлен, то поле доступно для редактирования,
 если снят, то то поле нельзя редиктировать. */

 let check = document.forms.hm.elements.box;
 let text = document.forms.hm.elements.text;
 check.addEventListener('change', changeText);
 function changeText(){
    if(check.checked) {
        text.disabled = false;
    }else if(!check.checked) text.disabled = true;
 };
 /**Необходимо реализовать возможность добавления комментариев к статье. 
  * Пользователь вводит текст в textarea, нажимает 'Добавить', 
  * комментарий появляется в соответствующем блоке. */

  let comment = document.forms.hm.elements.textArea;
  let commentsArea = document.createElement('div');
  console.log(comment.value);
  document.getElementById('commentPlace').append(commentsArea);
  let form = document.forms.hm;
  form.addEventListener('submit', printComent);

  function printComent(event){
      event.preventDefault();
      let newComent = document.createElement('p');
      newComent.style.border = '3px solid #00A086';
      newComent.style.background = '#dbcebe'
      newComent.innerText = comment.value;
      commentsArea.append(newComent);
      document.getElementById('commentPlace').append(commentsArea);
  };

  /*Задача на вывод книг:
 Вывести информацию о товаре: название, автор, количество страниц и поле вида + 0 -, 
 где 0 изначальное количество.
 Нажате на + приводит к увеличению изначального количества (но не больше значения свойства count),
 нажате на - приводит к уменьшению количества (но не меньше 0).
 Если значение свойства count равно 0, кнопки + и - должны быть неактивны.
 Реализовать возможность вводить желаемое количество с клавиаруты, при этом:
     числа превышающие значение свойства count, заменяются  значением свойства count,
     отрицательные числа заменяются 0. */

let books = [
     { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5, count: 10},
     { author: 'Гоголь', title: 'Мертвые души', pageCount: 470, count: 0},
     { author: 'Лермонтов', title: 'Тамань', pageCount: 190, count: 6},
     { author: 'Гончаров', title: 'Обломов', pageCount: 610, count: 2},
     { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191, count: 17},
     { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50, count: 0},
     { author: 'Лермонтов', title: 'Бородино', pageCount: 2, count: 5},
 ];

 let bookCounter = document.forms.books.elements.counter.value;
 let booksOnShelf = 0;
 let bookshelf = document.createElement('div');
 document.getElementById('forBooks').append(bookshelf);
 bookshelf.setAttribute('id', 'bookshelf');
 document.forms.books.addEventListener('submit', nenado);

function nenado(event){
    event.preventDefault();
}
function getCounter(num){
    if (num > books.length) num = books.length;
    else if (num < 0) num = 0;
    return num;
}

function generateBookshelf(event){
     bookCounter = document.forms.books.elements.counter.value;
     bookCounter = getCounter(bookCounter);
     if (event.target.id === 'add' && (booksOnShelf + bookCounter) <= books.length){
        for (let i = 0; i < bookCounter; i++){
            let card = document.createElement('div');
            booksOnShelf++
            for(let elem in books[i]){
                let inf = document.createElement('p');
                inf.innerText = String(elem + ': ' + books[i][elem]);
                card.append(inf);
                
            }
            card.style.border = '3px solid #a0d468';
            card.setAttribute('id',i + 'book')
            bookshelf.append(card);
        };
     } else if (event.target.id === 'remove') {
         for (let i = bookCounter; i > 0; i--){
             let lastBook = document.querySelector('#bookshelf div:last-child');
             lastBook.remove();
             booksOnShelf--;
         }
     };

 };
 let buttons = document.getElementById('buttons');
 
 buttons.addEventListener('click', generateBookshelf);
