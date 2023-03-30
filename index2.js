
let str = prompt("Введите фразу, к примеру", "роза упала на ЛАПУ АЗОРА");
// let str = "роза упала на ЛАПУ АЗОРА";


// let re = /\s*;\s*/;

let arr = str.split(" ");
let arr2 = str.split("");

// console.log(arr2);
// добаыляем на сайт фразу что ввели, чтобы видеть изменения
const enter = document.querySelector(".enter");
let p = document.createElement("p")
p.innerHTML = str;
enter.appendChild(p);



const list = document.querySelector(".list");

// for (const word of arr) {
//     let li = document.createElement("li");
//     // console.log(typeof(word));
//     li.innerHTML = word;
//     // console.log(li);
//     list.appendChild(li);
// }

// Запросите у пользователя ввести какую - то фразу. 
// Отобразите каждое отдельное слово в виде списка ul li. 
// Также отобразите первое слово UPPERCASE, а последние 2 с маленькой. 
// Найдите все буквы "а" их количество в модальное окно.

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
        let li = document.createElement("li");
        li.innerHTML = arr[i].toUpperCase();
        list.appendChild(li);
        // console.log(arr[i].toUpperCase())
    }
    else if (arr[i] === arr[arr.length - 2] || arr[i] === arr[arr.length - 1]) { let li = document.createElement("li");
        li.innerHTML = arr[i].toLowerCase();
        list.appendChild(li); } else  {let li = document.createElement("li");
        li.innerHTML = arr[i];
        list.appendChild(li);}
    
}


let counter = 0;
for (const leterA of arr2) {
    if (leterA === 'а' || leterA === 'А') {
        counter++;
    }    
}

alert(`В вашей фразе "${str}" всего ${counter} букв "A"`);
// let li = document.querySelector("li");
// console.log(li.value);

// if (li !== " ") { alert(`В вашей фразе "${str}" всего ${counter} букв "A"`); }
// let alert = alert(`В вашей фразе "${str}" всего ${counter} букв "A"`);


   



