

let scrollEle = document.querySelector('.scroll i');

window.onscroll = function (){
    // console.log(this.scrollY);
    if (this.scrollY >= 635){
        scrollEle.classList.add("show");
    } else{
        scrollEle.classList.remove("show");
    }
}
scrollEle.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
    
let mainMenu = document.querySelector(".nav");
let menu = document.querySelector('.nav ul');
let openMenu = document.querySelector(".list");
let closeMenu = document.querySelector(".close-menu");
let changeList = document.querySelector(".logo");
let tabs = document.querySelectorAll('.nav ul li a');
let tabsArry = Array.from(tabs);


openMenu.onclick = function (){
    mainMenu.classList.toggle('active');
    menu.classList.toggle('active');
    closeMenu.classList.toggle('active');
    openMenu.classList.toggle('active');
}
closeMenu.onclick = function (){
    mainMenu.classList.remove('active');
    menu.classList.remove('active');
    closeMenu.classList.remove('active');
    openMenu.classList.remove('active');
}

// To make Nav Elements Active Or Unactive
tabsArry.forEach((ele) =>{
    ele.addEventListener('click', function (e){
        tabsArry.forEach((ele) =>{
            ele.classList.remove('active');
        });
        e.currentTarget.classList.add("active");
        mainMenu.classList.remove('active');
    menu.classList.remove('active');
    closeMenu.classList.remove('active');
    openMenu.classList.remove('active');
    });
});

let btnE1 = document.querySelector(".generate");
let serialE1 = document.querySelector('.serial');
btnE1.onclick = function (){
    let characters = "1234567890abcdefghjklmnopqrstuvwxyzABCDUFGHJKLMNOPQRSTUVWXYZ";
    let charsCount = 11;
    let randomSerial = "";
    for (let i = 0; i < charsCount; i++)
    {
        randomSerial += characters[Math.floor(Math.random() * characters.length)];
    }
    serialE1.innerHTML = randomSerial;
};
//-----------------------------------------------
let tryNow = document.querySelector(".try-now");
let demende = document.querySelector(".demende");
let closeDemende = document.querySelector(".close-de");

tryNow.onclick = function(){
    demende.classList.toggle("active");
}
closeDemende.onclick = function(){
    demende.classList.remove("active");
}

//-------------------------------------
// For Clicl On Moon  
// let moon = document.querySelector(".moon");
// moon.onclick = function (){
//     let colors = "#ffffffc7, #8d0a66"
//     let randomColor = ""
//     for (let j = 0; j < colors; j++){
//         randomColor += colors[Math.ceil(Math.random() * colors.length)];
//     }
//     moon.innerHTML = randomColor;
    

// }













