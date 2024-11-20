import { togglePopUp } from "./pop-up.js"

const popUp = document.querySelector("#pop-up")
const addNewScheduleButton = document.querySelector(".add-schedule button")

addNewScheduleButton.addEventListener("click", () => {
    togglePopUp()
})