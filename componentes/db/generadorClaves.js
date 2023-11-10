export const generarClave = () => {
    const countries = [
        "Usa", "Canada", "ReinoUnido", "Francia", 
        "Alemania", "Italia", "Espana", "Japon", 
        "Australia", "Brasil", "Mexico", "Argentina", 
        "Chile", "India", "China", "Rusia", 
        "Sudafrica", "Egipto", "Guinea", "Irlanda",
        "Nepal", "Grecia", "Suiza"
    ]

    const specialChars = "!@#$%^&*()_-+=<>?"

    const randomCountry = countries[Math.floor(Math.random() * countries.length)]
    const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)]
    const randomNum = Math.floor(Math.random() * 100) + 1
    return `${randomCountry}${randomSpecialChar}${randomNum}`
}