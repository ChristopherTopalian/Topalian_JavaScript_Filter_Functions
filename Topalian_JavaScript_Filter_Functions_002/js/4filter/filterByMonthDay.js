// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// filterByMonthDay.js

function filterByMonthDay(whichArray, whichMonth, whichDay)
{
    let result = [];

    for (let z = 0; z < whichArray.length; z++)
    {
        let parts = whichArray[z].date.split(' ');

        let datePart = parts[0];
        
        let month = datePart.substring(5, 7);

        let day = datePart.substring(8, 10);

        if (whichMonth.length === 1)
        {
            whichMonth = '0' + whichMonth;
        }
        if (whichDay.length === 1)
        {
            whichDay = '0' + whichDay;
        }

        if (month === whichMonth && day === whichDay)
        {
            result.push(whichArray[z]);
        }
    }

    return result;
}

