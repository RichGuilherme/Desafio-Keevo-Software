export const GetCurrentDate = () => {
    const currentDate = new Date()
    const day = currentDate.getDate()
    const year = currentDate.getFullYear()

    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    const month = months[currentDate.getMonth()]

    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const dayOfWeek = daysOfWeek[currentDate.getDay()]

    return `${dayOfWeek}, ${day} ${month}' ${year}`
}