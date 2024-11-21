import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { togglePopUp } from "../pop-up.js";
import { schedulesDay } from "../schedules/load.js";

const selectedDate = document.getElementById("date-schedule");
const selectedHour = document.getElementById("hour-schedule");
const form = document.querySelector("form");
const inputClientName = document.getElementById("tutor-name");
const inputPetName = document.getElementById("pet-name");
let inputTelephone = document.getElementById("telephone");
const inputDescription = document.getElementById("service-description");

const inputDateToday = dayjs(new Date()).format("YYYY-MM-DD");
const inputHourNow = dayjs(new Date()).format("HH:MM");

selectedHour.value = inputHourNow;
selectedDate.value = inputDateToday;
selectedDate.min = inputDateToday;

inputTelephone.oninput = () => {
  const regex = /[^\d()-\s]/g;
  inputTelephone.value = inputTelephone.value.replace(regex, "");

  let value = inputTelephone.value.replace(/\D/g, "");
  if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  if (value.length > 8) value = `${value.slice(0, 9)}-${value.slice(9, 13)}`;

  inputTelephone.value = value;
};

form.onsubmit = async (e) => {
  e.preventDefault();

  try {
    const clientName = inputClientName.value.trim();
    const petName = inputPetName.value.trim();
    const service = inputDescription.value.trim();
    const telephone = inputTelephone.value;
    const [hour, minutes] = selectedHour.value.split(":").map(Number);

    if (!clientName) alert("Por favor, preencha o nome do cliente");
    if (!petName) alert("Por favor, preencha o nome do pet");
    if (!telephone) alert("Por favor, preencha o número de telefone");
    if (!service) alert("Por favor, preencha a descrição do serviço");

    const when = dayjs(selectedDate.value)
      .add(hour, "hour")
      .add(minutes, "minute").$d;
    const id = new Date().getTime().toString();

    await scheduleNew({
      id,
      clientName,
      petName,
      service,
      telephone,
      when,
    });

    inputClientName.value = "";
    inputPetName.value = "";
    inputDescription.value = "";
    inputTelephone.value = "";

    togglePopUp();
    schedulesDay();
  } catch (error) {
    console.log(error);
    alert("Não foi possível concluir com o agendamento");
  }
};
