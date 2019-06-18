import Question from './Question.js';
import TriviaApi from './TriviaApi.js';

class Quiz {

  static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.score=0;
    this.scoreHistory = [];
    // TASK: Add more props here per the exercise
  }

  // Example method:
  startGame() {
    this.active = true;
    const newGame = new TriviaApi();
    const questionData = newGame.getQuestions()
      .then(jsonData => {
        for (let i = 0; i < Quiz.DEFAULT_QUIZ_LENGTH; i++) {
          let rawQuestion = jsonData.results[i];
          let question = new Question(rawQuestion.question, rawQuestion.correct_answer, rawQuestion.incorrect_answer)
          this.unasked.push(question);
          console.log (this.unasked);
          console.log(this.unasked[0])
          return this.unasked;
        }
      })
     
  }

  nextQuestion(){
    console.log(this.unasked[0]);
    let newAsked = this.unasked.shift();
    console.log(this.unasked);
    this.asked.push(newAsked);
    console.log(this.asked);
    // question from asked to unasked
    
  }
  
  handleScoring(){
    const currentScore = Question.answerStatus();
    this.score += currentScore;
    this.scoreHistory.push(currentScore);
  }

  stopGame(){
    this.active = false;
    this.scoreHistory.push(score);
    console.log(this.scoreHistory);
  }

}

export default Quiz;
