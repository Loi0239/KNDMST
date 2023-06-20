const water = document.querySelector('#water');
const sodium = document.querySelector('#sodium');
const copper = document.querySelector("#copper");
const copperOxide = document.querySelector("#copperOxide");
const acidSulfuric = document.querySelector("#acidSulfuric");
const tube = document.getElementById("tube");
const start = document.querySelector("#Start");
const reset = document.querySelector("#Reset");
const Result = document.querySelector(".result");

var div;

water.addEventListener("click", () => {
  if(tube.querySelector(".water")){
    console.log("");
  }else if(tube.querySelector(".sodium") != null){
    console.log("aaa")
    alert("không thể bỏ nước vào sau natri")
  }else{
    div = document.createElement("div");
    div.classList.add('water');
    document.getElementById("tube").appendChild(div);
  }
})

sodium.addEventListener("click", () => {
  if(tube.querySelector(".sodium")){
    console.log("");
  }else{
    div = document.createElement("div");
    div.classList.add('sodium');
    document.getElementById("tube").appendChild(div);
  }
})

copperOxide.addEventListener("click", () => {
  if(tube.querySelector(".copperOxide")){
    console.log("");
  }else{
    div = document.createElement("div");
    div.classList.add('copperOxide');
    document.getElementById("tube").appendChild(div);
  }
})

acidSulfuric.addEventListener("click", () => {
  if(tube.querySelector(".acidSulfuric")){
    console.log("");
  }else{
    div = document.createElement("div");
    div.classList.add('acidSulfuric');
    document.getElementById("tube").appendChild(div);
  }
})

start.addEventListener("click", () => {
  var childDivs = tube.querySelectorAll("div");
  if (childDivs.length === 2 && tube.querySelector(".sodium") && tube.querySelector(".water")) {
    for(var i = childDivs.length - 1; i >= 0; --i){
      if(childDivs[i].classList.contains("water")){
        break;
      }
      childDivs[i].remove();
    }

    div = document.createElement("div");
    div.classList.add('water-sodium');
    document.getElementById("tube").appendChild(div);

    var text = "2Na + 2H<sub>2</sub>O --> 2NaOH + H<sub>2</sub>"
    Result.innerHTML = text;
  }else if(childDivs.length === 2 && tube.querySelector(".copperOxide") && tube.querySelector(".acidSulfuric")){
    tube.classList.add("shake");

    for(var i = childDivs.length - 1; i >= 0; --i){
      if(childDivs[i].classList.contains("acidSulfuric")){
        break;
      }
      childDivs[i].remove();
    }

    div = document.createElement("div");
    div.classList.add('copperOxide-acidSulfuric');
    document.getElementById("tube").appendChild(div);

    var text = "CuO + H<sub>2</sub>SO<sub>4</sub> --> CuSO<sub>4</sub> + H<sub>2</sub>O"
    Result.innerHTML = text;
  }else {
    console.log("none");

    var text = "Phản ứng không xảy ra hoặc chưa được cập nhật <br> Thật lòng xin lỗi vì sự thiếu sót này"
    Result.innerHTML = text;
  }
});

reset.addEventListener("click", () => {
    tube.innerHTML = '';
    tube.className="";
    Result.textContent = "";
})

