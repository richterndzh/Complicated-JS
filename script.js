//Через if
let lang = prompt("Введите значние 'ru' или 'en'");
if (lang == 'ru') {
  let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  alert(arr);
} else if (lang == 'en') {
  let arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
  alert(arr);
}

// Через switch
let lang1 = prompt("Введите значние 'ru' или 'en'");
switch (lang1){
  case 'ru':
    let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    alert(arr1);
  break;
  case 'en':
    let arr01 = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    alert(arr01);
  break;
}

//Через многомерный массив
let lang2 =prompt("Введите значние 'ru' или 'en'");
let arr2 = {
  'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr2[lang2]);

//Задача вторая с тернарными операторами
const namePerson = prompt('Введите имя');

let result = namePerson === "Артем" ? "Директор" : namePerson === "Александр" ? "Преподаватель" : "Студент";
//let result = namePerson === "Александр" ? "Преподаватель" : "Данных нет";
//let result = namePerson === namePerson ? "Студент" : "Данных нет";
console.log(result);
// console.log(result1);
// console.log(result2);