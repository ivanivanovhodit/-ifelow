// Функция для генерации массива случайных чисел
function generateRandomArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.random()); // Генерация случайного числа в диапазоне [0, 1]
    }
    return array;
}

// Функция для нахождения максимального значения в массиве
function getMaxValue(array) {
    return Math.max(...array);
}

// Функция для нахождения минимального значения в массиве
function getMinValue(array) {
    return Math.min(...array);
}

// Функция для нахождения среднего значения в массиве
function getAverageValue(array) {
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / array.length;
}

// Основная часть программы
let length = 10; // Длина массива
let randomArray = generateRandomArray(length);

let maxValue = getMaxValue(randomArray);
let minValue = getMinValue(randomArray);
let averageValue = getAverageValue(randomArray);

console.log("Массив случайных чисел:", randomArray);
console.log("Максимальное значение:", maxValue);
console.log("Минимальное значение:", minValue);
console.log("Среднее значение:", averageValue);
