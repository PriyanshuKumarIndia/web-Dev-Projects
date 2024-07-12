let arr = [];

let taskBody = document.querySelector("#tasks");
let btn = document.querySelector("#btn");
let input = document.querySelector(".input input");
function addPara(val){
    let div = document.createElement("div");
    let p = document.createElement("p");
    let button = document.createElement("button");
    button.innerHTML = "x";
    p.innerText = val;
    div.append(p);
    div.append(button);
    taskBody.prepend(div);
    div.classList.add("row");
    button.addEventListener("click",(evt)=>{
        let div = evt.target.parentElement;
        div.remove();
    })
}

btn.addEventListener("click",(evt)=>{
    let val = input.value;
    addPara(val);
    input.value="";
})