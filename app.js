const btn = document.querySelector('.btn')
const title = document.querySelector('.title')
const advice = document.querySelector('.advice')

const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    title.innerHTML = `Advice #${data.slip.id}`
    advice.innerHTML = `${data.slip.advice}`
}
btn.addEventListener('click', getAdvice)

