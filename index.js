// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
function getArrayLengthStrings(array){

}
// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
function currentSums(numbers){

}
// 3. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.
function getFirstLettersOfWords(str) {

}
// 4. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений
function sortByDesk(array) {

}
// 5. Напишите код, объединяющий любое количество массивов цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.
function concatArrayAndSortByDesk(...array) {

}
// 6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
function deepArraySum(array) {

}
// 7. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
function reverseArray(array) {

}
// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше number.
function getCountElementForSumMoreNumber(array, number) {

}
// 9. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill(placeholder, count) {

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
