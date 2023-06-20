// const elementGroups = [
//     { elements: document.querySelectorAll(".color1"), button: document.querySelector(".reactive-non-metals") },
//     { elements: document.querySelectorAll(".color2"), button: document.querySelector(".akali-metals") },
//     { elements: document.querySelectorAll(".color3"), button: document.querySelector(".alkaline-earth-metals") },
//     { elements: document.querySelectorAll(".color4"), button: document.querySelector(".lanthanides") },
//     { elements: document.querySelectorAll(".color5"), button: document.querySelector(".transition-metals") },
//     { elements: document.querySelectorAll(".color6"), button: document.querySelector(".metalloids") },
//     { elements: document.querySelectorAll(".color7"), button: document.querySelector(".post-transition-metals") },
//     { elements: document.querySelectorAll(".color8"), button: document.querySelector(".halogen") },
//     { elements: document.querySelectorAll(".color9"), button: document.querySelector(".noble-gases") },
//     { elements: document.querySelectorAll(".color10"), button: document.querySelector(".actinides") },
//     { elements: document.querySelectorAll(".color11"), button: document.querySelector(".unknown-properties") }
// ];
  
// let activeButton = null;
  
// elementGroups.forEach(group => {
//     group.button.addEventListener("click", () => {
//         resetActiveButton();
//         activeButton = group.button;
//         applyStyles(group.elements);
//     });
// });
  
// function resetActiveButton() {
//     if (activeButton) {
//         const activeGroup = elementGroups.find(group => group.button === activeButton);
//         if (activeGroup) {
//             removeStyles(activeGroup.elements);
//         }
//     }
// }
  
// function applyStyles(elements) {
//     elements.forEach(element => {
//         element.style.border = "2px solid #fff";
//         element.style.boxShadow = "0 0 10px #fff";
//     });
// }
  
// function removeStyles(elements) {
//     elements.forEach(element => {
//         element.style.border = "none";
//         element.style.boxShadow = "none";
//     });
// }
  

const tableElement = document.getElementById('table-element');
const tds = tableElement.querySelectorAll("td:not(.none)");

const hiden = document.querySelector("#hiden");
const boxHidens = document.querySelectorAll(".box-hiden");

function getColor(colorClass) {
    switch (colorClass) {
        case "color1":
            return "rgba(0, 182, 188, 0.8)";
        case "color2":
            return "rgba(27, 103, 201, 0.8)";
        case "color3":
            return "rgba(161, 102, 159, 0.8)";
        case "color4":
            return "rgba(0, 78, 117, 0.8)";
        case "color5":
            return "rgba(245, 57, 81, 0.8)";
        case "color6":
            return "rgba(245, 182, 89, 0.8)";
        case "color7":
            return "rgba(243, 109, 74, 0.8)";
        case "color8":
            return "rgba(89, 207, 110, 0.8)";
        case "color9":
            return "rgba(50, 144, 144, 0.8)";
        case "color10":
            return "rgba(86, 45, 86, 0.8)";
        case "color11":
            return "rgba(133, 153, 152, 0.8)";
        default:
            return "black";
    }
}

for (let i = 0; i < tds.length; ++i) {
    tds[i].addEventListener("click", function() {
        if (i < boxHidens.length) {
            hiden.style.display = "flex";
            boxHidens[i].style.display = "block";

            // Lấy lớp màu của td được nhấp
            const colorClass = tds[i].classList[0];
            
            // Đặt màu cho box-hiden tương ứng với lớp màu
            boxHidens[i].style.backgroundColor = getColor(colorClass);
            
            // Đặt màu cho các box-hiden-child tương ứng
            const boxHidenChilds = boxHidens[i].querySelectorAll(".box-hiden-child");
            for (let j = 0; j < boxHidenChilds.length; j++) {
                boxHidenChilds[j].classList.add(tds[i].classList[0]);
                console.log(tds[i].classList[0]);
            }
        }
    });
}

hiden.addEventListener("click", () => {
    hiden.style.display = "none";
    for (var i = 0; i < boxHidens.length; ++i) {
        boxHidens[i].style.display = "none";
        const boxHidenChilds = boxHidens[i].querySelectorAll(".box-hiden-child");
        for(var j=0; j<boxHidenChilds.length; ++j){
            boxHidenChilds[j].classList.remove("color1");
        }
    }
});

for (let i = 0; i < boxHidens.length; i++) {
    const boxHiden = boxHidens[i];
    boxHiden.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

const box1s = document.querySelectorAll('.box-1');
const box2s = document.querySelectorAll('.box-2');
const box3s = document.querySelectorAll('.box-3');
const box4s = document.querySelectorAll('.box-4');
const box5s = document.querySelectorAll('.box-5');
const box6s = document.querySelectorAll('.box-6');
const box7s = document.querySelectorAll('.box-7');

const atomicNumbers = document.querySelectorAll('.atomic-number');
const atomicMasss = document.querySelectorAll('.atomic-mass');
const chemicalSymbols = document.querySelectorAll('.chemical-symbol');
const nameChemicals = document.querySelectorAll('.name-chemical');
const electronegativitys = document.querySelectorAll('.electronegativity');
const electronConfigurations = document.querySelectorAll('.electron-configuration');
const oxidationNumbers = document.querySelectorAll('.oxidation-number');

for(var i=0; i<box1s.length; ++i){
    (function (index) {
        box1s[index].addEventListener('mouseover', () => {
          atomicNumbers[index].classList.add('hovered');
        });
    
        box1s[index].addEventListener('mouseout', () => {
          atomicNumbers[index].classList.remove('hovered');
        });
    })(i);
}

for(var i=0; i<box2s.length; ++i){
    (function (index) {
        box2s[index].addEventListener('mouseover', () => {
            chemicalSymbols[index].classList.add('hovered');
        });
    
        box2s[index].addEventListener('mouseout', () => {
            chemicalSymbols[index].classList.remove('hovered');
        });
    })(i);
}

for(var i=0; i<box3s.length; ++i){
    (function (index) {
        box3s[index].addEventListener('mouseover', () => {
            nameChemicals[index].classList.add('hovered');
        });
    
        box3s[index].addEventListener('mouseout', () => {
            nameChemicals[index].classList.remove('hovered');
        });
    })(i);
}

for(var i=0; i<box4s.length; ++i){
    (function (index) {
        box4s[index].addEventListener('mouseover', () => {
            electronConfigurations[index].classList.add('hovered');
        });
    
        box4s[index].addEventListener('mouseout', () => {
            electronConfigurations[index].classList.remove('hovered');
        });
    })(i);
}

for(var i=0; i<box5s.length; ++i){
    (function (index) {
        box5s[index].addEventListener('mouseover', () => {
            atomicMasss[index].classList.add('hovered');
        });
    
        box5s[index].addEventListener('mouseout', () => {
            atomicMasss[index].classList.remove('hovered');
        });
    })(i);
}

for(var i=0; i<box6s.length; ++i){
    (function (index) {
        box6s[index].addEventListener('mouseover', () => {
            electronegativitys[index].classList.add('hovered');
        });
    
        box6s[index].addEventListener('mouseout', () => {
            electronegativitys[index].classList.remove('hovered');
        });
    })(i);
}

for(var i=0; i<box7s.length; ++i){
    (function (index) {
        box7s[index].addEventListener('mouseover', () => {
            oxidationNumbers[index].classList.add('opacity');
        });
    
        box7s[index].addEventListener('mouseout', () => {
            oxidationNumbers[index].classList.remove('opacity');
        });
    })(i);
}
