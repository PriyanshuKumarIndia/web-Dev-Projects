function dateAndTime(){
        const now = new Date();
        let year = now.getFullYear();
        let month = String(now.getMonth()+1).padStart(2,'0');
        let date = String(now.getDate()).padStart(2,'0');
    
        let hour = String(now.getHours()).padStart(2,'0');
        let minute = String(now.getMinutes()).padStart(2,'0');
        let second = String(now.getSeconds()).padStart(2,'0');
        return `${year}-${month}-${date}<br>${hour}:${minute}:${second}`;
};

function show(){
    let a = document.querySelector(".time");
    a.innerHTML=dateAndTime();
}

setInterval(show,1000);