function getYearFraction(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = date - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var dayOfYear = Math.floor(diff / oneDay);

    var yearFraction = parseInt((dayOfYear / 365.25) * 1000 - 1);

    if (yearFraction < 100) {
        yearFraction = '0' + yearFraction;
        if (yearFraction < 10) {
            yearFraction = '0' + yearFraction;
        }
    }

    return yearFraction;
}

function getImperialDate(date) {
    if (!date instanceof Date) {
        throw Error('Object is not an instance of Date');
    }

    var fullYear = date.getFullYear();
    var year = fullYear % 1000;
    var millenium = parseInt(fullYear / 1000 + 1);

    if (year < 100) {
        year = '0' + year;
    }

    return '0 ' + getYearFraction(date) + ' ' + year + '.M' + millenium;
}

module.exports = getImperialDate;
