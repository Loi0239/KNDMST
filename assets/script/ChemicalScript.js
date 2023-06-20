const boxHidens = document.querySelectorAll(".box-hiden");
const wrapperHidens = document.querySelectorAll(".wrapper-hiden");
// abc
const wrapperHydrogen = document.querySelector(".wrapper-hydrogen");
const wrapperHelium = document.querySelector(".wrapper-helium");


// Thành phần box-hiden theo từng tên hóa chất tương ứng
const boxHydrogenHiden = document.querySelector(".hydrogen-hiden");
const boxHeliumHiden = document.querySelector(".helium-hiden");


// Thành phần đánh dấu box theo tên hóa chất
const boxHydrogen = document.querySelector(".hydrogen");
const boxHelium = document.querySelector(".helium");

// thành phần trong box-hiden 
const btnExits = document.querySelectorAll(".exit");
const btnShapes = document.querySelectorAll(".btn-shape");
const shapeHidens = document.querySelectorAll(".shape-hiden");
const btnTables = document.querySelectorAll(".btn-periodic-table");
const tableHidens = document.querySelectorAll(".periodic-table-hiden");
const btnTcvls = document.querySelectorAll(".btn-tcvl");
const tcvlHidens = document.querySelectorAll(".tcvl-hiden");
const btnTchhs = document.querySelectorAll(".btn-tchh");
const tchhHidens = document.querySelectorAll(".tchh-hiden");
const btnDcs = document.querySelectorAll(".btn-dc");
const dcHidens = document.querySelectorAll(".dc-hiden");
const btnUds = document.querySelectorAll(".btn-ud");
const udHidens = document.querySelectorAll(".ud-hiden");

for (let i = 0; i < btnExits.length; i++) {
    btnExits[i].addEventListener("click", () => {
        boxHidens[i].classList.remove("H");
        boxHidens[i].classList.remove("He");
        wrapperHidens[i].style.zIndex = "-1";
    })
}

boxHydrogen.addEventListener("click", () => {
    boxHydrogenHiden.classList.add("H");
    wrapperHydrogen.style.zIndex = "1";
})

boxHelium.addEventListener("click", () => {
    boxHeliumHiden.classList.add("He");
    wrapperHelium.style.zIndex = "1";
})

var flagShape = true;
var flagTable = true;
var flagVl = true;
var flagHh = true;
var flagDc = true;
var flagUd = true;

for (let i = 0; i < btnShapes.length; i++){
    btnShapes[i].addEventListener("click", () => {
        if(flagShape == true){
            shapeHidens[i].style.display = "block";
            shapeHidens[i].style.height = "auto";
            flagShape = false;
        }else{
            shapeHidens[i].style.display = "none";
            shapeHidens[i].style.height = "0";
            flagShape = true;
        }
    })
}  

for (let i = 0; i < btnTables.length; i++){
    btnTables[i].addEventListener("click", () => {
        if(flagTable == true){
            tableHidens[i].style.display = "block";
            tableHidens[i].style.height = "auto";
            flagTable = false;
        }else{
            tableHidens[i].style.display = "none";
            tableHidens[i].style.height = "0";
            flagTable = true;
        }
    })
} 

for (let i = 0; i < btnTcvls.length; i++){
    btnTcvls[i].addEventListener("click", () => {
        if(flagVl == true){
            tcvlHidens[i].style.display = "block";
            tcvlHidens[i].style.height = "auto";
            flagVl = false;
        }else{
            tcvlHidens[i].style.display = "none";
            tcvlHidens[i].style.height = "0";
            flagVl = true;
        }
    })
} 

for (let i = 0; i < btnTchhs.length; i++){
    btnTchhs[i].addEventListener("click", () => {
        if(flagHh == true){
            tchhHidens[i].style.display = "block";
            tchhHidens[i].style.height = "auto";
            flagHh = false;
        }else{
            tchhHidens[i].style.display = "none";
            tchhHidens[i].style.height = "0";
            flagHh = true;
        }
    })
} 

for (let i = 0; i < btnDcs.length; i++){
    btnDcs[i].addEventListener("click", () => {
        if(flagDc == true){
            dcHidens[i].style.display = "block";
            dcHidens[i].style.height = "auto";
            flagDc = false;
        }else{
            dcHidens[i].style.display = "none";
            dcHidens[i].style.height = "0";
            flagDc = true;
        }
    })
} 

for (let i = 0; i < btnUds.length; i++){
    btnUds[i].addEventListener("click", () => {
        if(flagUd == true){
            udHidens[i].style.display = "block";
            udHidens[i].style.height = "auto";
            flagUd = false;
        }else{
            udHidens[i].style.display = "none";
            udHidens[i].style.height = "0";
            flagUd = true;
        }
    })
} 

// code tính năng tìm kiếm
const searchInput = document.querySelector(".input");
const chemicalList = document.querySelectorAll(".box");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value;

    for(let i=0; i < chemicalList.length; i++){
        const chemicalSymbol = chemicalList[i].querySelector(".text-class").textContent;
        const Visible = chemicalSymbol.replace( /\[ . * ? \]/g, "").includes(searchTerm);
        
        if(Visible){
            chemicalList[i].style.display = 'flex';
        } else {
            chemicalList[i].style.display = 'none';
        }
    }
})