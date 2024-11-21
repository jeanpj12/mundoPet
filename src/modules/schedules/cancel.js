import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".schedules-area")

periods.forEach((period) => {
    period.addEventListener("click", async (e) => {
        if(e.target.classList.contains("remove")) {
            const item = e.target.closest("div")
            const name = item.querySelector(".client-name").textContent.replace("/ ", "")
            const {id} = item.dataset
            
            if(id) {
                const isConfirm = confirm(
                    `Deseja cancelar o agendamento de ${name}?`
                );

                if(isConfirm) {
                    await scheduleCancel({id});
                    schedulesDay()
                }
            }
        }
    })
})