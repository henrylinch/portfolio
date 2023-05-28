const convertBtn = document.getElementById("btn")
const renderLength = document.getElementById("render-length")
const renderVolume = document.getElementById("render-volume")
const renderMass = document.getElementById("render-mass")
const convertNumber = document.getElementById("convert")


convertBtn.addEventListener("click", function change() {
    //length conversion
    //1 meter = 3.281 feet
    let toFeet = (Number(convertNumber.value) * 3.281)
    let toMeters = (Number(convertNumber.value) / 3.281)
    let lengthContent = `
                        ${convertNumber.value} meter/s = ${toFeet.toFixed(3)} feet | 
                        ${convertNumber.value} feet = ${toMeters.toFixed(3)} meter/s
                        `
    renderLength.textContent = lengthContent

    //volume conversion
    //1 liter = 0.264 gallons
    let toGallons = (Number(convertNumber.value) * 0.264)
    let toLiters = (Number(convertNumber.value) / 0.264)
    let volumeContent = `
                        ${convertNumber.value} liter/s = ${toGallons.toFixed(3)} gallon/s | 
                        ${convertNumber.value} gallon/s = ${toLiters.toFixed(3)} liter/s
                        `
    renderVolume.textContent = volumeContent

    //mass conversion
    //1 kilogram = 2.204 pounds
    let toPounds = (Number(convertNumber.value) * 2.204)
    let toKilograms = (Number(convertNumber.value) / 2.204)
    let massContent = `
                        ${convertNumber.value} kilogram/s = ${toPounds.toFixed(3)} pound/s | 
                        ${convertNumber.value} pound/s = ${toKilograms.toFixed(3)} kilogram/s
                        `
    renderMass.textContent = massContent
})


































