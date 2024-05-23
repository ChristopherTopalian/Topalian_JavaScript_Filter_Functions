// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// filterByName.js

function filterByName(whichArray, whichName)
{
    let result = [];

    for (let z = 0; z < whichArray.length; z++)
    {
        if (whichArray[z].name === whichName)
        {
            result.push(whichArray[z]);
        }
    }

    return result;
}

