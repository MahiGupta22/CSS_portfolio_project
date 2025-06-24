function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate input fields
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values!");
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Get the result message based on BMI
    const bmiMessage = getBMIMessage(bmi);

    // Display the result
    document.getElementById('bmiMessage').innerHTML = bmiMessage;
}

function getBMIMessage(bmi) {
    if (bmi < 18.5) {
        return `Your BMI is ${bmi.toFixed(1)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI is ${bmi.toFixed(1)}, so you have a normal weight.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        return `Your BMI is ${bmi.toFixed(1)}, so you are overweight.`;
    } else {
        return `Your BMI is ${bmi.toFixed(1)}, so you are obese.`;
    }
}
