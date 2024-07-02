function findFirstRepeatingCharacter(str) {
    let seenCharacters = new Set(); // Создаем пустое множество для хранения увиденных символов

    for (let char of str) {
        if (seenCharacters.has(char)) {
            return char; // Возвращаем первый повторяющийся символ
        }
        seenCharacters.add(char); // Добавляем символ в множество
    }
    return null; // Если нет повторяющихся символов, возвращаем null
}

let word = "Hello";
let repeatingCharacter = findFirstRepeatingCharacter(word);

if (repeatingCharacter) {
    console.log("Первый повторяющийся символ:", repeatingCharacter);
} else {
    console.log("Повторяющихся символов нет");
}
