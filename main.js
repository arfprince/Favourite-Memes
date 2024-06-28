import './style.css';

const tDark = document.querySelector("#dark");
const tDefault = document.querySelector("#default");
const tDracula = document.querySelector("#dracula");
const tWarm = document.querySelector("#warm");
const tCool = document.querySelector("#cool");
const tHighContrast = document.querySelector("#highContrast");
const tPastel = document.querySelector("#pastel");
const tForest = document.querySelector("#forest");
const tOcean = document.querySelector("#ocean");
const tAutumn = document.querySelector("#autumn");
const tSolarizedNight= document.querySelector("#solarizedNight");
const body = document.querySelector("body");

const themeState = {
    default: "bg-white",
    dark: "bg-grey-900",
    dracula: "bg-red-950",
    warm: "bg-yellow-100",
    cool: "bg-blue-100",
    highContrast: "bg-black",
    pastel: "bg-pink-100",
    forest: "bg-[#22311D]",
    ocean: "bg-[#259faf]",
    autumn: "bg-orange-100",
    solarizedNight: "bg-[#000035]"
};
body.classList.remove(body.classList.item(0))
const startTheme=localStorage.getItem('theme');
console.log(startTheme);
body.classList.add(`${themeState[startTheme]}`);

themeChanging();
function themeChanging() {
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
    tWarm.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='warm'){
            body.classList.add(`${themeState['warm']}`);
            body.classList.remove(`${themeState[curTheme]}`);
            localStorage.setItem('theme','warm');
        }
    });
    tCool.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='cool'){
            body.classList.add(`${themeState['cool']}`);
            body.classList.remove(`${themeState[curTheme]}`);
            localStorage.setItem('theme','cool');
        }
    });
    tHighContrast.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='highContrast'){
            body.classList.add(`${themeState['highContrast']}`);
            body.classList.remove(`${themeState[curTheme]}`);
            localStorage.setItem('theme','highContrast');
        }
    });
    tPastel.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='pastel'){
            body.classList.add(`${themeState['pastel']}`);
            body.classList.remove(`${themeState[curTheme]}`);
            localStorage.setItem('theme','pastel');
        }
    });
    tForest.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='forest'){
            body.classList.add(`${themeState['forest']}`);
            body.classList.remove(`${themeState[curTheme]}`);
            localStorage.setItem('theme','forest');
        }
    });
    tOcean.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='ocean'){
            body.classList.add(`${themeState['ocean']}`);
            body.classList.remove(`${themeState[curTheme]}`);
            localStorage.setItem('theme','ocean');
        }
    });
    tAutumn.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='autumn'){
            body.classList.add(`${themeState['autumn']}`);
            body.classList.remove(`${themeState[curTheme]}`);
            localStorage.setItem('theme','autumn');
        }
    });
    tSolarizedNight.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='solarizedNight'){
            body.classList.add(`${themeState['solarizedNight']}`);
            body.classList.remove(`${themeState[curTheme]}`);
            localStorage.setItem('theme','solarizedNight');
        }
    });

}