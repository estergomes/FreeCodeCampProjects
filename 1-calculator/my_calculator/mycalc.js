
// Variables
var btnKeys = document.querySelectorAll( ".calc_keys .btn" );
var btnON = document.getElementById('on');
var input = document.querySelector('.calc_input .input p');
var inputDisplay = document.querySelector('.calc_input .input');

var lastInput = input.innerHTML.length;
lastInput = -1;


for(var i = 0; i < btnKeys.length; i++){
  btnKeys[i].onclick = function(e){
    var inputVal = this.innerHTML;    
    input.innerHTML += inputVal;

    if(inputVal === 'ON'){
      inputDisplay.classList.toggle('on');
      btnON.innerHTML = 'OFF'; 
      input.innerHTML = '';
    } else {
      btnON.innerHTML = 'ON';
      input.innerHTML = '';
    }

    if(inputVal === 'CE' || inputVal === 'AC'){
      console.log('Calculadora limpa');
      return input.innerHTML = '';
    } 
  }

}

// Variables
// var btnKeys = document.querySelectorAll( ".calc_keys .btn" );
// var btnON = document.getElementById('on').innerHTML;
// var input = document.querySelector('.calc_input .input p');
// var inputDisplay = document.querySelector('.calc_input .input');

// var lastInput = input.innerHTML.length;
// lastInput = -1;


// for(var i = 0; i < btnKeys.length; i++){
//   btnKeys[i].onclick = function(e){
//     var inputVal = this.innerHTML;    
//     // put btn value into input
//     input.innerHTML += inputVal;

//     // turn on / turn off
//     if(inputVal === 'ON'){
//       inputDisplay.classList.toggle('on') ? btnON = 'OFF' : btnON = 'ON';
//       input.innerHTML = '';
//     } 

//     if(inputVal === 'CE' || inputVal === 'AC'){
//       console.log('Calculadora limpa');
//       return input.innerHTML = '';
//     } 
//   }

// }
