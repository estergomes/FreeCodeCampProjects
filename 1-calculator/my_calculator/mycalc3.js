
var inputDisplay = document.querySelector('.calc_input .input p');
var btnON = document.getElementById('on');


function pushBtn(obj) {
	var btnActivated = obj.innerHTML;

	if(btnActivated === "="){
		inputDisplay.innerHTML = eval(inputDisplay.innerHTML);
	} else if(btnActivated === "AC") {
		inputDisplay.innerHTML = '';
	} else {
		if(inputDisplay.innerHTMLi == '0') {
			inputDisplay.innerHTML = btnActivated;
		} else {
			inputDisplay.innerHTML +=btnActivated;
		}
	}

	
	// turn on / turn off

  	if(btnActivated === 'ON'){
			inputDisplay.classList.toggle('on');
			btnON.textContent = 'OFF';
			inputDisplay.innerHTML = '';
    }else {
			btnON.textContent = 'ON';
			inputDisplay.innerHTML = '';
		}

    if(btnON.textContent === 'CE' || btnON.textContent === 'AC'){
      console.log('Calculadora limpa');
      return inputDisplay.innerHTML = '';
    } 

}

