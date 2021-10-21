function refresh(){
    const time = new Date();

    let hr = time.getHours();;
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + mim : min;
    sec = (sec < 10) ? "0" + sec : sec;

    document.getElementById("h").innerHTML = hr;
    document.getElementById("m").innerHTML = min;
    document.getElementById("s").innerHTML = sec;
}

setInterval(refresh,1000);

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => { 
    document.body.classList.toggle('dark')
});
