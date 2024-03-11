document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.querySelector('.btn');
  submitBtn.addEventListener('click', function() {
    let score = 0;

    // Проверка с несколькими ответами
    const answers = document.querySelectorAll('input[type="checkbox"]')
    const answers2 = document.querySelectorAll('input[type="radio"]')
    const answers3 = document.querySelectorAll('input[type="text"]')
    console.log(answers)
    const questionsAnswer =[  
    ['11'],
    ['22'],
    ['30'],
    ['41'],
    ['50'],
    ['61'],
    ['70'],
    ['81'],
    ['91'],
    ['100'],
    ['112'],
    ['121']
    ]

    // ПРОВЕРКА С НЕСКОЛЬКИМИ ОТВЕТАМИ
    if (answers[1].checked && answers[2].checked && !answers[0].checked) {
      score++
    }
    // ПРОВЕРКА С 1 ОТВЕТОМ
    answers2.forEach(function(answer2) {
      questionsAnswer.forEach(function(index) {
        if (answer2.checked && index == answer2.id) {
          score++
        }
      }) 
    })

    // ПРОВЕРКА VALUE
    if (answers3[0].value.toLowerCase() === 'input') {
      score++
    }
    if (answers3[1].value.toLowerCase() === '13254') {
      score++
    }



    //Вывод результата
    alert(`Вы ответили правильно на ${score} вопросов из 15`)
  });
});
