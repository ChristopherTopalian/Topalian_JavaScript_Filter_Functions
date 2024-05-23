// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeTitleOfApp.js

function makeTitleOfApp()
{
    // titleContainer
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '10px';
    titleContainer.style.bottom = titleContainer.style.bottom = '4px';
    titleContainer.style.zIndex = 1;
    ba(titleContainer);

    //-//

    // titleOfApp
    let titleOfApp = ce('div');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.innerHTML =
    `<a href = 'https://github.com/christophertopalian/topalian_javascript_filter_functions' target = '_blank'> Topalian JavaScript Filter Functions </a>`;
    titleOfApp.style.fontSize = '17px';
    titleContainer.append(titleOfApp);
}

