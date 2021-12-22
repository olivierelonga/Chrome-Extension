let btn = document.getElementById("Timezone");
btn.addEventListener("click", timezone);

function timezone(){
    let time = document.getElementById("showtimezone");
    time.innerHTML = Date();
}
