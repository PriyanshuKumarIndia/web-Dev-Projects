let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-button");

let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [6,7,8],
    [2,5,8]
];

const reset=()=>{
    turn0=true;
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
}

resetButton.addEventListener("click",reset);

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        } else {
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const checkWinner = ()=>{
    for(pattern of winPatterns) {
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       if(pos1 !="" && pos2!="" && pos3!=""){
         if(pos1===pos2 && pos2===pos3){
            console.log("Winner",pos1);
            for(box of boxes){
                box.disabled=true;
            }
            alert(`Winner is ${pos1}`);
         }    
       }
    }
}