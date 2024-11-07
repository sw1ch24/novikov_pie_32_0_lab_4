document.getElementById('btn2').onclick = task2;                // обработка нажатия на кнопку
function task2(){
    let A = document.getElementById('inputA').value;            // обработка инпута чисел
    let N = document.getElementById('inputN').value;
    if (isNaN(A) || A =='' || isNaN(N) || N =='') {
        document.getElementById('outputTask2').innerHTML = '';  // удаление вывода предыдущего вывода скрипта
        alert('Неверный ввод!');                                // проверка на неправильный ввод
        return;
    } else {
        A = parseFloat(A);                                      // преобразование строки в вещественное число
        N = Number(N);                                          // преобразование строки в число
    }
    AInDegree = A;
    for (let i = 1; i < N; i++) {                               // расчет A**N
        AInDegree *= A
    }
    let outputValue = AInDegree.toFixed(2)                      // округление с целью избежания неточностей
    document.getElementById('outputTask2').innerHTML = outputValue;            // вывод результата              
}
