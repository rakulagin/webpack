const result = document.getElementById('dateCalc_result')
const timerShow = document.getElementById("timer_result"); // Берём блок для показа времени

export const printError = (errorText) => {
    result.innerText = errorText
}

export const printResult = (date) => {
    result.innerText = date
}

export const printElaspedTime = (time) => {
    timerShow.innerText = time
}

export const clearElaspedTime = () => {
    timerShow.innerText = ''
}