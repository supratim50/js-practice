const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const bg_color = () => {
    let color = "#";
    const hex = "0123456789ABCDEF";
    for(let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let changingInterval;

const startChangeColor = () => {
    if(!changingInterval) {
        changingInterval =  setInterval(() => {
            document.body.style.backgroundColor = bg_color();
        }, 1000)
    }
}

const stopChnagingColor = () => {
    clearInterval(changingInterval);
    changingInterval = null;
}

startBtn.addEventListener('click', startChangeColor)
stopBtn.addEventListener('click', stopChnagingColor)