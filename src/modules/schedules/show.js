import dayjs from "dayjs";

const schedulesMorning = document.getElementById("morning")
const schedulesAfternoon = document.getElementById("afternoon")
const schedulesNight = document.getElementById("night")


export function showSchedules({dailySchedules}) {
    schedulesMorning.innerHTML = ""
    schedulesAfternoon.innerHTML = ""
    schedulesNight.innerHTML = ""

    dailySchedules.forEach((schedule) => {
        const scheduleItem = document.createElement("div")
        scheduleItem.classList.add("schedule-item")

        const clientWrapper = document.createElement("div")

        const scheduleHour = document.createElement("strong")
        scheduleHour.classList.add("hour")
        scheduleHour.textContent= dayjs(schedule.when).format("HH:mm")

        const petName = document.createElement("span")
        petName.classList.add("pet-name")
        petName.textContent = schedule.petName

        const clientName = document.createElement("span")
        clientName.classList.add("client-name")
        clientName.textContent = `/ ${schedule.clientName}`

        clientWrapper.append(scheduleHour, petName, clientName)

        const service = document.createElement("span")
        service.classList.add("service")
        service.textContent = schedule.service

        const remove = document.createElement("span")
        remove.classList.add("remove")
        remove.textContent = "Remover agendamento"

        scheduleItem.append(clientWrapper, service, remove)

        const hour = dayjs(schedule.when).hour()
        console.log(hour)

        if(hour <= 12) {
            schedulesMorning.appendChild(scheduleItem)
        }

        if (hour > 12 && hour <= 18) {
            schedulesAfternoon.appendChild(scheduleItem)
        }

        if(hour > 18) {
            schedulesNight.appendChild(scheduleItem)
        }
    })
}