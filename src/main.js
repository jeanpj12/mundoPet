"use strict"

// CSS
import "./styles/global.css"
import "./styles/header-logo.css"
import "./styles/utility.css"
import "./styles/main.css"
import "./styles/inputs/index.css"
import "./styles/cards-schedules.css"
import "./styles/button.css"
import "./styles/popup/pop-up.css"

const addNewScheduleButton = document.querySelector(".add-schedule")
const popUpActive = document.querySelector(".active")
const mainSelector = document.querySelector("main")

if (popUpActive) {
    addNewScheduleButton.style.display = "none"
    mainSelector.style.filter = "blur(5px)"
    document.body.style.overflow = "hidden";
}