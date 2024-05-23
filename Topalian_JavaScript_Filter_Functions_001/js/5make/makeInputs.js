// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeInputs.js

function makeInputs(whichArray)
{
    // inputContainer
    let inputContainer = ce('div');
    inputContainer.id = 'inputContainer';
    inputContainer.className = 'inputContainer';
    inputContainer.style.position = 'fixed';
    inputContainer.style.left = '10px';
    inputContainer.style.top = ge('resultDiv').getBoundingClientRect().bottom + 20 + 'px';
    inputContainer.style.height = '100px';
    inputContainer.style.overflowY = 'scroll';
    inputContainer.style.zIndex = 2;
    ba(inputContainer);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theInput = ce('input');
        theInput.id = whichArray[x].name;
        theInput.value = whichArray[x].functionName;
        theInput.onkeyup = function()
        {
            audioPlay('sfx_blip_001', 1.0);

            ge('resultDiv').innerHTML = JSON.stringify(eval(theInput.value));
        };
        theInput.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);
        };
        theInput.onclick = function()
        {
            audioPlay('sfx_blip_001', 1.0);

            ge('resultDiv').innerHTML = JSON.stringify(eval(theInput.value));
        };
        inputContainer.append(theInput);
    }
}

