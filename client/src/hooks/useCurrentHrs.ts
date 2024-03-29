import { useEffect, useState } from "react"


export const useCurrentHrs = () => {
    const [currentHrs, setCurrentHrs] = useState<string>("")

    const updateCurrentTime = () => {
        const date = new Date()
        let hr: number | string = date.getHours()
        let min: number | string = date.getMinutes()

        hr = hr < 10 ? `0${hr}` : hr
        min = min < 10 ? `0${min}` : min

        const hrs = `${hr}:${min} `
        setCurrentHrs(hrs)
    }

    useEffect(() => {
        updateCurrentTime()

        const interval = setInterval(updateCurrentTime, 30000)

        return () => clearInterval(interval)
    }, [])


    return currentHrs || "00:00"
}
