// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// filterBeforeDate.js

function filterBeforeDate(whichArray, whichDate)
{
    let result = [];

    for (let z = 0; z < whichArray.length; z++)
    {
        if (people[z].date < whichDate)
        {
            result.push(whichArray[z]);
        }
    }

    return result;
}

