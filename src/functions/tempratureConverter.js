export const temperatureConverter = (temp) => {
    const KELVIN = 273.15
    return Math.ceil(Number(temp) - KELVIN)
}