// const c = setInterval(function(){
//     document.querySelector(".bulb-container").classList.toggle("bulb");
// },200);
let c;

let on = document.querySelector("#turn-on");
on.addEventListener("click",function(){
    console.log("HERE2");
    clearInterval(c);
    document.querySelector(".bulb-container").classList.add("bulb");
})

let off = document.querySelector("#turn-off");
off.addEventListener("click",function(){
    clearInterval(c);
    console.log("HERE1");
    document.querySelector(".bulb-container").classList.remove("bulb");
})

let togg = document.querySelector("#toggle");
togg.addEventListener("click",function(){
    clearInterval(c);
    c=setInterval(function(){
        document.querySelector(".bulb-container").classList.toggle("bulb");
    },200);
})