//your JS code here. If required.
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementByID('incrementBtn');

let counterValue = 0;

function incrementCounter(){
	alert(`counter value before increment: ${counterValue}`);

	countValue++;
	counterElement.textContent = countValue;
}

incrementButton.addEventListener('click' , incrementCounter);
