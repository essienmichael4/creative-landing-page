let menu = document.querySelector(".sidebar")
let text = document.querySelector(".text")
let icon = document.querySelector(".icon")
let content = document.querySelector(".sidebarContent")
let services = document.querySelector(".services")
let locations = document.querySelector(".locations")
let legal = document.querySelector(".legal")
let imgcontainer = document.querySelector(".imgcontainer")

let menuIsClicked = false;

console.log(menu.style.width)

const openmenu = ()=>{
    if(menuIsClicked == true){
        menu.style.width = "6rem";
        // content.style.visibility = "hidden"; 
        text.innerText = "menu";
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars')
        menuIsClicked = false;
    }else if(menuIsClicked == false){
        menu.style.width = "100%";
        // content.style.visibility = "visible";
        text.innerText = "close";
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')
        menuIsClicked = true;
    }
}

services.addEventListener("onmouseover", ()=>{
    imgcontainer.style.backgroundImage = `assets/services.jpg`;
});
locations.addEventListener("onmouseover", ()=>{
    imgcontainer.style.backgroundImage = './assets/locations.jpeg';
});
legal.addEventListener("onmouseover", ()=>{
    imgcontainer.style.backgroundImage = `url("./assets/legal.jpg")`;
});


const picChange = (e)=>{
    imgcontainer.style.backgroundImage = `url(${e})`;
}