import './style.css';

const tDark = document.querySelector("#dark");
const tDefault = document.querySelector("#default");
const tDracula = document.querySelector("#dracula");
const body = document.querySelector("body");

const themeState = {
    default: "bg-white",
    dark: "bg-black",
    dracula: "bg-red-900",
};
body.classList.remove(body.classList.item(0))
const startTheme=localStorage.getItem('theme');
console.log(startTheme);
body.classList.add(`${themeState[startTheme]}`);

tDark.addEventListener("click", () => {
    const curTheme=localStorage.getItem('theme');
    if(curTheme!=='dark'){
        body.classList.add(`${themeState['dark']}`);
        body.classList.remove(`${themeState[curTheme]}`);
        localStorage.setItem('theme','dark');
    }
    
});
tDefault.addEventListener("click", () => {
    const curTheme=localStorage.getItem('theme');
    if(curTheme!=='default'){
        body.classList.add(`${themeState['default']}`);
        body.classList.remove(`${themeState[curTheme]}`);
        localStorage.setItem('theme','default');
    }
});
tDracula.addEventListener("click", () => {
    const curTheme=localStorage.getItem('theme');
    if(curTheme!=='dracula'){
        body.classList.add(`${themeState['dracula']}`);
        body.classList.remove(`${themeState[curTheme]}`);
        localStorage.setItem('theme','dracula');
    }
});
