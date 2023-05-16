const questions = document.querySelectorAll('.questions')
const allQuestions = document.querySelectorAll('.accordion-item')
const arrow = document.querySelectorAll('.icon')
let selectedQuestion;
let selectedResponse;
let selectedIcon;

  for (let doubt of allQuestions) {
    doubt.addEventListener('click', e => {
      const question = doubt.querySelector('.questions')
      const response = doubt.querySelector('.hidden')
      const arrowIcon = doubt.querySelector('.icon')

      for (let selectedBold of questions) {
        selectedBold.classList.remove('question-bold')
      }

      for (let icon of arrow) {
        icon.classList.remove('rotate')
      }

      if (selectedIcon) {
        selectedIcon.classList.remove('rotate')
      }

      if (selectedQuestion) {
        selectedQuestion.classList.remove('question-bold')
        selectedResponse.classList.add('hidden')
      }

      arrowIcon.classList.toggle('rotate')
      question.classList.add('question-bold')
      response.classList.remove('hidden')
      
      selectedIcon = arrowIcon
      selectedQuestion = question
      selectedResponse = response
    })
  } 