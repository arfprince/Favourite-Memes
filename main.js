import './style.css';

const tDark = document.querySelector("#dark");
const tDefault = document.querySelector("#default");
const tValentine = document.querySelector("#valentine");
const tSynthwave = document.querySelector("#synthwave");
const tRetro = document.querySelector("#retro");
const tCyberpunk = document.querySelector("#cyberpunk");
const tAqua = document.querySelector("#aqua");
const tForest = document.querySelector("#forest");
const tBlack = document.querySelector("#black");
const tCoffee = document.querySelector("#coffee");
const tDim = document.querySelector("#dim");
const tLemonade = document.querySelector("#lemonade");
const saveApiId=document.querySelector("#saveApiId");
const setApiId=document.querySelector("#setApiId");
const apiElements=document.querySelector("#apiElements");
const memeFeed=document.querySelector("#memeFeed");
const memeFeedImg=document.querySelector("#memeFeedImg");
const badResponseMsg=document.querySelector("#badResponseMsg");
const savedMemeCollection=document.querySelector("#savedMemeCollection");
const savedMemeCollectionInSideBar=document.querySelector("#savedMemeCollectionInSideBar");
const searchMemes=document.querySelector("#searchMemes");
const searchIcon=document.querySelector("#searchIcon");
const warningMsg=document.querySelector("#warningMsg");

const baseUrl="https://api.humorapi.com/memes/search?number=10&api-key=";
let apiKey=localStorage.getItem('apiKey');
let savedMemes=localStorage.getItem('savedMemes');
// let startTheme=localStorage.getItem('theme');
let startTheme=(
    new URL(document.location.href).searchParams.get("theme") ??
    localStorage.getItem("theme") ??
    "light"
)
let demo = (
    new URL(document.location.href).searchParams.get("demo") ??
    localStorage.getItem("demo") ??
    "false"
)
console.log(startTheme);
console.log(demo);
const setTheme = (theme) =>{
    startTheme=theme;
    document.documentElement.setAttribute("data-theme", startTheme);
    const sp= new URLSearchParams();
    sp.set("demo", localStorage.getItem("demo"));
    sp.set("theme", startTheme);
    const newUrl = `${document.location.origin}?${sp}`;
    window.history.replaceState({},"",newUrl);
    localStorage.setItem("theme",theme);
};
setTheme(startTheme);
const setDemo = (demo) => {
    demo=demo;
    if(demo==='true'){
        localStorage.setItem('apiKey', "nan");
        localStorage.removeItem("savedMemes");
    }
    const sp = new URLSearchParams();
    sp.set("demo", demo);
    sp.set("theme", localStorage.getItem('theme'));
    const newUrl = `${document.location.origin}?${sp.toString()}`;
    window.history.replaceState({}, "", newUrl);
    localStorage.setItem('demo',demo);
};
setDemo(demo);

// function urlChange(theme) {
//     const siteUrl = new URL(window.location);  
//     siteUrl.searchParams.set('theme', theme);
//     window.history.replaceState({}, '', siteUrl);
// }
// if(!startTheme) {
//     localStorage.setItem('theme','light');
//     urlChange('light');
// }else{
//     document.documentElement.setAttribute("data-theme", startTheme);
//     urlChange(startTheme);
// }

function themeChanging() {
    tDark.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='dark'){
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem('theme','dark');
            setTheme("dark");
        }
    });
    tDefault.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=="light"){
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem('theme','light');
            setTheme("light");
        }
    });
    tValentine.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='valentine'){
            document.documentElement.setAttribute("data-theme", "valentine");
            localStorage.setItem('theme','valentine');
            setTheme("valentine");

        }
    });
    tSynthwave.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='synthwave'){
            document.documentElement.setAttribute("data-theme", "synthwave");
            localStorage.setItem('theme','synthwave');
            setTheme('synthwave');
        }
    });
    tRetro.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='retro'){
            document.documentElement.setAttribute("data-theme", "retro");
            localStorage.setItem('theme','retro');
            setTheme('retro');
        }
    });
    tCyberpunk.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='cyberpunk'){
            document.documentElement.setAttribute("data-theme", "cyberpunk");
            localStorage.setItem('theme','cyberpunk');
            setTheme('cyberpunk');
        }
    });
    tAqua.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='aqua'){
            document.documentElement.setAttribute("data-theme", "aqua");
            localStorage.setItem('theme','aqua');
            setTheme('aqua');
        }
    });
    tForest.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='forest'){
            document.documentElement.setAttribute("data-theme", "forest");
            localStorage.setItem('theme','forest');
            setTheme('forest');
        }
    });
    tBlack.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='black'){
            document.documentElement.setAttribute("data-theme", "black");
            localStorage.setItem('theme','black');
            setTheme('black');
        }
    });
    tCoffee.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='coffee'){
            document.documentElement.setAttribute("data-theme", "coffee");
            localStorage.setItem('theme','coffee');
            setTheme('coffee');
        }
    });
    tDim.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='dim'){
            document.documentElement.setAttribute("data-theme", "dim");
            localStorage.setItem('theme','dim');
            setTheme('dim');
        }
    });
    tLemonade.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='lemonade'){
            document.documentElement.setAttribute("data-theme", "lemonade");
            localStorage.setItem('theme','lemonade');
            setTheme('lemonade');
        }
    });

}
themeChanging();

function displayAllSavedMemes(savesMemes){
    savedMemeCollection.innerHTML="";
    savedMemeCollectionInSideBar.innerHTML="";
    for (let id in savedMemes) {
        if (savedMemes.hasOwnProperty(id)) {
            const meme = savedMemes[id];
            
            const newSpan=document.createElement("span");
            newSpan.innerHTML=`<div class="flex items-center justify-center gap-5">
                <img class="h-10 w-10" src="${meme.url}" alt="">
                <p>${meme.description}</p>
            </div>`;
            savedMemeCollection.appendChild(newSpan);

            const listItem=document.createElement("li");
            listItem.innerHTML=`<div class="flex items-center justify-center gap-3">
            <img class="h-10 w-10" src="${meme.url}" alt="">
            <p>${meme.description}</p>
            </div>`;
            savedMemeCollectionInSideBar.appendChild(listItem);
        }
    }
}
if(!savedMemes){
    savedMemes = {};
}else{
    savedMemes=JSON.parse(savedMemes);
    displayAllSavedMemes(savedMemes);
}

function buildMemesFeed(memes) {
    for (let i = 0; i < memes.length; i++) {
        let newSpan = document.createElement("div");
        let memei = memes[i];
        let img = document.createElement("img");
        img.alt = "";
        img.src = memei.url;
        img.className = "h-80 w-80 rounded-lg hover:scale-x-105 hover:scale-y-105 cursor-pointer";
        newSpan.appendChild(img);

        let favouriteBtn = document.createElement("span");
        favouriteBtn.id = "favouriteBtn";
        favouriteBtn.className = "absolute top-4 right-4";
        const button = document.createElement("button");
        button.classList.add("heart");
        favouriteBtn.appendChild(button);
        newSpan.appendChild(favouriteBtn);

        button.addEventListener("click", () => {
            button.classList.remove("heart");
            button.classList.add("heart2");

            if (!savedMemes[memes[i].id]) {
                const favouriteMemeSaveModalActiveBtn = document.querySelector("#favouriteMemeSaveModalActiveBtn");
                const favouriteMemeSaveModal = document.querySelector("#favouriteMemeSaveModal");
                const favouriteMemeSaveBtn = document.querySelector("#favouriteMemeSaveBtn");
                const favouriteMemeSaveInput = document.querySelector("#favouriteMemeSaveInput");
                const favouriteMemeSaveModalCloseBtn = document.querySelector("#favouriteMemeSaveModalCloseBtn");

                favouriteMemeSaveModalActiveBtn.click();
                
                const saveMemeHandler = () => {
                    
                    let name = favouriteMemeSaveInput.value;
                    savedMemes[memes[i].id] = {
                        url: memes[i].url,
                        description: name ? name : memes[i].description
                    };

                    localStorage.setItem('savedMemes', JSON.stringify(savedMemes));
                    displayAllSavedMemes(savedMemes);

                    favouriteMemeSaveModalCloseBtn.click();
                    my_modal_5.close();

                    favouriteMemeSaveBtn.removeEventListener("click", saveMemeHandler);
                };
                
                favouriteMemeSaveBtn.addEventListener("click", saveMemeHandler);
            }
        });

        newSpan.classList.add("relative");
        memeFeedImg.appendChild(newSpan);
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
 }
async function randerMemes() {
    if(apiKey)
    {
        apiElements.classList.add("hidden");
        my_modal_3.close();
        memeFeed.classList.remove("hidden");

        const res = await fetch("/mock/mocked_search_meme_result.json");
        const data = await res.json();
        buildMemesFeed(shuffleArray(data.memes));
    }
    else
    {
        saveApiId.addEventListener("click",async ()=>{

            apiKey=document.getElementById("apikey").value;
            const url=`${baseUrl}${apiKey}`;
            try {
                const res = await fetch(url);
                if(!res.ok){
                    const errorMsg = await res.json();
                    throw new Error(errorMsg.message);
                }else{
                    const data = await res.json();
                    apiElements.classList.add("hidden");
                    my_modal_3.close();
                    memeFeed.classList.remove("hidden");

                    localStorage.setItem('apiKey', apiKey);
                    localStorage.setItem('memeInfo', JSON.stringify(data));
                    buildMemesFeed(([...data.memes]));
                }
            } catch (error) {
                badResponseMsg.innerText=error;
                badResponseMsg.classList.remove("hidden");
                localStorage.setItem('errorMessage',error);
            }
        });
    }
}

let typingTimer;
searchMemes.addEventListener("input",(e)=>{

    searchIcon.classList.add("hidden");
    clearTimeout(typingTimer);
    typingTimer = setTimeout(()=>{
        if(e.target.value.length<1){
            searchIcon.classList.remove("hidden");
        }else if(e.target.value.length>1 && e.target.value.length<101){
            if(!apiKey){
                setApiId.click();
            }
            warningMsg.classList.add("hidden");
        }else if(e.target.value.length<2){
            warningMsg.innerText="at least 2 characters required";
            warningMsg.classList.remove("hidden");
        }else{
            warningMsg.innerText="at most 100 characters";
            warningMsg.classList.remove("hidden");
        }

    }, "1000");
});

window.addEventListener("load",()=>{
    randerMemes();
});