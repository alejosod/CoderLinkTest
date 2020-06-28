/**
 * Function that returns the number of the pokemon  with the next signature
 * #000
 * @param number { number } - pokemon id
 * @return { string } - formated pokemon number
 */
export default (number) => {

    const stringNumber = number.toString()
    const fillString = new Array(3 - stringNumber.length).fill('0').join('')

    return '#' +  fillString + stringNumber;
}
