document.getElementById("Calculate").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("Weight").value);
    
    var bmi = calculateBMI(height, weight);
    
    var results = document.getElementById("results");
    results.innerHTML = "Your BMI is: " + bmi.toFixed(2);
    
    var weightGuide = document.getElementById("weight-guide");
    if (bmi < 18.6) {
        weightGuide.innerHTML = "<h3>BMI Weight Guide</h3><p>Under Weight</p>";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        weightGuide.innerHTML = "<h3>BMI Weight Guide</h3><p>Normal Range</p>";
    } else {
        weightGuide.innerHTML = "<h3>BMI Weight Guide</h3><p>Overweight</p>";
    }
});

function calculateBMI(height, weight) {
    // Convert height from cm to meters
    var heightMeters = height / 100;
    // Calculate BMI
    var bmi = weight / (heightMeters * heightMeters);
    return bmi;
}