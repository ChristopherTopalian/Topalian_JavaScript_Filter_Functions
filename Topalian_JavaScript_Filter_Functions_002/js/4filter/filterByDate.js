// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// filterByDate.js

function filterByDate(whichArray, whichDate)
{
    let result = [];

    for (let z = 0; z < whichArray.length; z++)
    {
        let parts = whichArray[z].date.split(' ');

        if (parts[0] === whichDate)
        {
            result.push(whichArray[z]);
        }
    }

    return result;
}

