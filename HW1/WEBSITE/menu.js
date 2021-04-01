
/* Functions */
const generateMenuButton = (btn) =>
{
    return `<button class=menuBtn onclick="window.location.href='${btn.ref}';">${btn.name}</button>`;
}

const wrapButtons = (buttonsHtml) =>
{
    return `<div class=menuToolBar>${buttonsHtml}</div>`
}

/* Constants */
buttons = 
        [   { name: 'Home Page', ref: 'index.html'},
            { name: 'Raviv', ref: 'raviv.html'},
            { name: 'Lior', ref: 'lior.html'}
        ];

       
/* *************** */
/* HTML Generation */
/* *************** */
menu = document.getElementById('menu')
let menuButtons = buttons.map(b=>generateMenuButton(b)).join('')
menu.insertAdjacentHTML('beforeend', wrapButtons(menuButtons))
