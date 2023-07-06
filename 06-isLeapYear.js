// function isLeapYear(year) {
//     const remainder = year % 4;
//     if (remainder === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isLeapYear(year) {
    // const remainder = year % 4;
    // if (remainder === 0) {
    //     return true;
    // }
    // return false;


    // / If a year is multiple of 400, 
    // then it is a leap year 
    if (year % 400 == 0)
        return true;

    // Else If a year is multiple of 100, 
    // then it is not a leap year 
    if (year % 100 == 0)
        return false;

    // Else If a year is multiple of 4, 
    // then it is a leap year 
    if (year % 4 == 0)
        return true;

    return false;
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear)

const isHirYearLeapYear = isLeapYear(1900);
console.log('Her year:', isHirYearLeapYear)