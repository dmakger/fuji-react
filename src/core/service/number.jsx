const MILLION = 'M'
const THOUSAND = 'K'

/**
 * Вернет округленное число (12 => 12), (1234 => 1), (1234567 => 1)
 * */
const getInteger = (numberString) => {
    if (numberString.length > 6)
        return numberString.slice(0, -6)
    else if (numberString.length > 3)
        return numberString.slice(0, -3)
    return numberString
}

/**
 * Вернет округленное число после точки (12 => ), (1234 => 2), (1234567 => 2)
 * */
const getFloat = (numberString, symbol=1) => {
    if (symbol === 0 && numberString.length < 4)
        return ''
    if (numberString.length > 6)
        return numberString.slice(-7, -7 + symbol)
    // else if (numberString.length >= 3)
    return numberString.slice(-3, -3 + symbol)
}

/**
 * Вернет символ числа (M - миллион, K - тысяча)
 * */
const getSymbol = (numberString) => {
    if (numberString.length > 6)
        return MILLION
    else if (numberString.length > 3)
        return THOUSAND
    return ''
}

/**
 * Вернет готовое число:
 * 1. Имеет префикс M - миллион или K - тысяча
 * 2. Имеет точку, если длина числа равна 4 или 7
 * */
export const getNumber = (number) => {
    const numberString = number.toString()
    const integer = getInteger(numberString)
    const float = getFloat(numberString)
    const symbol = getSymbol(numberString)
    if (integer < 3 && float.length > 0) {
        return `${integer}.${float}${symbol}`
    }
    return `${integer}${symbol}`
}