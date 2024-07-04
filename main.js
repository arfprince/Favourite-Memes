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
const apiElements=document.querySelector("#apiElements");
const memeFeed=document.querySelector("#memeFeed");
const memeFeedImg=document.querySelector("#memeFeedImg");
const badResponseMsg=document.querySelector("#badResponseMsg");

const baseUrl="https://api.humorapi.com/memes/search?number=10&api-key=";
let apiKey=localStorage.getItem('apiKey');

// heartBtn.addEventListener("click",()=>{
//     heartBtn.classList.remove("heart");
//     heartBtn.classList.add("heart2");
// });


let startTheme=localStorage.getItem('theme');
if(!startTheme) {
    localStorage.setItem('theme','light');
}else{
    document.documentElement.setAttribute("data-theme", startTheme);
}
function themeChanging() {
    tDark.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='dark'){
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem('theme','dark');
        }
    });
    tDefault.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=="light"){
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem('theme','light');
        }
    });
    tValentine.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='valentine'){
            document.documentElement.setAttribute("data-theme", "valentine");
            localStorage.setItem('theme','valentine');
        }
    });
    tSynthwave.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='synthwave'){
            document.documentElement.setAttribute("data-theme", "synthwave");
            localStorage.setItem('theme','synthwave');
        }
    });
    tRetro.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='retro'){
            document.documentElement.setAttribute("data-theme", "retro");
            localStorage.setItem('theme','retro');
        }
    });
    tCyberpunk.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='cyberpunk'){
            document.documentElement.setAttribute("data-theme", "cyberpunk");
            localStorage.setItem('theme','cyberpunk');
        }
    });
    tAqua.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='aqua'){
            document.documentElement.setAttribute("data-theme", "aqua");
            localStorage.setItem('theme','aqua');
        }
    });
    tForest.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='forest'){
            document.documentElement.setAttribute("data-theme", "forest");
            localStorage.setItem('theme','forest');
        }
    });
    tBlack.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='black'){
            document.documentElement.setAttribute("data-theme", "black");
            localStorage.setItem('theme','black');
        }
    });
    tCoffee.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='coffee'){
            document.documentElement.setAttribute("data-theme", "coffee");
            localStorage.setItem('theme','coffee');
        }
    });
    tDim.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='dim'){
            document.documentElement.setAttribute("data-theme", "dim");
            localStorage.setItem('theme','dim');
        }
    });
    tLemonade.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='lemonade'){
            document.documentElement.setAttribute("data-theme", "lemonade");
            localStorage.setItem('theme','lemonade');
        }
    });

}
themeChanging();

function buildMemesFeed(memes) {
    for(let i=0;i<memes.length;i++)
    {
        console.log(memes[i].url);
        let newSpan=document.createElement("span");
        newSpan.innerHTML=`<img src="${memes[i].url}" alt="" class=" h-80 w-80 rounded-lg hover:scale-x-105 hover:scale-y-105 cursor-pointer">
                  <span class="absolute top-3 right-3">
                    <button id="heartBtn" class="heart"></button>
                  </span>`;
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
        memeFeed.classList.remove("hidden");

        const res = await fetch("/mock/mocked_search_meme_result.json");
        const data = await res.json();
        console.log(data.memes);
        buildMemesFeed(shuffleArray(data.memes));
    }
    else
    {
        saveApiId.addEventListener("click",async ()=>{

            apiKey=document.getElementById("apikey").value;
            const url=`${baseUrl}${apiKey}`;
            try {
                const res = await fetch(url);
                console.log(res.ok);
                if(!res.ok){
                    const errorMsg = await res.json();
                    throw new Error(errorMsg.message);
                }else{
                    const data = await res.json();
                    apiElements.classList.add("hidden");
                    memeFeed.classList.remove("hidden");

                    localStorage.setItem('apiKey', apiKey);
                    localStorage.setItem('memeInfo', JSON.stringify(data));
                    buildMemesFeed(shuffleArray(data.memes));
                }
            } catch (error) {
                badResponseMsg.innerText=error;
                badResponseMsg.classList.remove("hidden");
                localStorage.setItem('errorMessage',error);
            }
        });
    }
}

window.addEventListener("load",()=>{
    randerMemes();
});