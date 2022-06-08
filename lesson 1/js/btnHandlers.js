const formCalc = document.getElementById('dateCalc')
const formTimer = document.getElementById('formTimer')

export const calcBtnHandler = ()=> {
    formCalc.style.display = 'block'
    formTimer.style.display = 'none'
}

export const timerBtnHandler = ()=> {
    formCalc.style.display = 'none'
    formTimer.style.display = 'block'
}

