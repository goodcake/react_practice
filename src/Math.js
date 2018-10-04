export class Math {
    static parseEquation(equation) {
        const addValues = equation.split('+');
        let sum = 0;
        addValues.forEach((value) => {
            sum += parseInt(value.trim());
        });
        return sum;
    }
}