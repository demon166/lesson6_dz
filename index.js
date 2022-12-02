// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
function getArrayLengthStrings(array){
    return array.map(item => item.length);
}
// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
function currentSums(numbers){
    const arraySum = [];
    numbers.reduce((acc,current) => {
        let sum = acc + current;
        arraySum.push(sum);
        return sum;
    }, 0)
    return arraySum;
}
// 3. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.
function getFirstLettersOfWords(str) {
    str = str.trim();
    while (str.includes('  ')) {
        str = str.replace('  ', ' ')
    }
    return str.split(' ').map(word => word[0]);
}
// 4. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений
function sortByDesk(array) {
    return array.sort((a,b) => b-a)
}
// 5. Напишите код, объединяющий любое количество массивов цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.
function concatArrayAndSortByDesk(...array) {
    const arrayNew = [];
    array = [].concat(...array);
    sortByDesk(array);
    array.forEach(item => arrayNew.push(item, ' '));
    arrayNew.length = arrayNew.length - 1
    return arrayNew;
}
// 6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
function deepArraySum(array) {
    return [].concat(...array).reduce((acc, current )=>  acc + current, 0);
}
// 7. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
function reverseArray(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length -1-i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше number.
function getCountElementForSumMoreNumber(array, number) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += +array[i];
        if (sum > number){
            return i + 1;
        }
    }
}
// 9. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill(placeholder, count) {
    const array = new Array(count);
    return array.fill(placeholder);
}
module.exports = {
    reverseArray,
    arrayFill,
    concatArrayAndSortByDesk,
    getCountElementForSumMoreNumber,
    deepArraySum,
    sortByDesk,
    getFirstLettersOfWords,
    currentSums,
    getArrayLengthStrings,
};
