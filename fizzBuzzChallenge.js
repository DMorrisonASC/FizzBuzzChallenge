// Function lists the X amount of number user input and replaces numbers that are diviesable 
function countFizzBuzz() {
    listFizzBuzzDiv.innerHTML = "";
    // Get the number the user puts in
    const inputFizzBuzz = document.getElementById("inputFizzBuzz");
    let limitFizzBuzz = inputFizzBuzz.value;
    // Variable to count amount of fizzes and Buzzes; 
    let amountOfFizzBuzz = 0;
    let amountOfFizz = 0;
    let amountOfBuzz = 0;
    for (let i = 1; i <= limitFizzBuzz; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            // Create "p" tag
            const putFizzBuzz = document.createElement("p");
            // Create and give it a text, "FizzBuzz"
            var text = document.createTextNode("FizzBuzz");
            putFizzBuzz.appendChild(text);
            // Give it a class name to edit in css file
            putFizzBuzz.className = "p_fizzbuzz";
            // The Div that will list the Fizzes & Buzzes in the Index file.
            // Find it and append putFizzBuzz("FizzBuzz")
            const listFizzBuzzDiv = document.getElementById("listFizzBuzzDiv");
            listFizzBuzzDiv.appendChild(putFizzBuzz);
            // Count the FizzBuzzes
            amountOfFizzBuzz += 1;
        }

        else if (i % 3 == 0) {
            // Create "p" tag
            const putFizz = document.createElement("p");
            // Create and give it a text, "Fizz"
            var text = document.createTextNode("Fizz");
            putFizz.appendChild(text);
            // Give it a class name to edit in css file
            putFizz.className = "p_fizz";
            // The Div that will list the Fizzes & Buzzes in the Index file.
            // Find it and append putFizzBuzz("Fizz")
            const listFizzBuzzDiv = document.getElementById("listFizzBuzzDiv");
            listFizzBuzzDiv.appendChild(putFizz);
            // Count the Fizz
            amountOfFizz += 1;
        }
        else if (i % 5 == 0) {
            // Create "p" tag
            const putBuzz = document.createElement("p");
            // Create and give it a text, "Buzz"
            let text = document.createTextNode("Buzz");
            putBuzz.appendChild(text);
            // Give it a class name to edit in css file
            putBuzz.className = "p_Buzz";
            // The Div that will list the Fizzes & Buzzes in the Index file.
            // Find it and append putFizzBuzz("Fizz")
            const listFizzBuzzDiv = document.getElementById("listFizzBuzzDiv");
            listFizzBuzzDiv.appendChild(putBuzz);
            // Count the Buzz
            amountOfBuzz += 1;
        }
        else {
            // Create "p" tag
            const countNum = document.createElement("p");
            // Give it a value based on times it runs
            let value = document.createTextNode(i);
            // Add it the "p" tag(countNum)
            countNum.appendChild(value);
            // Give it a class name (numbers) to edit in css file
            countNum.className = "p_countNum"
            // Append the "p" tag(countNum) to The Div that will list the Fizzes & Buzzes in the Index file.
            const listFizzBuzzDiv = document.getElementById("listFizzBuzzDiv");
            listFizzBuzzDiv.appendChild(countNum);
        }
    }
    // If this line of code is placed into the loops, its scope will cause it to continously count, instead of giving me the total amount.
    // Clears previous results
    XnumberOfFizzBuzzes.innerHTML = "";
    XnumberOfFizz.innerHTML = "";
    XnumberOfBuzz.innerHTML = "";
    // Then runs loop. If loop is not present, the innerhtml doesn't update and remains empty
    for (let i = 0; i < 1; i++) {
        // Append number and show X amount of times "FizzBuzz" present
        const XnumberOfFizzBuzzes = document.getElementById("XnumberOfFizzBuzzes");
        let textFizzBuzz = document.createTextNode(amountOfFizzBuzz);
        XnumberOfFizzBuzzes.appendChild(textFizzBuzz);
        // Append number and show X amount of times "Fizz" present
        const XnumberOfFizz = document.getElementById("XnumberOfFizz");
        let textFizz = document.createTextNode(amountOfFizz);
        XnumberOfFizz.appendChild(textFizz);
        // Append number and show X amount of times "Buzz" present
        const XnumberOfBuzz = document.getElementById("XnumberOfBuzz");
        let textBuzz = document.createTextNode(amountOfBuzz);
        XnumberOfBuzz.appendChild(textBuzz);
    }
}
