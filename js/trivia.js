const trivia = [
  {
    question: "Name the Californian beach city, in Los Angeles County, which is also a 2017 single by Miley Cyrus?",
    options: ["Malibu", "Nevada", "Pacific Coast", "Arizona"],
    answer: "Malibu"

  },
  {
    question: "Which California valley on the north coast is considered one of the premier wine regions in the world?",
    options: ["Napa Valley", "The Central Valley", "Mojave Desert", "Oroville"],
    answer: "Napa Valley"

  },
  {
    question: "Name the state capital of California?",
    options: ["Sacramento", "Los Angeles", "San Diego", "San Jose"],
    answer: "Sacramento"

  },
  {
    question: "Which Hollywood A-lister is the former mayor of Carmel?",
    options: ["Clint Eastwood", "Bill de Blasio", "London Breed", "Sam Liccardo"],
    answer: "Clint Eastwood"

  },
  {
    question: "Part of which desert is located primarily in southeastern California?",
    options: ["Mojave", "Sonoran", "Cadillac", "Eritrean"],
    answer: "Mojave"

  },
  {
    question: "Which radioactive chemical element, first synthesized in 1950 and with the symbol Cf, was named after California?",
    options: ["Californium", "Cerium", "chlorophyll", "Calcium"],
    answer: "Californium"

  },
  {
    question: "The Golden Gate Bridge opened in which decade?",
    options: ["1930s (1937)", "1934s (1934)", "1937s (1937)", "1938s (1938)",],
    answer: "1930s (1937)"

  },
  {
    question: "Which city is the economic centre of Silicon Valley and the largest in Northern California?",
    options: ["San Jose", "Oakland", "Santa Barbara", "Los Angeles"],
    answer: "San Jose"

  },
  {
    question: "What's the name of the the giant sequoia tree located in Sequoia National Park which is the largest known living tree in the world?",
    options: ["General Sherman", "President", "Genesis", "Monroe"],
    answer: "General Sherman",
  },
  {
    question: "Name the highest mountain in California?",
    options: ["Mount Whitney", "Mount Shasta", "Mount San Jacinto", "Mammoth Mountain"],
    answer: "Mount Whitney"
  },
]

let score = 0;

$(() => {

  init();

});

const init = () => {
  burgerInit();
  createTriviaQuestions(trivia);
  viewEvents();
}

const viewEvents = () => {
  let questions = $("#trivia form");
  questions.each(function (i) {

    $(`#trivia form#question-${i} input`).click(function () {
      let optionNumber = $(this).attr("name");
      let isAnswerCorrect = $(this).val() == trivia[i].answer;
      if (isAnswerCorrect) {
        $(`#question${i}option${optionNumber}`).attr("class", "option pt-2 pl-2 bg-success");
        score += 10;
        $("#id_score").html(`Score:${score}/100`)
      } else {
        $(`#question${i}option${optionNumber}`).attr("class", "option pt-2 pl-2 bg-danger");
      }

      $(`#trivia form#question-${i} input`).prop("disabled", true)
    })
  })

}

const createTriviaQuestions = (_ar) => {

  _ar.map((question, i) => {
    $('#trivia').append(`
    <form class="question" id="question-${i}">
        <div class="row">
          <div class="col-12 p-4">
            <p class="h5 bg-warning mb-0 p-2">${question.question}</p>
        </div>
      </form>
    `);
    createTriviaQuestionsOptions(`#question-${i} .col-12`, i, question.options)
  })

}

const createTriviaQuestionsOptions = (parent, questionIndex, _ar) => {
  _ar.map((option, i) => {
    $(parent).append(`
      <div id="question${questionIndex}option${i}" class="pt-2 pl-2 bg-light">
      <input type="radio" name="${i}" value="${option}">
      <label>${option}</label>
    </div>
  `)
  })
}