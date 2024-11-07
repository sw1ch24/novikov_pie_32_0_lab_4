document.getElementById('btn1').onclick = task1;                      // обработка нажатия на кнопку 
function task1(){
    let inputNumbers = document.getElementById('inputArr1').value;    // обработка инпута
    let K = document.getElementById('inputK').value;
    if (isNaN(K) || K == '' || inputNumbers == '') {             // проверка на неправильный ввод числа
        document.getElementById('outputTask1').innerHTML = '';   // удаление вывода предыдущего вывода скрипта
        alert('Неверный ввод!');                                 
        return;
    } else {
        K = Number(K);                                           // преобразование строки в число
    }
    for (let i = 0; i < inputNumbers.length; i++) {              // проверка на неправильный ввод набора чисел
        if (isNaN(inputNumbers[i])) {
            document.getElementById('outputTask1').innerHTML = '';
            alert('Неверный ввод!');
            return; 
        }  
    }
    let arrNumbers = inputNumbers.split(' ');                    // разбиение строки в массив
    let greaterK = 0;
    for (let i = 0; i < arrNumbers.length; i++) {                // нахождение эл. массива, большего K
        if (arrNumbers[i] > K) {
            greaterK = arrNumbers[i];
        }
    }
    let outputValue = greaterK != 0 ? arrNumbers.indexOf(greaterK) + 1 : 0;    // вывод 0, если нет числа, большего K
    document.getElementById('outputTask1').innerHTML = outputValue;
}
