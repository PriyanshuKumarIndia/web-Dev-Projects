const b = document.querySelectorAll(".box");
const boxes = Array.from(b);
const audioTurn = new Audio("./utilities/ting.mp3");
const overAudio = new Audio("./utilities/gameover.mp3");
let gameOver = false;

let turn = "X";

const changeTurn = ()=>{
    return turn === 'X'?'O':'X';
}

const checkWin = ()=>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(win =>{
        if(b[win[0]].innerText!="" && (b[win[0]].innerText == b[win[1]].innerText) && (b[win[2]].innerText == b[win[1]].innerText)){
            console.log("WIN");
            document.querySelector("#turn").innerText=`Winner is ${turn=="X" ? "O":"X"}`;
            document.querySelector("#gif").classList.remove("hide");
            overAudio.play();
            gameOver=true;
        }
    })
}

boxes.forEach(box=>{
    box.addEventListener('click',(e)=>{
        if(box.innerText == ""){
            box.innerText=turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                audioTurn.play();
                document.querySelector("#turn").innerText=`Turn of ${turn}`;
            }
        }
    })
})

document.querySelector("#btn").addEventListener('click',()=>{
    boxes.forEach(box =>{
        gameOver=false;
        box.innerText="";
        turn = 'X';
        document.querySelector("#turn").innerText=`Turn of ${turn}`;
        document.querySelector("#gif").classList.add("hide");
    })
})