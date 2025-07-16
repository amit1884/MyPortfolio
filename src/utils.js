export function getYearsAndMonths(dateInput) {
    const [day, month, year] = dateInput.split('-').map(Number);

    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - inputDate.getFullYear();
    let months = currentDate.getMonth() - inputDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years === 0) {
        return `${months} months`;
    } else if (year > 0) {
        if (months > 0)
            return `${years} years and ${months} months`;
        else
            return `${years} years`;
    }
}
