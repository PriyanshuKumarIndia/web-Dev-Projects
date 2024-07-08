let buttons = document.querySelectorAll(".row-btn");
let input = document.querySelector("input");
let string="";
Array.from(buttons).forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
        let val = e.target.innerHTML;
        if(val == "Del"){
            string = string.slice(0,-1);
        }
        else if(val == "AC"){
            string = "";
        }
        else if(val == "="){
            string = String(eval(string));
        }
        else{
            string = string + val;
        }
        input.value=string;
    })
})