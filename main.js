let menu = document.querySelector(".sidebar")
let text = document.querySelector(".text")
let icon = document.querySelector(".icon")
let content = document.querySelector(".sidebarContent")
let services = document.querySelector(".services")
let locations = document.querySelector(".locations")
let legal = document.querySelector(".legal")
let imgcontainer = document.querySelector(".imgcontainer")
let serviceCTA = document.querySelector(".callToActionServices")
let locationCTA = document.querySelector(".callToActionLocation")
let ctaService = document.querySelector("#ctaService")
let ctaLocation = document.querySelector("#ctaLocation")

let menuIsClicked = false;

const openmenu = ()=>{
    if(menuIsClicked == true){
        menu.style.width = "6rem";
        text.innerText = "menu";
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars')
        menuIsClicked = false;
    }else if(menuIsClicked == false){
        if(serviceCTA.classList.contains("ctaactive")){
            serviceCTA.classList.remove("ctaactive")
        }

        if(locationCTA.classList.contains("ctaactive")){
            locationCTA.classList.remove("ctaactive")
        }

        menu.style.width = "100%";
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


ctaService.addEventListener("click", ()=>{
    if(serviceCTA.classList.contains("ctaactive")){
        serviceCTA.classList.remove("ctaactive")
    }else{
        if(locationCTA.classList.contains("ctaactive")){
            locationCTA.classList.remove("ctaactive")
        }
        serviceCTA.classList.add("ctaactive")
    }
})

ctaLocation.addEventListener("click", ()=>{
    if(locationCTA.classList.contains("ctaactive")){
        locationCTA.classList.remove("ctaactive")
    }else{
        if(serviceCTA.classList.contains("ctaactive")){
            serviceCTA.classList.remove("ctaactive")
        }
        locationCTA.classList.add("ctaactive")
    }
})