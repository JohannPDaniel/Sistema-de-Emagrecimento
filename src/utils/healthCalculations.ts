/**
 * Calculate BMI (Body Mass Index)
 * @param weight Weight in kilograms
 * @param height Height in centimeters
 * @returns BMI value
 */
export const calculateBMI = (weight: number, height: number): number => {
	// Convert height from cm to meters
	const heightInMeters = height / 100;

	// BMI formula: weight (kg) / (height (m))^2
	return weight / (heightInMeters * heightInMeters);
};

/**
 * Get BMI category based on BMI value
 * @param bmi BMI value
 * @returns BMI category as string
 */
export const getBMICategory = (bmi: number): string => {
	if (bmi < 18.5) {
		return 'Abaixo do Peso';
	} else if (bmi >= 18.5 && bmi < 25) {
		return 'Normal';
	} else if (bmi >= 25 && bmi < 30) {
		return 'Sobrepeso';
	} else if (bmi >= 30 && bmi < 35) {
		return 'Obesidade Grau I';
	} else if (bmi >= 35 && bmi < 40) {
		return 'Obesidade Grau II';
	} else {
		return 'Obesidade Grau III';
	}
};
