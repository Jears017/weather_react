export const pressureConverter = (pressure) => {
    const pressureDefault = 133
    let pressureBeforeTrunc = (Number(pressure) / pressureDefault)*100
    return Math.ceil(pressureBeforeTrunc)
}