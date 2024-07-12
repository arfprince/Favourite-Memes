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
const searchMemesName=document.querySelector("#searchMemesName");
const floating = document.querySelector("#floating");

const baseUrl="https://api.humorapi.com/memes/search?number=10&api-key=";
let apiKey=localStorage.getItem('apiKey');
let savedMemes=localStorage.getItem('savedMemes');

async function getMockData() {
    const res = await fetch("/mock/mocked_search_meme_result.json");
    const data = await res.json();
    return await data.memes;
}

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

function themeBtnTrack(crnt) {
    if(crnt==='light') crnt ='default';
    if(document.querySelector(`#${localStorage.getItem('theme')}`))
        document.querySelector(`#${localStorage.getItem('theme')}`).classList.remove("bg-orange-300");
    localStorage.setItem('theme',crnt);
    document.querySelector(`#${localStorage.getItem('theme')}`).classList.add("bg-orange-300");
}
themeBtnTrack(startTheme);
function themeChanging() {
    tDark.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='dark'){
            document.documentElement.setAttribute("data-theme", "dark");
            setTheme("dark");
            themeBtnTrack('dark');
        }
    });
    tDefault.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=="light"){
            document.documentElement.setAttribute("data-theme", "light");
            themeBtnTrack('light');
            setTheme("light");
        }
    });
    tValentine.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='valentine'){
            document.documentElement.setAttribute("data-theme", "valentine");
            themeBtnTrack('valentine');
            setTheme("valentine");

        }
    });
    tSynthwave.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='synthwave'){
            document.documentElement.setAttribute("data-theme", "synthwave");
            themeBtnTrack('synthwave');
            setTheme('synthwave');
        }
    });
    tRetro.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='retro'){
            document.documentElement.setAttribute("data-theme", "retro");
            themeBtnTrack('retro');
            setTheme('retro');
        }
    });
    tCyberpunk.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='cyberpunk'){
            document.documentElement.setAttribute("data-theme", "cyberpunk");
            themeBtnTrack('cyberpunk');
            setTheme('cyberpunk');
        }
    });
    tAqua.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='aqua'){
            document.documentElement.setAttribute("data-theme", "aqua");
            themeBtnTrack('aqua');
            setTheme('aqua');
        }
    });
    tForest.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='forest'){
            document.documentElement.setAttribute("data-theme", "forest");
            themeBtnTrack('forest');
            setTheme('forest');
        }
    });
    tBlack.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='black'){
            document.documentElement.setAttribute("data-theme", "black");
            themeBtnTrack('black');
            setTheme('black');
        }
    });
    tCoffee.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='coffee'){
            document.documentElement.setAttribute("data-theme", "coffee");
            themeBtnTrack('coffee');
            setTheme('coffee');
        }
    });
    tDim.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='dim'){
            document.documentElement.setAttribute("data-theme", "dim");
            themeBtnTrack('dim');
            setTheme('dim');
        }
    });
    tLemonade.addEventListener("click", () => {
        const curTheme=localStorage.getItem('theme');
        if(curTheme!=='lemonade'){
            document.documentElement.setAttribute("data-theme", "lemonade");
            themeBtnTrack('lemonade');
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
                <img class="h-10 w-10 hover:scale-150" src="${meme.url}" alt="">
                <a href="${meme.url}" target="_blank" class="underline decoration-sky-700 hover:decoration-wavy underline-offset-4 decoration-2">${meme.description}</a>
            </div>`;
            savedMemeCollection.appendChild(newSpan);

            const listItem=document.createElement("li");
            listItem.innerHTML=`<div class="flex items-center justify-center gap-3">
            <img class="h-10 w-10 hover:scale-150" src="${meme.url}" alt="">
            <a href="${meme.url}" target="_blank" class="underline decoration-sky-700 hover:decoration-wavy underline-offset-4 decoration-2">${meme.description}</a>
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
        const memes=await getMockData();
        floating.classList.remove("hidden");
        searchMemesName.innerText=``;
        setTimeout(()=>{
            searchMemesName.innerText=`Meme Feed ...`;
            floating.classList.add("hidden");
            buildMemesFeed(shuffleArray(memes));
        }, "800");
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
                    
                    searchMemesName.innerText=``;
                    floating.classList.remove("hidden");
                    setTimeout(()=>{
                        floating.classList.add("hidden");
                        searchMemesName.innerText=`Meme Feed ...`;
                        buildMemesFeed(([...data.memes]));
                    }, "1200");
                }
            } catch (error) {
                badResponseMsg.innerText=error;
                badResponseMsg.classList.remove("hidden");
                localStorage.setItem('errorMessage',error);
            }
        });
    }
}

async function showSearchedMemes(keyword) {
    const url=`${baseUrl}${apiKey}&keywords=${keyword}`;
    try {
        const res = await fetch(url);
        if(!res){
            const errorMessage = await res.json();
            throw new Error(errorMessage);
        }else{
            const data = await res.json();
            const tempSpan=document.createElement("span");
            tempSpan.innerHTML=`<button id="favouriteMemeSaveModalActiveBtn" class="btn hidden" onclick="my_modal_5.showModal()">open modal</button>
                <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <p class="py-4 font-semibold">Give a name to your Favourite Meme!</p>
                    
                    <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <div>
                        <input type="text" id="favouriteMemeSaveInput" class="h-12 w-80 rounded-lg border-2 border-blue-600 bg-white text-black">
                        <button id="favouriteMemeSaveBtn" class=" bg-blue-600 text-white h-12 w-28 rounded-lg">Save!</button>
                        </div>
                        <button id="favouriteMemeSaveModalCloseBtn" class="btn hidden">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>`;
            memeFeedImg.appendChild(tempSpan);  
            buildMemesFeed(data.memes);
        }
    } catch (error) {
        console.log("caught error");
        console.log(error.message);
    }
}

let typingTimer;
searchMemes.addEventListener("input", (e)=>{

    searchIcon.classList.add("hidden");
    clearTimeout(typingTimer);
    const nrml=`Meme Feed ...`;
    const srcTime=`Search reasult for "${e.target.value}" ... ...`;
    typingTimer = setTimeout(async () =>{
        if(e.target.value.length<1){
            warningMsg.classList.add("hidden");
            searchIcon.classList.remove("hidden");
            
            if(apiKey && (memeFeedImg.innerHTML || localStorage.getItem('demo')==="true")){
                searchMemesName.innerText=`Meme Feed ...`;
                memeFeedImg.innerHTML="";
                const memes=await getMockData();
                const tempSpan=document.createElement("span");
                tempSpan.innerHTML=`<button id="favouriteMemeSaveModalActiveBtn" class="btn hidden" onclick="my_modal_5.showModal()">open modal</button>
                  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                      <p class="py-4 font-semibold">Give a name to your Favourite Meme!</p>
                      
                      <div class="modal-action">
                        <form method="dialog">
                          <!-- if there is a button in form, it will close the modal -->
                          <div>
                            <input type="text" id="favouriteMemeSaveInput" class="h-12 w-80 rounded-lg border-2 border-blue-600 bg-white text-black">
                            <button id="favouriteMemeSaveBtn" class=" bg-blue-600 text-white h-12 w-28 rounded-lg">Save!</button>
                          </div>
                          <button id="favouriteMemeSaveModalCloseBtn" class="btn hidden">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>`;
                memeFeedImg.appendChild(tempSpan);  
                searchMemesName.innerText=``;
                floating.classList.remove("hidden");
                setTimeout(()=>{
                    searchMemesName.innerText=nrml;
                    floating.classList.add("hidden");
                    buildMemesFeed(shuffleArray(memes));
                }, "800");
            }
        }else if(e.target.value.length>1 && e.target.value.length<101){
            if(!apiKey){
                setApiId.click();
            }else{
                memeFeedImg.innerHTML="";
                searchMemesName.innerText="";
                if(localStorage.getItem('demo')==="true"){
                    const memes=await getMockData();
                    floating.classList.remove("hidden");
                    setTimeout(()=>{
                        floating.classList.add("hidden");
                        searchMemesName.innerText=srcTime;
                        buildMemesFeed(memes);
                    }, "1200");
                }else{
                    floating.classList.remove("hidden");
                    setTimeout(()=>{
                        floating.classList.add("hidden");
                        searchMemesName.innerText=srcTime;
                        showSearchedMemes(e.target.value);
                    }, "1200");
                }
            }

            warningMsg.classList.add("hidden");
        }else if(e.target.value.length===1){
            warningMsg.innerText="at least 2 characters required";
            warningMsg.classList.remove("hidden");
        }else{
            warningMsg.innerText="at most 100 characters";
            warningMsg.classList.remove("hidden");
        }

    }, "700");
});

window.addEventListener("load",()=>{
    randerMemes();
});