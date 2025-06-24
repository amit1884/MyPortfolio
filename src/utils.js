export function getYearsAndMonths(dateInput) {
    // Split the input date into day, month, and year
    const [day, month, year] = dateInput.split('-').map(Number);

    // Create a new Date object (JavaScript months are 0-indexed, so subtract 1 from the month)
    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    // Calculate the difference in years and months
    let years = currentDate.getFullYear() - inputDate.getFullYear();
    let months = currentDate.getMonth() - inputDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    // Format the result
    if (years === 0) {
        return `${months} months`;
    } else if (year > 0) {
        if (months > 0)
            return `${years} years and ${months} months`;
        else
            return `${years} years`;
    }
}
