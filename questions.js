const selectElementsStartingWithA = function(array) {
    return [...array.filter(value => value.match('^[a/i].*'))]
}

const selectElementsStartingWithVowel = function(array) {
    return [...array.filter(value => value.match('^[aieou/i].*'))]
}

const removeNullElements = function(array) {
    return [...array.filter(value => ![null].includes(value))]
}

const removeNullAndFalseElements = function(array) {
    return [...array.filter(value => ![null, false].includes(value))]
}

const revStr = (string) => string.split("").reverse().join("")

const reverseWordsInArray = function(array) {
    return [...array.map(value => revStr(value))]
}

const everyPossiblePair = function(array) {
    return [...array.flatMap(
      (value, index) => array.slice(index + 1).map(word => [value, word].sort())
    ).sort()]
}

const allElementsExceptFirstThree = function(array) {
    return [...array.slice(3)]
}

const addElementToBeginning = function(array, element) {
    return [element, ...array]
}

const sortByLastLetter = function(array) {
    return [...array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))]
}

const getFirstHalf = function(string) {
    return string.slice(0, Math.ceil(string.length / 2))
}

const makeNegative = function(number) {
    return number > 0 ? -number : number
}

const numberOfPalindromes = function(array) {
    return (array.filter(value => value === revStr(value))).length
}

const shortestWord = function(array) {
    return array.reduce((prev, curr) => curr.length < prev.length ? curr : prev)
}

const longestWord = function(array) {
    return array.reduce((prev, curr) => curr.length > prev.length ? curr : prev)
}

const sumNumbers = function(array) {
    return array.reduce((prev, curr) => prev + curr)
}

const repeatElements = function(array) {
    return [...array, ...array]
}

const stringToNumber = function(string) {
    return parseInt(string)
}

const calculateAverage = function(array) {
    return array.reduce((prev, curr) => prev + curr) / array.length
}

const getElementsUntilGreaterThanFive = function(array) {
    return [...array.slice(0, array.findIndex(value => value > 5))]
}

const convertArrayToObject = function(array) {
    const object = {}
    array.forEach((value, index) => {
        if (index % 2 === 0)
            object[value] = array[index + 1]
    })
    return object
}

const getAllLetters = function(array) {
    return [...new Set(array.map(value => value.split("")).flatMap(x => x).sort())]
}

const swapKeysAndValues = function(object) {
    const newObj = {}
    Object.keys(object).forEach(key => newObj[object[key]] = key)
    return newObj
}

const sumKeysAndValues = function(object) {
    let count = 0
    Object.keys(object).forEach(key => count += parseInt(object[key]) + parseInt(key))
    return count
}

const removeCapitals = function(string) {
    return string.split('').filter(value => value !== value.toUpperCase() | value === ' ').join('')
}

const roundUp = function(number) {
    return Math.ceil(number)
}

const formatDateNicely = function(date) {
    return date.toLocaleDateString('fr-FR')
}

const getDomainName = function(string) {
    return string.match('(?<=@)[^.]*.[^.]*(?=\\.)')[0]
}

const titleize = function(string) {
    string = string.split(' ').map(value => value.length > 3 ? value.charAt(0).toUpperCase() + value.slice(1) : value).join(' ')
    string = string.split('. ').map(value => value.charAt(0).toUpperCase() + value.slice(1)).join('. ')
    return string
}

const checkForSpecialCharacters = function(string) {
    const regex = /\W|_/g
    return regex.test(string)
}

const squareRoot = function(number) {
    return Math.sqrt(number)
}

const factorial = function(number) {
    if (number < 0)
        return -1;
    else if (number === 0)
        return 1;
    else {
        return (number * factorial(number - 1));
    }
}

const findAnagrams = function(string) {
    if (string.length < 2) {
        return [string];
    }
    const anagrams = [];
    let before, current, after;
    let shortWord, subAnagrams, newEntry;

    for (let i = 0; i < string.length; i++) {
        before = string.slice(0, i);
        current = string[i];
        after = string.slice(i + 1, string.length + 1);
        shortWord = before + after;
        subAnagrams = findAnagrams(shortWord);

        for (let j = 0; j < subAnagrams.length; j++){
            newEntry = current + subAnagrams[j];
            anagrams.push(newEntry);
        }
    }
    return anagrams;
}

const convertToCelsius = function(number) {
    return Math.ceil((number - 32) * 5 / 9)
}

const letterPosition = function(array) {
    return [...array].map(a => parseInt(a, 36) - 9).filter(a => a >= 0)
}
