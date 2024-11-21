import dayjs from "dayjs";

const selectedDate = document.getElementById("date-schedule");
const selectedHour = document.getElementById("hour-schedule");
const form = document.querySelector("form");
const inputClientName = document.getElementById("client-name");
const inputPetName = document.getElementById("pet-name");
const inputTelephone = document.getElementById("telephone");
const inputDescription = document.getElementById("service-description");

const inputDateToday = dayjs(new Date()).format("YYYY-MM-DD");
const inputHourNow = dayjs(new Date()).format("HH:MM");

selectedHour.value = inputHourNow;
selectedDate.value = inputDateToday;
selectedDate.min = inputDateToday;

form.onsubmit = async (e) => {
  e.preventDefault();
  console.log("ok");

  try {
    const clientName = inputClientName.value.trim();
    const petName = inputPetName.value.trim();

    if (!clientName) alert("Por favor, preencha o nome do cliente");
  } catch (error) {
    console.log(error);
    alert("Não foi possível concluir com o agendamento");
  }
};
