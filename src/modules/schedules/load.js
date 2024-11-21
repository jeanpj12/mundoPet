import dayjs from "dayjs";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { showSchedules } from "./show.js";

const inputDate = document.getElementById("date");
inputDate.value = dayjs(new Date()).format("YYYY-MM-DD");

export async function schedulesDay() {
  try {
    const date = dayjs(inputDate.value);
    const dailySchedules = await scheduleFetchByDay({ date });
    showSchedules({ dailySchedules });
  } catch (error) {
    console.log(error);
  }
}
