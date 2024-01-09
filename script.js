// Get the counter element and the increment button
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

// Counter's initial value
let counterValue = 0;

// Function to increment the counter value
function incrementCounter() {
  // Display the current counter value before incrementing
  alert(`Counter value before increment: ${counterValue}`);
  
  // Increment the counter value
  counterValue++;
  
  // Update the counter text in the paragraph
  counterElement.textContent = counterValue;
}

// Add a click event listener to the increment button
incrementButton.addEventListener('click', incrementCounter);

cy.on('window:alert', alertText => {
  expect(alertText).to.contain('Counter value before increment:');
});

