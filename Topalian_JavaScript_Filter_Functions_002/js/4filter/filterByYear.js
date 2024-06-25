// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// filterByYear.js

function filterByYear(whichArray, whichYear)
{
    let result = [];

    for (let z = 0; z < whichArray.length; z++)
    {
        if (whichArray[z].date.startsWith(whichYear))
        {
            result.push(whichArray[z]);
        }
    }

    return result;
}

