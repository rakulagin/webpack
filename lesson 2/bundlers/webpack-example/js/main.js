import {printError, printResult, printElaspedTime, clearElaspedTime} from "./printResult.js";
import getDateDiff from "./getDateDiff.js";
import getSound from "./sound";
import getStopped from "./getStopTimer";
import {calcBtnHandler, timerBtnHandler} from "./btnHandlers";


const calcBTN = document.getElementById('showCalc')
const timerBTN = document.getElementById('showTimer')

calcBTN.addEventListener('click', calcBtnHandler)
timerBTN.addEventListener('click', timerBtnHandler)




const formCalc = document.getElementById('dateCalc')

formCalc.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')

    if (!firstDate || !secondDate) {
        printError('введите дату')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        console.log(dateDiff)

        console.log(dateDiff.days)

        printResult(dateDiff)
    }
}


const timerInput = document.getElementById("timeInput");
const buttonStart = document.getElementById("timerStart");

buttonStart.addEventListener('click', function(event) {
        event.preventDefault();
        let timeValue = parseInt(timerInput.value)
        let timer = setInterval(() => {
            if (timeValue<=0) {
                getStopped(timer)
                clearElaspedTime() 
                getSound()
            } else {
                --timeValue;
                printElaspedTime(timeValue)
            }
        }, 1000);
    })

const timerStop = document.getElementById("timerStop")

timerStop.addEventListener('click', (event)=>{
    event.preventDefault();
    // getStopped()
})