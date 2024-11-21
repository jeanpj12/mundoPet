import dayjs from "dayjs";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { showSchedules } from "./show.js";

const inputDate = document.getElementById("date");
inputDate.value = dayjs(new Date()).format("YYYY-MM-DD");
const date = dayjs(inputDate.value);

export async function schedulesDay() {
  try {
    const dailySchedules = await scheduleFetchByDay({ date });
    console.log(dayjs(dailySchedules[0].when).hour());
    showSchedules({ dailySchedules });
  } catch (error) {
    console.log(error);
  }
}
