// Get the string from the page.
function getValue() {
   // Add invisible to class.
   document.getElementById("alert").classList.add("invisible");

   // Variables
   let userSting = document.getElementById("userSting").value;
   let revString = reverseString(userSting);

   // Call displayString.
   displayString(revString);
}

// Reverse the string.
function reverseString(userSting) {
   let revString = [];

   // Reverse a string using a for loop
   for (let index = userSting.length - 1; index >= 0; index--) {
      revString += userSting[index];
   }

   return revString;
}

// Display the message with reversed string.
function displayString(revString) {
   // Write to the page
   document.getElementById("message").innerHTML = `Your string reversed is: ${revString}`;

   // Show the alert box
   document.getElementById("alert").classList.remove("invisible");
}