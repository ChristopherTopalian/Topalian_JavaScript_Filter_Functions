// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// filterByYearMonth.js

function filterByYearMonth(whichArray, whichYearMonth)
{
    let result = [];

    for (let z = 0; z < whichArray.length; z++)
    {
        if (whichArray[z].date.startsWith(whichYearMonth))
        {
            result.push(whichArray[z]);
        }
    }

    return result;
}

