/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight: number, height: number): number {
  // Write your code here 👇🏼
  const heightM = height / 100;
  const BMI = weight / (heightM * heightM);
  // Stop making changes here!
  return BMI;
}
console.log(calculateBMI(65, 159));

/**
 * Get BMI State
 * - Accepts BMI as a parameter (type number)
 * - returns a BMIStatus type indicating the BMI category (type BMIStatus)
 */

// Don't change this type
type BMIStatus = "underweight" | "healthy" | "overweight" | "obese";

function getBMIState(BMI: number): BMIStatus {
  // Don't change this variable
  let BMIState: BMIStatus = "obese";
  // Write your code here 👇🏼
  if (BMI <= 18.5) {
    BMIState = "underweight";
  } else if (BMI >= 18.5 && BMI < 25.0) {
    BMIState = "healthy";
  } else if (BMI >= 25.0 && BMI < 30.0) {
    BMIState = "overweight";
  } else {
    BMIState = "obese";
  }

  // Stop making changes here!
  return BMIState;
}

console.log(getBMIState(30.0));
/**
 * Get BMI State by Age
 * - Accepts BMI as a parameter (type number)
 * - Accepts age as a parameter (type number)
 * - returns a HealthStatus type indicating the BMI state (type HealthStatus)
 */

// Don't change this type
type HealthStatus = "not healthy" | "healthy";

function getBMIStateByAge(BMI: number, age: number): HealthStatus {
  // Don't change this variable
  let BMIState: HealthStatus = "not healthy";
  // Write your code here 👇🏼
  //Adult
  if (age >= 19 && age <= 24) {
    if (BMI >= 19 && BMI <= 24) {
      BMIState = "healthy";
    } //else default value
  } else if (age >= 25 && age <= 34) {
    if (BMI >= 20 && BMI <= 25) {
      BMIState = "healthy";
    } //else default value
  } else if (age >= 35 && age <= 44) {
    if (BMI >= 21 && BMI <= 26) {
      BMIState = "healthy";
    } //else default value
  } else if (age >= 45 && age <= 54) {
    if (BMI >= 22 && BMI <= 27) {
      BMIState = "healthy";
    } //else default value
  } else if (age >= 55 && age <= 64) {
    if (BMI >= 23 && BMI <= 28) {
      BMIState = "healthy";
    } //else default value
  } else if (age >= 65) {
    if (BMI >= 24 && BMI <= 29) {
      BMIState = "healthy";
    } //else default value
  } else BMIState = "not healthy";
  // Stop making changes here!
  return BMIState;
}

console.log(getBMIStateByAge(18.5, 2));
export { calculateBMI, getBMIState, getBMIStateByAge };
