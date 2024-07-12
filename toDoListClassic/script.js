const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#input-box");
const list = document.querySelector("#task-list");
const check = '<i class="fa-solid fa-check"></i>';
const uncheck = '<i class="fa-regular fa-circle"></i>';
const btn = '<button id="del-btn">X</button>';

const complete = (evt)=>{
    let target = evt.target;
    target.classList.toggle("check");
    let val = target.innerHTML;
    let newVal;
    if(val.startsWith(uncheck)){
        newVal = val.replace(uncheck,check);
    }
    else{
        newVal = val.replace(check,uncheck);
    }
    target.innerHTML = newVal;
}

const del = (evt)=>{
    let parent = evt.target.parentElement;
    parent.remove();
}

const Add = ()=>{
    let val = input.value;
    let li = document.createElement("li");
    li.innerHTML = `${uncheck} &nbsp; ${val}${btn}`;
    list.append(li);
    input.value = "";
    li.addEventListener("click",(evt)=>{
        complete(evt);
    })
    const delBtn = document.querySelector("#del-btn");
    delBtn.addEventListener("cleck",(evt)=>{
        del(evt);
    })
}


addBtn.addEventListener("click",Add);