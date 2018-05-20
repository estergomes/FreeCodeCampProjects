(function () {
    var buttons = document.querySelectorAll(".btn");
    var displayTotal;

    function handleCalc(e) {
        var buttonValue = e.currentTarget.textContent;
        var display = document.querySelector(".display p");
        var btnON = document.getElementById("on");

        // turn on / turn off
        if (buttonValue === "ON") {
            display.classList.toggle("on");
            setTimeout(function(){
                btnON.innerHTML = "OFF";
                display.innerHTML = "";
            },500)

        } else if (buttonValue === "OFF") {
            setTimeout(function(){
                btnON.textContent = "ON";
                display.innerHTML = "";
            },500)

           
        }

        if (buttonValue === "=") {
            displayTotal = eval(displayTotal);
            display.innerHTML = displayTotal;
        } else if (buttonValue === "AC" || buttonValue === "CE") {
            display.innerHTML = "cleaning ...🚽️";
            setTimeout(function () {
                display.innerHTML = "";
            }, 1000);
            displayTotal = false;
        } else if (
            buttonValue === "+" ||
            buttonValue === "/" ||
            buttonValue === "*" ||
            buttonValue === "-"
        ) {
            displayTotal += buttonValue;
            display.innerHTML = displayTotal;
        } else {
            displayTotal = display.innerHTML + buttonValue;
            display.innerHTML += buttonValue;
            console.log(displayTotal);
        }
    }

    buttons.forEach(function (button) {
        button.addEventListener("click", handleCalc, false);
    });
})();
