let someData = prompt('Введите данные');

function myFunc(messageOutput) {
  if (typeof messageOutput !== "string") {
    console.log("Не строка");
  } else {
    someData = someData.trim();
    let sliced = someData.slice(0, 30);
    if (sliced.length < someData.length) {
      return (sliced += "...");
    }
    console.log(sliced);
  }
}
console.log(myFunc(someData));