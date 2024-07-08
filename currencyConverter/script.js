// const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

// let flag = "https://flagsapi.com/${countryCode}/flat/64.png"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fCurr = document.querySelector(".from select");
const tCurr = document.querySelector(".to select");
const msg = document.querySelector("#msg");

window.addEventListener("load",()=>{
    updateExchangeRate();
})

const updateFlag = (element)=>{
    let currCode = element.value;
    let conCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${conCode}/flat/64.png`;
    element.parentElement.querySelector("img").src = newSrc;
}

for(let sel of dropdowns){
    for(let code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(sel.name === "from" && code === "USD"){
            newOption.selected = "selected";
        }
        if(sel.name === "to" && code === "INR"){
            newOption.selected = "selected";
        }
        sel.append(newOption);
    }
    sel.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
})

const updateExchangeRate = async ()=>{
    let amt = document.querySelector(".amount input").value;
    if(amt == "" || amt<1){
        amt = 1;
    }
    
    try{
        let url = `${BASE_URL}/${fCurr.value.toLowerCase()}/${tCurr.value.toLowerCase()}.json`;
        let response = await fetch(url);
        let data = await response.json();
        let rate = 83.90;//data[tCurr.value.toLowerCase()];
        let amtVal = (rate*amt).toFixed(5);
        msg.innerText = `${amt} ${fCurr.value} = ${amtVal} ${tCurr.value}`;
        document.querySelector(".amount input").value =  "";
    }catch{
        msg.innerText =  "Unable to fetch data now.......";
    }
}