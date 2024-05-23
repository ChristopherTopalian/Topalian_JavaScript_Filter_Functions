// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeMenuLeft.js

// makes our menu of buttons using the array of objects named theFunctions

function makeMenuLeft(whichArray)
{
    let nameSpace = 'leftMenu_';

    //-//

    // buttonsContainer
    let buttonsContainer = ce('div');
    buttonsContainer.id = nameSpace + 'buttonsContainer';
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.flexDirection = 'column';
    buttonsContainer.style.overflowY = 'scroll';
    buttonsContainer.style.position = 'fixed';
    buttonsContainer.style.left = '0px';
    buttonsContainer.style.top = '5px';
    buttonsContainer.style.height = '200px';
    ba(buttonsContainer);

    //-//

    let aooLabel = ce('div');
    aooLabel.textContent = 'AOO Menu';
    aooLabel.style.fontSize = '16px';
    aooLabel.style.margin = 'auto';
    buttonsContainer.append(aooLabel);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        // theButton
        let theButton = ce('button');
        theButton.id = nameSpace  + whichArray[x].name;
        theButton.className = 'buttonStyle001';
        theButton.title = whichArray[x].functionName;
        theButton.textContent = whichArray[x].name;
        theButton.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);
        };
        theButton.onclick = function()
        {
            audioPlay('sfx_blip_001', 1.0);

            ge('resultDiv').innerHTML = JSON.stringify(eval(whichArray[x].functionName));
        };
        buttonsContainer.append(theButton);
    }
}

