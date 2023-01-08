function generate(){
    let array = new Array();

    clearResult();

    for (let i = 0; i < 10; i++){
        array.push(getRandomIntInclusive(-10, 10));
    }
    printResult(`Сгенерировали: ${array.join(' ')}`);

    let min = Math.min.apply(null, array);
    printResult(`Минимальное: ${min}`);

    let max = Math.max.apply(null, array);
    printResult(`Максимальное: ${max}`);

    let average = findAverage(array);
    printResult(`Среднее арифметическое: ${average}`);

    let sum = getSum(array);
    printResult(`Сумма чисел: ${sum}`);

    let multiplication = getMultiplication(array);
    printResult(`Произведение чисел: ${multiplication}`);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  function findAverage(array){
    let sum = getSum(array);
    result = sum / array.length;
    return result;
  }

  function getSum(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
  }

  function getMultiplication(array){
    let result = 1;
    array.forEach(element => {
        result *= element;
    });
    return result;
  }

  function printResult(str){
    let resultContainer = document.querySelector(".result");
    let text = document.createElement("p");
    text.classList.add(".label");
    text.innerHTML = str;
    resultContainer.appendChild(text);
  }

  function clearResult(){
    let resultContainer = document.querySelector(".result");
    resultContainer.innerHTML = '';
  }

document.querySelector(".button").addEventListener("click", generate);