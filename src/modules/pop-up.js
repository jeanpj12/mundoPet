const addNewScheduleButton = document.querySelector(".add-schedule");
const popUp = document.querySelector("#pop-up");
const mainSelector = document.querySelector("main");
const popUpWrapper = document.querySelector(".popup-wrapper");

function handlePopUpState() {
  if (popUp.classList.contains("active")) {
    addNewScheduleButton.style.display = "none";
    mainSelector.style.filter = "blur(5px)";
    document.body.style.overflow = "hidden";
  } else {
    addNewScheduleButton.style.display = "flex";
    mainSelector.style.filter = "none";
    document.body.style.overflow = "auto";
  }
}

export function togglePopUp() {
    console.log("Toggle PopUP");
    popUp.classList.toggle("active");
    handlePopUpState();
  }

popUp.addEventListener("click", (e) => {
  if (popUp.contains(e.target) && popUp.classList.contains("active")) {
    togglePopUp()
  }
});

popUpWrapper.addEventListener("click", (e) => {
  e.stopPropagation();
});
