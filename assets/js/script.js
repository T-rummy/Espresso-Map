var intYieldEl = document.querySelector("#intYield");
var intTimeEl = document.querySelector("#intTime");
var desYieldEl = document.querySelector("#desYield");
var desTimeEl = document.querySelector("#desTime");
var searchBtnEl = document.querySelector("#searchBtn");

var findAdjustment = function(event){
    event.preventDefault();
    var gramsPerSe = (intYieldEl.value.trim() / intTimeEl.value.trim());
    console.log(gramsPerSe);

    var yieldAdjust = (desTimeEl.value.trim() / gramsPerSe);

    var finalAdjust = (desYieldEl.value.trim() - yieldAdjust) / 2.5;

    if (yieldAdjust < desYieldEl.value.trim()){

    alert("Turn the dial " + finalAdjust + " ticks to the right to get your desired shot");
} else {
    alert("Turn the dial " + finalAdjust + " ticks to the left to get your desired shot");
}
}

searchBtnEl.addEventListener("click", findAdjustment);