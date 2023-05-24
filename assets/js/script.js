var intYieldEl = document.querySelector("#intYield");
var intTimeEl = document.querySelector("#intTime");
var desYieldEl = document.querySelector("#desYield");
var desTimeEl = document.querySelector("#desTime");
var searchBtnEl = document.querySelector("#searchBtn");
var input = document.querySelector("#input");
var resetBtnEl = document.querySelector("#resetBtn");

const findAdjustment = (event) => {
    event.preventDefault();
//     var gramsPerSe = (intYieldEl.value.trim() / intTimeEl.value.trim());
//     console.log(gramsPerSe);

//     var yieldAdjust = (desTimeEl.value.trim() / gramsPerSe);

//     var finalAdjust = (desYieldEl.value.trim() - yieldAdjust) / 2.5;

//     if (yieldAdjust < desYieldEl.value.trim()){

//     alert("Turn the dial " + finalAdjust + " ticks to the right to get your desired shot");
// } else {
//     alert("Turn the dial " + finalAdjust + " ticks to the left to get your desired shot");
// }
     

            const adjust1 = "to the left";
            const adjust2 = "to the right";

            coffeeInput = input.value.trim();

            

             var intYield = intYieldEl.value.trim();
            

            var intTime = intTimeEl.value.trim();
            

            var desiredTime = desTimeEl.value.trim();
           

            var desiredYield = desYieldEl.value.trim();

            var gramPerSe = intYield / intTime;
            var timeBeforeGrindAdjust = desiredYield / gramPerSe;

            var finalAdjustment = "";
            if ((timeBeforeGrindAdjust - desiredTime) / 2.5 === 0) {
                alert("No grind adjustment is necessary");
            }
            else if (timeBeforeGrindAdjust < desiredTime) {
                finalAdjustment = (desiredTime - timeBeforeGrindAdjust) / 2.5;
                alert("Turn the dial " + Math.round((finalAdjustment * 2)) / 2.0 + " ticks " + adjust2 + " to get your desired shot of " + desiredYield +
                        " grams in " + desiredTime + " seconds.");
            }else {
                finalAdjustment = (timeBeforeGrindAdjust - desiredTime) / 2.5;
                alert("Turn the dial " + Math.round((finalAdjustment * 2))/ 2.0 + " ticks " + adjust1 + " to get your desired shot of " + desiredYield +
                        " grams in " + desiredTime + " seconds.");
            } 



        }
    
        const clearForm = () => {
            intTimeEl.reset();
            intYieldEl.reset();
            desTimeEl.reset();
            desYieldEl.reset();
            input.reset();
        }

searchBtnEl.addEventListener("click", findAdjustment);
resetBtnEl.addEventListener("click", clearForm);