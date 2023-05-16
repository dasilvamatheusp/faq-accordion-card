const allQuestions = document.querySelectorAll('.accordion-item')

for (let doubt of allQuestions) {
  const question = doubt.querySelector('.questions')
  question.addEventListener('click', ()=>{
    question.classList.toggle('question-bold')
    const response = doubt.querySelector('.response')
    response.classList.toggle('hidden')
    const arrowIcon = doubt.querySelector('.icon')
    arrowIcon.classList.toggle('rotate')
  })
}