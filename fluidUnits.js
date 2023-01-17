var thing = document.getElementById('oneUnits');
var inp = document.getElementById('oneInp');
var thingTwo = document.getElementById('twoUnits');
var qoq = document.getElementById('bob');
var abc;

function show(input) {
	qoq.innerText = input + " " + thingTwo.value;
}

function convert() {
	if(thing.value === thingTwo.value){
		alert("Why are you trying to convert " + thing.value + " to " 		+ thingTwo.value + "???");
	}
	else if(thing.value === 'gallons') {
		if(thingTwo.value === 'quarts') {
			abc = inp.value * 4;
		}
		else if(thingTwo.value === 'pints') {
			abc = inp.value * 8;
		}
		else if(thingTwo.value === 'cups') {
			abc = inp.value * 16;
		}
		
	}
	else if(thing.value === 'quarts') {
		if(thingTwo.value === 'gallons') {
			abc = inp.value/4;
		}
		else if(thingTwo.value === 'pints') {
			abc = inp.value * 2;
		}
		else if(thingTwo.value === 'cups') {
			abc = inp.value * 4
		}
	}
	else if(thing.value === 'pints') {
		if(thingTwo.value === 'gallons') {
			abc = inp.value/8;
		}
		else if(thingTwo.value === 'quarts') {
			abc = inp.value/2;
		}
		else if (thingTwo.value === 'cups') {
			abc = inp.value * 2;
		}
	}
	else if(thing.value === 'cups') {
		if(thingTwo.value === 'gallons') {
			abc === inp.value/16;
		}
		else if(thingTwo.value === 'quarts') {
			abc = inp.value/4;
		}
		else if(thingTwo.value === 'pints') {
			abc = inp.value/2;
		}
	}
	else if(thing.value === 'nothing' || thingTwo.value === 'nothing'){
		alert('Nice try');.
		abc = '';
	}
	show(abc);
}
